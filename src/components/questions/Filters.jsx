import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { X, ChevronDown } from "lucide-react"

const Filters = () => {
    const [selected, setSelected] = useState({})

    const filtersConfig = [
        { id: "domain", label: "Domain", options: ["Frontend", "Backend", "DevOps", "AI"] },
        { id: "levels", label: "Levels", options: ["Beginner", "Intermediate", "Advanced"] },
        { id: "topics", label: "Topics", options: ["React", "Node.js", "Docker", "ML"] },
        { id: "criteria", label: "Criteria", options: ["Speed", "Accuracy", "Code Quality"] },
        { id: "name", label: "Name", options: ["Test 1", "Test 2", "Test 3"] },
    ]

    const toggleOption = (filterId, option) => {
        setSelected((prev) => {
            const current = prev[filterId] || []
            return {
                ...prev,
                [filterId]: current.includes(option)
                    ? current.filter((o) => o !== option)
                    : [...current, option],
            }
        })
    }

    const removeFilter = (filterId) => {
        setSelected((prev) => {
            const updated = { ...prev }
            delete updated[filterId]
            return updated
        })
    }

    return (
        <div className="bg-white dark:bg-[#151515] rounded-[4px] shadow p-6 flex flex-col gap-3 border border-gray-200 dark:border-neutral-800 text-black dark:text-[#676879]">
            <h3 className="text-lg font-semibold">Filters</h3>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 items-center">
                {filtersConfig.map((f) => (
                    <Popover key={f.id}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex items-center gap-1 bg-white dark:bg-[#111111] border border-gray-300 dark:border-[#323338] text-sm hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full px-3 h-6"
                            >
                                <X
                                    onClick={(e) => {
                                        e.stopPropagation() // prevent popover opening
                                        removeFilter(f.id)
                                    }}
                                    className="h-4 w-4 text-gray-500 dark:text-[#676879] hover:text-red-500 dark:hover:text-red-400 cursor-pointer"
                                />
                                <span>
                                    {f.label}
                                    {selected[f.id]?.length > 0 && `: ${selected[f.id].length} selected`}
                                </span>
                                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-[#676879]" />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="bg-white dark:bg-[#151515] border border-gray-300 dark:border-neutral-700 p-2 rounded-lg ml-12">
                            {f.options.map((option) => {
                                const isChecked = selected[f.id]?.includes(option) || false
                                return (
                                    <label
                                        key={option}
                                        className="flex items-center space-x-2 p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded cursor-pointer"
                                    >
                                        <Checkbox
                                            checked={isChecked}
                                            onCheckedChange={() => toggleOption(f.id, option)}
                                            className="border-gray-400 dark:border-gray-600 bg-white dark:bg-neutral-800"
                                        />
                                        <span className="text-sm">{option}</span>
                                    </label>
                                )
                            })}
                        </PopoverContent>
                    </Popover>
                ))}

                {/* Add & Clear buttons */}
                {/* <Button
                    variant="outline"
                    className="flex items-center gap-1 bg-white dark:bg-[#151515] border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm rounded-full"
                >
                    <span className="text-green-500 dark:text-green-400">▮▮▮</span> Add Filter
                </Button> */}
                <Button
                    variant="outline"
                    className="flex items-center gap-1 ml-auto bg-gray-100 dark:bg-[#323338] dark:text-white border border-gray-300 dark:border-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-700 text-sm rounded-full h-6"
                    onClick={() => setSelected({})}
                >
                    Clear All <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default Filters
