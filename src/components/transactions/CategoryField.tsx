import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBottomSheet from "./CategoryBottomSheet";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface CategoryFieldProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
  transactionType: "expense" | "income";
}

const iconMap: { [key: string]: React.ElementType } = {
  Utensils: require("lucide-react").Utensils,
  ReceiptText: require("lucide-react").ReceiptText,
  HeartPulse: require("lucide-react").HeartPulse,
  Plane: require("lucide-react").Plane,
  Book: require("lucide-react").Book,
  Home: require("lucide-react").Home,
  Car: require("lucide-react").Car,
  FileText: require("lucide-react").FileText,
  Briefcase: require("lucide-react").Briefcase,
  Laptop: require("lucide-react").Laptop,
  TrendingUp: require("lucide-react").TrendingUp,
  Gift: require("lucide-react").Gift,
};

const CategoryField: React.FC<CategoryFieldProps> = ({
  selectedCategory,
  onSelectCategory,
  transactionType,
}) => {
  const [open, setOpen] = React.useState(false);
  const IconComponent = selectedCategory ? iconMap[selectedCategory.icon] : null;

  return (
    <>
      <Button
        variant="outline"
        className="flex h-14 w-full items-center justify-between rounded-xl border-gray-300 bg-gray-100 px-4 text-base font-medium text-gray-700 hover:bg-gray-50"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-3">
          {selectedCategory && IconComponent && (
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full", selectedCategory.color)}>
              <IconComponent className="h-4 w-4 text-white" />
            </div>
          )}
          <span>{selectedCategory ? selectedCategory.name : "Select Category"}</span>
        </div>
        <ChevronDown className="h-5 w-5 text-gray-500" />
      </Button>
      <CategoryBottomSheet
        open={open}
        onOpenChange={setOpen}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
        transactionType={transactionType}
      />
    </>
  );
};

export default CategoryField;