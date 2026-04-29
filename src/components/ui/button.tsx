import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white rounded-[4px] hover:opacity-85",
        outline:
          "border-2 border-black bg-white text-black rounded-[4px] hover:opacity-75",
        ghost: "hover:bg-black/5 rounded-[4px]",
        icon: "bg-black text-white rounded-[4px] hover:opacity-85",
        "icon-outline":
          "border-2 border-black bg-white rounded-[4px] hover:opacity-75",
      },
      size: {
        default: "h-14 px-5 text-xl tracking-[0.02em]",
        sm: "h-9 px-3 text-sm",
        lg: "h-16 px-8 text-2xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
