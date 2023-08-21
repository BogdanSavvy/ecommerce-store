"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-auto rounded-full border-transparent bg-black px-4 py-5 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
