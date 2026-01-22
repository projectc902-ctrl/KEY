import React from "react";
import { Wallet } from "lucide-react";

const LoginIllustration = () => {
  return (
    <div className="relative hidden h-full flex-col items-center justify-center overflow-hidden rounded-r-2xl bg-gradient-to-br from-orange-gradient-start to-orange-gradient-end p-8 lg:flex lg:w-1/2">
      <div className="absolute left-8 top-8 flex items-center gap-2 text-white">
        <Wallet className="h-8 w-8" />
        <span className="text-3xl font-bold">$budgetab</span>
      </div>
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src="/financial-management-illustration.jpeg" // Menggunakan gambar yang baru diunggah
          alt="Financial Management Illustration"
          className="max-h-[90%] w-auto object-contain drop-shadow-2xl" // Menyesuaikan ukuran dan menambahkan shadow
        />
      </div>
    </div>
  );
};

export default LoginIllustration;