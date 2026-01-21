import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Gift, Zap, Shirt, Gamepad2, Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  icon: React.ElementType;
  iconBgColor: string;
}

const dummyTransactions: Transaction[] = [
  {
    id: "1",
    name: "Salary",
    category: "Income",
    date: "Nov 14, 2022",
    amount: 5500.00,
    type: "income",
    icon: Briefcase,
    iconBgColor: "bg-red-expense", // Using red-expense for salary icon as per prompt, but green-income might be more intuitive
  },
  {
    id: "2",
    name: "Entertainment",
    category: "Expense",
    date: "Nov 13, 2022",
    amount: -100.00,
    type: "expense",
    icon: Gift,
    iconBgColor: "bg-orange-gradient-start",
  },
  {
    id: "3",
    name: "Electronics",
    category: "Expense",
    date: "Nov 12, 2022",
    amount: -150.00,
    type: "expense",
    icon: Zap,
    iconBgColor: "bg-yellow-warning",
  },
  {
    id: "4",
    name: "Clothing",
    category: "Expense",
    date: "Nov 11, 2022",
    amount: -50.00,
    type: "expense",
    icon: Shirt,
    iconBgColor: "bg-purple-primary",
  },
  {
    id: "5",
    name: "Game",
    category: "Expense",
    date: "Nov 10, 2022",
    amount: -30.00,
    type: "expense",
    icon: Gamepad2,
    iconBgColor: "bg-teal-500", // Teal not in custom palette, using a default for now
  },
  {
    id: "6",
    name: "Gifts",
    category: "Expense",
    date: "Nov 09, 2022",
    amount: -20.00,
    type: "expense",
    icon: Package,
    iconBgColor: "bg-blue-500", // Blue not in custom palette, using a default for now
  },
];

const TransactionsHistory = () => {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Transactions History</h2>
        <Link to="/transactions" className="text-sm text-purple-primary hover:underline">
          See all
        </Link>
      </div>
      <div className="space-y-3">
        {dummyTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:bg-light-purple-tint"
          >
            <div className="flex items-center space-x-4">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  transaction.iconBgColor,
                )}
              >
                <transaction.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">{transaction.name}</p>
                <p className="text-xs text-gray-500">
                  {transaction.category} • {transaction.date}
                </p>
              </div>
            </div>
            <p
              className={cn(
                "text-base font-bold",
                transaction.type === "income" ? "text-green-income" : "text-red-expense",
              )}
            >
              {transaction.type === "income" ? "+" : "-"} ${Math.abs(transaction.amount).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransactionsHistory;