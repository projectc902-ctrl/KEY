import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import TransactionsHistory from "@/components/dashboard/TransactionsHistory";
import FAB from "@/components/dashboard/FAB";
import BottomNavigationBar from "@/components/dashboard/BottomNavigationBar";
import MonthlyStatisticsCard from "@/components/dashboard/MonthlyStatisticsCard"; // New import
import CategoriesBreakdownCard from "@/components/dashboard/CategoriesBreakdownCard"; // New import
import AchievementsSection from "@/components/dashboard/AchievementsSection"; // New import

const Dashboard = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-light-purple-tint pb-20">
      <DashboardHeader />
      <main className="container mx-auto flex-grow p-4">
        <BalanceCard />
        <MonthlyStatisticsCard /> {/* New component */}
        <CategoriesBreakdownCard /> {/* New component */}
        <TransactionsHistory />
        <AchievementsSection /> {/* New component */}
      </main>
      <FAB />
      <BottomNavigationBar />
    </div>
  );
};

export default Dashboard;