import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryData {
  name: string;
  value: number;
  color: string;
}

const dummyCategoryData: CategoryData[] = [
  { name: "Food", value: 300, color: "#EF4444" }, // red-expense
  { name: "Bills", value: 200, color: "#F59E0B" }, // yellow-warning
  { name: "Travel", value: 150, color: "#8B5CF6" }, // purple-primary
  { name: "Health", value: 100, color: "#10B981" }, // green-income (using for health for contrast)
  { name: "Shopping", value: 80, color: "#A78BFA" }, // purple-accent
  { name: "Other", value: 50, color: "#6B7280" }, // gray
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-gray-800/80 p-2 text-white shadow-lg">
        <p className="text-sm font-bold">{payload[0].name}</p>
        <p className="text-xs">{`Amount: $${payload[0].value.toFixed(2)}`}</p>
        <p className="text-xs">{`Percentage: ${(payload[0].percent * 100).toFixed(1)}%`}</p>
      </div>
    );
  }
  return null;
};

const CategoriesBreakdownCard = () => {
  const totalSpending = dummyCategoryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="mb-6 rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900">Spending by Category</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px] p-4 flex flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dummyCategoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              labelLine={false}
            >
              {dummyCategoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm">
          {dummyCategoryData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <span className={cn("h-3 w-3 rounded-full mr-2", `bg-[${entry.color}]`)} style={{ backgroundColor: entry.color }} />
              <span className="text-gray-700">{entry.name} ({(entry.value / totalSpending * 100).toFixed(0)}%)</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoriesBreakdownCard;