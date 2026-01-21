import React from "react";
import StatisticsHeader from "@/components/statistics/StatisticsHeader";
import TimePeriodTabs from "@/components/statistics/TimePeriodTabs";
import DataTypeSelector from "@/components/statistics/DataTypeSelector";
import SpendingLineChart from "@/components/statistics/SpendingLineChart";
import TopSpendingList from "@/components/statistics/TopSpendingList";
import BottomNavigationBar from "@/components/dashboard/BottomNavigationBar";

const Statistics = () => {
  const [activeTab, setActiveTab] = React.useState<"day" | "week" | "month">("month");
  const [selectedType, setSelectedType] = React.useState<"expense" | "income" | "all">("expense");

  return (
    <div className="relative flex min-h-screen flex-col bg-light-purple-tint pb-20">
      <StatisticsHeader />
      <main className="container mx-auto flex-grow p-4">
        <div className="mb-6 flex items-center justify-between">
          <TimePeriodTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <DataTypeSelector selectedType={selectedType} onTypeChange={setSelectedType} />
        </div>
        <SpendingLineChart />
        <TopSpendingList />
      </main>
      <BottomNavigationBar />
    </div>
  );
};

export default Statistics;