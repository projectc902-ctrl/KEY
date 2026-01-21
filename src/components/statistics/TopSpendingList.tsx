import React from "react";
import { Link } from "react-router-dom";
import { Monitor, Book, Shirt } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpendingItem {
  id: string;
  name: string;
  date: string;
  amount: number;
  icon: React.ElementType;
  iconBgColor: string;
}

const dummyTopSpending: SpendingItem[] = [
  {
    id: "1",
    name: "Electronics",
    date: "Dec 12, 2022",
    amount: -100.00,
    icon: Monitor,
    iconBgColor: "bg-yellow-warning",
  },
  {
    id: "2",
    name: "Education",
    date: "Dec 12, 2022",
    amount: -100.00,
    icon: Book,
    iconBgColor: "bg-green-income",
  },
  {
    id: "3",
    name: "Clothing",
    date: "Dec 12, 2022",
    amount: -50.00,
    icon: Shirt,
    iconBgColor: "bg-purple-primary",
  },
];

const TopSpendingList = () => {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Top Spending</h2>
        <Link to="/transactions" className="text-sm text-purple-primary hover:underline">
          See all
        </Link>
      </div>
      <div className="space-y-3">
        {dummyTopSpending.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:bg-light-purple-tint"
          >
            <div className="flex items-center space-x-4">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  item.iconBgColor,
                )}
              >
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
            <p className="text-base font-bold text-red-expense">
              - ${Math.abs(item.amount).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSpendingList;