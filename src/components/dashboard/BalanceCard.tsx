import React from "react";
import { Eye, EyeOff, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"; // Import Badge component

const BalanceCard = () => {
  const [showBalance, setShowBalance] = React.useState(true);
  
  // Dummy Data for Financial Summary
  const totalBalance = 5150.00;
  const totalIncome = 5500.00;
  const totalExpenses = 350.00;
  const totalTransactions = 120; // Dummy count

  // Calculate Savings Rate
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;
  const isHighSavings = savingsRate >= 80;

  // Simple counter animation for demonstration
  const [displayBalance, setDisplayBalance] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = totalBalance;
    const duration = 1000; // 1 second
    const increment = end / (duration / 16); // ~60 frames per second

    const animate = () => {
      start += increment;
      if (start < end) {
        setDisplayBalance(start);
        requestAnimationFrame(animate);
      } else {
        setDisplayBalance(end);
      }
    };
    requestAnimationFrame(animate);
  }, [totalBalance]);

  const formatCurrency = (amount: number) => {
    return showBalance ? `$${amount.toFixed(2)}` : "********";
  };

  return (
    <div
      className={cn(
        "relative mx-auto mb-6 w-full max-w-md rounded-2xl bg-gradient-to-br from-purple-primary to-purple-accent p-6 shadow-xl",
        "shadow-purple-primary/30",
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-base text-white opacity-90">Current Balance</p>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-white opacity-80 hover:opacity-100"
        >
          {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      <h2 className="mb-4 text-4xl font-extrabold text-white">
        {formatCurrency(displayBalance)}
      </h2>

      <div className="grid grid-cols-2 gap-4 text-white">
        <div className="flex flex-col items-start">
          <div className="mb-1 flex items-center space-x-2">
            <div className="rounded-full bg-white bg-opacity-20 p-1">
              <ArrowDownCircle className="h-5 w-5 text-green-income" />
            </div>
            <p className="text-sm opacity-80">Total Income</p>
          </div>
          <p className="text-lg font-bold">{formatCurrency(totalIncome)}</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-1 flex items-center space-x-2">
            <div className="rounded-full bg-white bg-opacity-20 p-1">
              <ArrowUpCircle className="h-5 w-5 text-red-expense" />
            </div>
            <p className="text-sm opacity-80">Total Expenses</p>
          </div>
          <p className="text-lg font-bold">{formatCurrency(totalExpenses)}</p>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-sm opacity-80">Total Transactions</p>
          <p className="text-lg font-bold">{totalTransactions}</p>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-sm opacity-80">Savings Rate</p>
          <Badge className={cn(
            "text-lg font-bold px-3 py-1 rounded-full",
            isHighSavings ? "bg-green-income text-white" : "bg-red-expense text-white"
          )}>
            {savingsRate.toFixed(0)}%
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;