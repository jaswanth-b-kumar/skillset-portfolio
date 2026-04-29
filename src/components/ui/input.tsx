import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-[4px] border border-black bg-white px-6 py-4 text-base font-normal leading-5 tracking-[-0.02em] text-black placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 transition-[border]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
