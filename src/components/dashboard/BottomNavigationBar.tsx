import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, PieChart, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={cn(
      "flex flex-col items-center justify-center p-2 transition-colors duration-300",
      isActive ? "text-purple-primary" : "text-gray-500 hover:text-purple-primary",
    )}
  >
    <Icon className={cn("h-6 w-6", isActive && "fill-purple-primary")} />
    <span className={cn("mt-1 text-xs", isActive && "font-bold")}>{label}</span>
  </Link>
);

const BottomNavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex h-[70px] items-center justify-around border-t border-gray-200 bg-white shadow-lg md:hidden">
      <NavItem to="/dashboard" icon={Home} label="Home" isActive={location.pathname === "/dashboard"} />
      <NavItem to="/statistics" icon={PieChart} label="Statistics" isActive={location.pathname === "/statistics"} />
      {/* Spacer for FAB */}
      <div className="h-full w-16"></div> 
      <NavItem to="/settings" icon={Settings} label="Settings" isActive={location.pathname === "/settings"} />
      <NavItem to="/profile" icon={User} label="Profile" isActive={location.pathname === "/profile"} />
    </nav>
  );
};

export default BottomNavigationBar;