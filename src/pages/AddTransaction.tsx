import React from "react";
import AddTransactionHeader from "@/components/transactions/AddTransactionHeader";
import TransactionForm from "@/components/transactions/TransactionForm";
import BottomNavigationBar from "@/components/dashboard/BottomNavigationBar"; // Assuming it's used on all main screens

const AddTransaction = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-light-purple-tint pb-20">
      <AddTransactionHeader />
      <main className="container mx-auto flex-grow p-4">
        <TransactionForm />
      </main>
      <BottomNavigationBar />
    </div>
  );
};

export default AddTransaction;