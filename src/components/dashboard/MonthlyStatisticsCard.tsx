import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MonthlyData {
  month: string;
  expenses: number;
}

const dummyMonthlyData: MonthlyData[] = [
  { month: "Jul", expenses: 250 },
  { month: "Aug", expenses: 300 },
  { month: "Sep", expenses: 450 },
  { month: "Oct", expenses: 380 },
  { month: "Nov", expenses: 500 },
  { month: "Dec", expenses: 420 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-gray-800/80 p-2 text-white shadow-lg">
        <p className="text-sm font-bold">{label}</p>
        <p className="text-xs">{`Expenses: $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const MonthlyStatisticsCard = () => {
  return (
    <Card className="mb-6 rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900">Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dummyMonthlyData}
            margin={{
              top: 5,
              right: 10,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" opacity={0.5} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(139, 92, 246, 0.1)" }} />
            <Bar dataKey="expenses" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyStatisticsCard;