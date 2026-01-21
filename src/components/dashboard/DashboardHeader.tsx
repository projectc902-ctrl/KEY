import React from "react";
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  const userName = "Leslie Alexander";
  const greeting = "Good afternoon,"; // This could be dynamic based on time

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> {/* Placeholder avatar */}
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-gray-600">{greeting}</p>
          <h1 className="text-lg font-bold text-gray-900">{userName}</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-purple-primary/10 hover:text-purple-primary">
          <Bell className="h-6 w-6 text-gray-700 transition-colors" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-expense text-xs font-bold text-white">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-primary/10 hover:text-purple-primary">
          <Settings className="h-6 w-6 text-gray-700 transition-colors" />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;