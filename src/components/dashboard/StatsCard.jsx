import React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

const StatsCard = ({ title, value, icon: IconComponent, trend }) => {
    const trendColor = trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-neutral-500"
    const TrendIcon = trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : null

    return (
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 flex flex-col transition-colors duration-300">
            <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
                {IconComponent && <IconComponent className="h-5 w-5 text-neutral-400 dark:text-neutral-300" />}
            </div>
            <div className="mt-2 flex items-center gap-2">
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</p>
                {TrendIcon && <TrendIcon className={`h-4 w-4 ${trendColor}`} />}
            </div>
        </div>
    )
}

export default StatsCard
