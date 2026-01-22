import React from "react";
import { Wallet } from "lucide-react";

const LoginIllustration = () => {
  return (
    <div className="relative hidden h-full flex-col items-center justify-center overflow-hidden rounded-r-2xl bg-gradient-to-br from-orange-gradient-start to-orange-gradient-end p-8 lg:flex lg:w-[55%] lg:rounded-br-[150px]"> {/* Adjusted width and added bottom-right radius */}
      <div className="absolute left-8 top-8 flex items-center gap-2 text-white">
        <Wallet className="h-8 w-8" />
        <span className="text-3xl font-bold">$budgetab</span>
      </div>
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src="/financial-management-illustration.jpeg"
          alt="Financial Management Illustration"
          className="absolute bottom-0 right-0 max-h-[90%] w-auto object-contain drop-shadow-2xl" // Adjusted positioning
        />
      </div>
    </div>
  );
};

export default LoginIllustration;