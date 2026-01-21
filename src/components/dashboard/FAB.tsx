import React from "react";
import { Plus, ArrowDown, ArrowUp, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FAB = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 transform md:bottom-8">
      {isOpen && (
        <div className="absolute bottom-full mb-4 flex flex-col items-center space-y-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-green-income shadow-md hover:scale-105 hover:bg-green-income/90"
            onClick={() => console.log("Add Income")}
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-red-expense shadow-md hover:scale-105 hover:bg-red-expense/90"
            onClick={() => console.log("Add Expense")}
          >
            <ArrowUp className="h-6 w-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-blue-500 shadow-md hover:scale-105 hover:bg-blue-500/90" // Using default blue for now
            onClick={() => console.log("Add Transfer")}
          >
            <Repeat className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}
      <Button
        size="icon"
        className={cn(
          "relative z-20 h-14 w-14 rounded-full bg-gradient-to-r from-purple-primary to-purple-accent shadow-xl transition-all duration-300 hover:scale-105",
          "shadow-purple-primary/40",
          isOpen && "rotate-45",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Plus className="h-8 w-8 text-white" />
      </Button>
    </div>
  );
};

export default FAB;