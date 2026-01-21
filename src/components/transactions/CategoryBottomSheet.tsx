import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus, Check, Utensils, ReceiptText, HeartPulse, Plane, Book, Home, Car, FileText, Briefcase, Laptop, TrendingUp, Gift } from "lucide-react"; // Import all necessary Lucide icons
import { cn } from "@/lib/utils";

// Dummy categories for demonstration
const dummyCategories = {
  expense: [
    { id: "1", name: "Food", icon: "Utensils", color: "bg-red-expense" },
    { id: "2", name: "Bills", icon: "ReceiptText", color: "bg-pink-500" },
    { id: "3", name: "Health", icon: "HeartPulse", color: "bg-yellow-warning" },
    { id: "4", name: "Travel", icon: "Plane", color: "bg-purple-primary" },
    { id: "5", name: "Education", icon: "Book", color: "bg-cyan-500" },
    { id: "6", name: "Home", icon: "Home", color: "bg-orange-gradient-start" },
    { id: "7", name: "Car", icon: "Car", color: "bg-red-500" },
    { id: "8", name: "Tax", icon: "FileText", color: "bg-yellow-600" },
  ],
  income: [
    { id: "9", name: "Salary", icon: "Briefcase", color: "bg-green-income" },
    { id: "10", name: "Freelance", icon: "Laptop", color: "bg-blue-500" },
    { id: "11", name: "Investments", icon: "TrendingUp", color: "bg-teal-500" },
    { id: "12", name: "Gifts", icon: "Gift", color: "bg-purple-accent" },
  ],
};

interface Category {
  id: string;
  name: string;
  icon: string; // Using string to dynamically render LucideIcon
  color: string;
}

interface CategoryBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
  transactionType: "expense" | "income";
}

const iconMap: { [key: string]: React.ElementType } = {
  Utensils: Utensils,
  ReceiptText: ReceiptText,
  HeartPulse: HeartPulse,
  Plane: Plane,
  Book: Book,
  Home: Home,
  Car: Car,
  FileText: FileText,
  Briefcase: Briefcase,
  Laptop: Laptop,
  TrendingUp: TrendingUp,
  Gift: Gift,
};

const CategoryBottomSheet: React.FC<CategoryBottomSheetProps> = ({
  open,
  onOpenChange,
  onSelectCategory,
  selectedCategory,
  transactionType,
}) => {
  const categoriesToDisplay = dummyCategories[transactionType];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-2xl p-0">
        <SheetHeader className="p-4 pb-0">
          <SheetTitle className="text-center text-xl font-bold text-gray-900">Select Category</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <Button variant="ghost" className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-green-income text-green-income hover:bg-green-income/10">
            <Plus className="h-5 w-5" />
            Add New Category
          </Button>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {categoriesToDisplay.map((category) => {
              const IconComponent = iconMap[category.icon];
              const isSelected = selectedCategory?.id === category.id;
              return (
                <button
                  key={category.id}
                  className={cn(
                    "flex flex-col items-center justify-center space-y-2 rounded-xl p-2 transition-all hover:bg-gray-100",
                    isSelected && "border-2 border-purple-primary",
                  )}
                  onClick={() => onSelectCategory(category)}
                >
                  <div className={cn("relative flex h-12 w-12 items-center justify-center rounded-full", category.color)}>
                    {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                    {isSelected && (
                      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-primary">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-center text-xs font-medium text-gray-700">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CategoryBottomSheet;