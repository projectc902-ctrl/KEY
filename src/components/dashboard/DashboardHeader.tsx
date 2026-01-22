import React from "react";
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "@/components/auth/SessionContextProvider"; // Import useSession

const DashboardHeader = () => {
  const { user } = useSession(); // Get user from session
  const userName = user?.user_metadata?.first_name && user?.user_metadata?.last_name
    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
    : user?.email || "Guest User";
  const userEmail = user?.email || "";
  const memberSince = user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "N/A";
  const greeting = "Good afternoon,"; // This could be dynamic based on time

  const handleAvatarClick = () => {
    console.log("Open photo viewer or upload new photo");
    // Implement logic for photo viewer/upload
  };

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <button onClick={handleAvatarClick} className="relative">
          <Avatar className="h-14 w-14 border-2 border-white shadow-sm"> {/* Increased avatar size */}
            <AvatarImage src={user?.user_metadata?.avatar_url || "https://github.com/shadcn.png"} alt={userName} />
            <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </button>
        <div>
          <p className="text-sm text-gray-600">{greeting}</p>
          <h1 className="text-lg font-bold text-gray-900">{userName}</h1>
          <p className="text-xs text-gray-500">{userEmail}</p>
          <p className="text-xs text-gray-500">Member since {memberSince}</p>
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