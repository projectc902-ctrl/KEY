import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Facebook, Twitter, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";
import { Separator } from "@/components/ui/separator";
import { SocialButton } from "@/components/ui/social-button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsEmailValid(email.includes("@") && email.includes("."));
  }, [email]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      showError(error.message);
    } else {
      // Redirection is handled by SessionContextProvider
      showSuccess("Login successful! Redirecting to dashboard.");
    }
    setIsSubmitting(false);
  };

  const handleJoin = () => {
    navigate("/register"); // Navigate to the new registration page
  };

  return (
    <div className="flex w-full flex-col items-center justify-center p-8 md:p-12 lg:w-1/2 lg:p-16">
      <div className="w-full max-w-md">
        <h2 className="mb-2 text-center text-4xl font-bold text-purple-primary md:text-left">
          Welcome Back :)
        </h2>
        <p className="mb-8 text-center text-sm text-gray-500 md:text-left">
          To keep connected with us please login with your personal information
          by email address and password
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <CustomInput
            leftIcon={User}
            placeholder="yourmail@company.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            showValidationCheck={isEmailValid}
            disabled={isSubmitting}
          />
          <CustomInput
            leftIcon={Lock}
            placeholder="Password"
            isPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isSubmitting}
          />

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <CustomCheckbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(!!checked)}
                disabled={isSubmitting}
              />
              <label
                htmlFor="remember-me"
                className="cursor-pointer text-gray-600"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-gray-500 transition-colors hover:text-purple-primary"
            >
              Forgot password?
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              type="submit"
              className={cn(
                "h-14 w-3/5 rounded-2xl bg-gradient-to-r from-purple-primary to-purple-accent text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl",
                "shadow-purple-primary/30 hover:shadow-purple-primary/50",
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-14 w-2/5 rounded-2xl border-2 border-purple-primary text-lg font-bold text-purple-primary transition-all hover:bg-purple-primary/10 hover:text-purple-accent"
              onClick={handleJoin}
              disabled={isSubmitting}
            >
              Join
            </Button>
          </div>
        </form>

        <div className="my-8 flex items-center">
          <Separator className="flex-grow bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">Join with</span>
          <Separator className="flex-grow bg-gray-300" />
        </div>

        <div className="flex justify-center space-x-4">
          <SocialButton icon={Facebook} bgColor="bg-facebook-blue" disabled={isSubmitting} />
          <SocialButton icon={Chrome} bgColor="bg-google-red" disabled={isSubmitting} />
          <SocialButton icon={Twitter} bgColor="bg-twitter-light-blue" disabled={isSubmitting} />
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          © Copyright 2019 Budgetab - Drivester Ltd. 67 Albion Street, West
          Yorkshire, Leeds LS1 5AA, United Kingdom.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;