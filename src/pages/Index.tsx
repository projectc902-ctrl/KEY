import AuthLayout from "@/components/auth/AuthLayout";
import { useSession } from "@/components/auth/SessionContextProvider";
import { useNavigate } from "react-router-dom";
import React from "react";

const Index = () => {
  const { session, isLoading } = useSession();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading && session) {
      navigate("/dashboard");
    }
  }, [session, isLoading, navigate]);

  if (isLoading || session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-light-purple-tint">
        <p className="text-lg text-purple-primary">Loading application...</p>
      </div>
    );
  }

  return <AuthLayout />;
};

export default Index;