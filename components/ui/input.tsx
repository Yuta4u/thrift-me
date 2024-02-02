import * as React from "react"
import { cn } from "../../lib/utils"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const isMobile =
      typeof window !== "undefined" && window.innerWidth <= 767.98
    return (
      <div
        className={`flex items-center relative ${!isMobile ? "w-96" : "w-3/5"}`}
      >
        <input
          type={type}
          className={cn(
            "h-9 w-full rounded-md border border-neutral-500 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            className
          )}
          ref={ref}
          {...props}
        />
        <MagnifyingGlassIcon
          className="absolute right-2"
          width="20"
          height="20"
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
