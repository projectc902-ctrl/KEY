import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, CheckCircle, PiggyBank, Lock } from "lucide-react"; // Example icons
import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  unlocked: boolean;
  color: string;
}

const dummyAchievements: Achievement[] = [
  {
    id: "1",
    name: "First Transaction",
    description: "Add your very first transaction.",
    icon: Star,
    unlocked: true,
    color: "text-yellow-warning",
  },
  {
    id: "2",
    name: "Consistent Tracker",
    description: "Log transactions daily for 7 consecutive days.",
    icon: CheckCircle,
    unlocked: false,
    color: "text-green-income",
  },
  {
    id: "3",
    name: "Big Saver",
    description: "Achieve a savings rate above 80%.",
    icon: PiggyBank,
    unlocked: true,
    color: "text-purple-primary",
  },
  {
    id: "4",
    name: "Organized",
    description: "Categorize all your transactions.",
    icon: Trophy,
    unlocked: false,
    color: "text-blue-500",
  },
  {
    id: "5",
    name: "Financial Guru",
    description: "Unlock all achievements.",
    icon: Trophy,
    unlocked: false,
    color: "text-orange-gradient-start",
  },
];

const AchievementsSection = () => {
  return (
    <Card className="mb-6 rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900">Your Achievements</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 p-4">
        {dummyAchievements.map((achievement) => {
          const IconComponent = achievement.icon;
          return (
            <div key={achievement.id} className="flex flex-col items-center text-center">
              <div className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-2",
                achievement.unlocked ? "bg-light-purple-tint" : "bg-gray-100"
              )}>
                {achievement.unlocked ? (
                  <IconComponent className={cn("h-8 w-8", achievement.color)} />
                ) : (
                  <Lock className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <p className={cn(
                "text-sm font-semibold",
                achievement.unlocked ? "text-gray-900" : "text-gray-500"
              )}>
                {achievement.unlocked ? achievement.name : "???"}
              </p>
              {achievement.unlocked && (
                <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AchievementsSection;