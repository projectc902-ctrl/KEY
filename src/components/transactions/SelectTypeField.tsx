import React from "react";
import { ChevronDown, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface SelectTypeFieldProps {
  selectedType: "expense" | "income";
  onTypeChange: (type: "expense" | "income") => void;
}

const SelectTypeField: React.FC<SelectTypeFieldProps> = ({ selectedType, onTypeChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (type: "expense" | "income") => {
    onTypeChange(type);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex h-14 w-full items-center justify-between rounded-xl border-gray-300 bg-gray-100 px-4 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          <span className="capitalize">{selectedType}</span>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-2xl p-0">
        <SheetHeader className="p-4 pb-0">
          <SheetTitle className="text-center text-xl font-bold text-gray-900">Select Type</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4">
          <Button
            variant="ghost"
            className={cn(
              "flex h-14 items-center justify-start gap-4 rounded-xl text-base",
              selectedType === "expense" ? "bg-red-expense/10 text-red-expense" : "text-gray-700 hover:bg-gray-100",
            )}
            onClick={() => handleSelect("expense")}
          >
            <ArrowUpCircle className="h-6 w-6" />
            Expense
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "flex h-14 items-center justify-start gap-4 rounded-xl text-base",
              selectedType === "income" ? "bg-green-income/10 text-green-income" : "text-gray-700 hover:bg-gray-100",
            )}
            onClick={() => handleSelect("income")}
          >
            <ArrowDownCircle className="h-6 w-6" />
            Income
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectTypeField;