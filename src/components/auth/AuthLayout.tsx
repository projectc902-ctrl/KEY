import React from "react";
import LoginIllustration from "./LoginIllustration";
import LoginForm from "./LoginForm";
import { useIsMobile } from "@/hooks/use-mobile";

const AuthLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 lg:bg-white">
      <div className="flex h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl lg:h-[700px]">
        {!isMobile && <LoginIllustration />}
        <LoginForm />
      </div>
    </div>
  );
};

export default AuthLayout;