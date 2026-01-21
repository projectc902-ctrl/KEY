import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Check, LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input"; // Using shadcn's Input as base

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  showValidationCheck?: boolean;
  isPassword?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      className,
      type,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      showValidationCheck,
      isPassword,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="relative flex items-center">
        {LeftIcon && (
          <LeftIcon className="absolute left-4 h-5 w-5 text-gray-400" />
        )}
        <Input
          type={inputType}
          className={cn(
            "h-14 rounded-xl bg-gray-100 pl-12 pr-12 text-base placeholder:text-gray-400 focus-visible:ring-purple-primary focus-visible:ring-offset-0",
            LeftIcon && "pl-12",
            className,
          )}
          ref={ref}
          {...props}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-gray-400 hover:text-purple-primary"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        ) : (
          RightIcon && (
            <RightIcon className="absolute right-4 h-5 w-5 text-gray-400" />
          )
        )}
        {showValidationCheck && (
          <Check className="absolute right-4 h-5 w-5 text-green-income" />
        )}
      </div>
    );
  },
);
CustomInput.displayName = "CustomInput";

export { CustomInput };