import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";
import SelectTypeField from "./SelectTypeField";
import CategoryField from "./CategoryField";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const TransactionForm = () => {
  const [searchParams] = useSearchParams();
  const initialTransactionType = (searchParams.get("type") as "expense" | "income" | "transfer") || "expense";

  const [transactionType, setTransactionType] = React.useState<"expense" | "income">(
    initialTransactionType === "transfer" ? "expense" : initialTransactionType,
  );
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!amount || parseFloat(amount) <= 0) {
      showError("Please enter a valid amount.");
      setIsSubmitting(false);
      return;
    }
    if (!selectedCategory) {
      showError("Please select a category.");
      setIsSubmitting(false);
      return;
    }
    if (!selectedDate) {
      showError("Please select a date.");
      setIsSubmitting(false);
      return;
    }

    console.log("Submitting transaction:", {
      type: transactionType,
      amount: parseFloat(amount),
      category: selectedCategory,
      date: selectedDate.toISOString(),
      description,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    showSuccess("Transaction added successfully!");
    setIsSubmitting(false);
    // Reset form or navigate back
  };

  return (
    <form onSubmit={handleSubmit} className="relative -mt-12 rounded-t-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-gray-900 capitalize">
        Add {transactionType}
      </h2>

      {/* Select Type Field */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">Type</label>
        <SelectTypeField selectedType={transactionType} onTypeChange={setTransactionType} />
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">Category</label>
        <CategoryField
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          transactionType={transactionType}
        />
      </div>

      {/* Amount Input Field */}
      <div className="mb-6">
        <label htmlFor="amount" className="sr-only">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="$0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full text-center text-5xl font-bold text-gray-900 border-none focus:ring-0 bg-transparent"
          step="0.01"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Placeholder for Date Picker Field */}
      <div className="mb-4 p-4 border rounded-lg">Date Picker Field (Coming Soon)</div>

      {/* Placeholder for Description Field */}
      <div className="mb-4 p-4 border rounded-lg">Description Field (Coming Soon)</div>

      {/* Placeholder for Attach Receipt Button */}
      <div className="mb-8 p-4 border rounded-lg">Attach Receipt Button (Coming Soon)</div>

      <Button
        type="submit"
        className={cn(
          "w-full h-14 rounded-xl bg-gradient-to-r from-purple-primary to-purple-accent text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl",
          "shadow-purple-primary/30 hover:shadow-purple-primary/50",
        )}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding Transaction..." : "Add Transaction"}
      </Button>
    </form>
  );
};

export default TransactionForm;