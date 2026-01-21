import React from "react";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const StatisticsHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-primary/10 hover:text-purple-primary" onClick={() => navigate(-1)}>
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </Button>
      <h1 className="text-lg font-bold text-gray-900">Statistics</h1>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-primary/10 hover:text-purple-primary">
        <MoreVertical className="h-6 w-6 text-gray-700" />
      </Button>
    </header>
  );
};

export default StatisticsHeader;