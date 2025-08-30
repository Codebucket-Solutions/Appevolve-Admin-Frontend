import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // default border
        "peer size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none",
        // checked state → blue bg + border
        "data-[state=checked]:bg-[#0073EA] data-[state=checked]:border-[#0073EA]",
        // dark mode
        "dark:border-white dark:data-[state=checked]:bg-[#0073EA] dark:data-[state=checked]:border-[#0073EA]",
        // focus
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
        // size
        "size-5",
        // disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        // check icon same as background color
        className="flex items-center justify-center text-white transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
