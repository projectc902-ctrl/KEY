import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimePeriodTabsProps {
  activeTab: "day" | "week" | "month";
  onTabChange: (tab: "day" | "week" | "month") => void;
}

const TimePeriodTabs: React.FC<TimePeriodTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="relative flex h-10 items-center justify-center rounded-full bg-gray-100 p-1">
      <div
        className={cn(
          "absolute h-8 rounded-full bg-gradient-to-r from-purple-primary to-purple-accent transition-all duration-300",
          activeTab === "day" && "w-1/3 left-1",
          activeTab === "week" && "w-1/3 left-1/3",
          activeTab === "month" && "w-1/3 right-1",
        )}
      />
      <Button
        variant="ghost"
        className={cn(
          "relative z-10 flex-1 h-8 rounded-full text-sm font-medium transition-colors duration-300",
          activeTab === "day" ? "text-white" : "text-gray-700 hover:text-purple-primary",
        )}
        onClick={() => onTabChange("day")}
      >
        Day
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "relative z-10 flex-1 h-8 rounded-full text-sm font-medium transition-colors duration-300",
          activeTab === "week" ? "text-white" : "text-gray-700 hover:text-purple-primary",
        )}
        onClick={() => onTabChange("week")}
      >
        Week
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "relative z-10 flex-1 h-8 rounded-full text-sm font-medium transition-colors duration-300",
          activeTab === "month" ? "text-white" : "text-gray-700 hover:text-purple-primary",
        )}
        onClick={() => onTabChange("month")}
      >
        Month
      </Button>
    </div>
  );
};

export default TimePeriodTabs;