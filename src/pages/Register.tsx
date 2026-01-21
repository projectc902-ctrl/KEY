import React from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginIllustration from "@/components/auth/LoginIllustration";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSession } from "@/components/auth/SessionContextProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const isMobile = useIsMobile();
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

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 lg:bg-white">
      <div className="flex h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl lg:h-[700px]">
        {!isMobile && <LoginIllustration />}
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;