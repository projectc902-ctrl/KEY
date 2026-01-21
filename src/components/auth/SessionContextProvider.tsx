import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useLocation } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";

interface SessionContextType {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user || null);
        setIsLoading(false);

        if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
          if (location.pathname === "/" || location.pathname === "/login") {
            showSuccess("Login successful! Redirecting to dashboard.");
            navigate("/dashboard");
          }
        } else if (event === "SIGNED_OUT") {
          showSuccess("You have been signed out.");
          navigate("/");
        } else if (event === "INITIAL_SESSION" && currentSession) {
          // If there's an initial session, redirect to dashboard
          if (location.pathname === "/" || location.pathname === "/login") {
            navigate("/dashboard");
          }
        } else if (event === "INITIAL_SESSION" && !currentSession) {
          // If no initial session, ensure we are on the login page
          if (location.pathname !== "/" && location.pathname !== "/login") {
            navigate("/");
          }
        }
      },
    );

    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setUser(initialSession?.user || null);
      setIsLoading(false);
      if (initialSession && (location.pathname === "/" || location.pathname === "/login")) {
        navigate("/dashboard");
      } else if (!initialSession && location.pathname !== "/" && location.pathname !== "/login") {
        navigate("/");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  // If loading, you might want to render a loading spinner or null
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-light-purple-tint">
        <p className="text-lg text-purple-primary">Loading application...</p>
      </div>
    );
  }

  return (
    <SessionContext.Provider value={{ session, user, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionContextProvider");
  }
  return context;
};