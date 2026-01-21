import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  icon: LucideIcon;
  bgColor: string;
}

const SocialButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  SocialButtonProps
>(({ className, icon: Icon, bgColor, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "h-12 w-12 rounded-full p-0 shadow-md transition-all hover:scale-105",
      bgColor,
      className,
    )}
    {...props}
  >
    <Icon className="h-6 w-6 text-white" />
  </Button>
));
SocialButton.displayName = "SocialButton";

export { SocialButton };