import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-[4px] border border-black bg-white px-6 py-4 text-base font-normal leading-5 tracking-[-0.02em] text-black placeholder:text-zinc-500 focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-[border]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
