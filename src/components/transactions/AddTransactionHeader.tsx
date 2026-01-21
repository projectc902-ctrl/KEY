import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AddTransactionHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 flex h-24 items-center justify-between bg-gradient-to-r from-purple-primary to-purple-accent p-4">
      <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/20" onClick={() => navigate(-1)}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <h1 className="text-xl font-bold text-white">Add Transaction</h1>
      <div className="w-10"></div> {/* Spacer for alignment */}
    </header>
  );
};

export default AddTransactionHeader;