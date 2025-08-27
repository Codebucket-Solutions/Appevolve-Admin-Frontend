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
        <div className={`rounded-sm shadow p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white transition-colors duration-300 ${bg}`}>
            <div className="grid grid-cols-2 gap-2">
                {IconComponent && <IconComponent className="h-6 w-6 sm:h-5 sm:w-5" />}
                <p className="text-lg sm:text-md md:text-lg lg:text-2xl font-medium">{title}</p>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center gap-2">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{value}</p>
                {/* {TrendIcon && <TrendIcon className={`h-4 w-4 ${trendColor}`} />} */}
            </div>
        </div>
    )
}

export default StatsCard
