import React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

const StatsCard = ({ title, value, icon: IconComponent, trend, bg = "bg-blue-500" }) => {
    const trendColor =
        trend === "up"
            ? "text-green-200"
            : trend === "down"
            ? "text-red-200"
            : "text-neutral-200"

    const TrendIcon = trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : null

    return (
        <div className={`rounded-2xl shadow p-4 flex flex-col text-white transition-colors duration-300 ${bg}`}>
            <div className="flex items-center justify-between">
                <p className="text-sm opacity-80">{title}</p>
                {IconComponent && <IconComponent className="h-5 w-5 opacity-80" />}
            </div>
            <div className="mt-2 flex items-center gap-2">
                <p className="text-2xl font-bold">{value}</p>
                {TrendIcon && <TrendIcon className={`h-4 w-4 ${trendColor}`} />}
            </div>
        </div>
    )
}

export default StatsCard
