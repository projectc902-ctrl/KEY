import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  value: number;
}

const dummyChartData: ChartData[] = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 450 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 600 },
  { name: "May", value: 350 },
  { name: "Jun", value: 500 },
  { name: "Jul", value: 650 },
  { name: "Aug", value: 400 },
  { name: "Sep", value: 700 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-gray-800/80 p-2 text-white shadow-lg">
        <p className="text-sm font-bold">{label}</p>
        <p className="text-xs">{`Amount: $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const SpendingLineChart = () => {
  const maxValue = Math.max(...dummyChartData.map((d) => d.value));
  const peakData = dummyChartData.find((d) => d.value === maxValue);

  return (
    <div className="relative h-[300px] w-full rounded-2xl bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dummyChartData}
          margin={{
            top: 20,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" opacity={0.5} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
            domain={[0, 700]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#8B5CF6", strokeWidth: 1, strokeDasharray: "3 3" }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorPurple)"
            strokeWidth={3}
            dot={{ r: 6, fill: "#8B5CF6", stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 8, fill: "#8B5CF6", stroke: "#fff", strokeWidth: 2 }}
          />
          <defs>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
      {peakData && (
        <div
          className={cn(
            "absolute rounded-md bg-purple-primary px-2 py-1 text-xs font-bold text-white shadow-md",
            "left-[calc(50%_-_20px)] top-[calc(50%_-_40px)]", // Adjust positioning as needed
          )}
          style={{
            left: `${(dummyChartData.indexOf(peakData) / (dummyChartData.length - 1)) * 100}%`,
            top: `${100 - (peakData.value / 700) * 100}%`, // Assuming max Y is 700
            transform: 'translate(-50%, -120%)', // Adjust to position above the dot
          }}
        >
          ${peakData.value}
        </div>
      )}
    </div>
  );
};

export default SpendingLineChart;