import React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface DataTypeSelectorProps {
  selectedType: "expense" | "income" | "all";
  onTypeChange: (type: "expense" | "income" | "all") => void;
}

const DataTypeSelector: React.FC<DataTypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  const getLabel = (type: "expense" | "income" | "all") => {
    switch (type) {
      case "expense":
        return "Expense";
      case "income":
        return "Income";
      case "all":
        return "All";
      default:
        return "Select Type";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-between gap-2 rounded-lg border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {getLabel(selectedType)}
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 rounded-lg shadow-lg">
        <DropdownMenuItem onClick={() => onTypeChange("expense")} className="cursor-pointer hover:bg-gray-100 rounded-md">
          Expense
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onTypeChange("income")} className="cursor-pointer hover:bg-gray-100 rounded-md">
          Income
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onTypeChange("all")} className="cursor-pointer hover:bg-gray-100 rounded-md">
          All
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTypeSelector;