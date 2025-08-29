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
        <div className={`relative overflow-hidden shadow p-4 h-36 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-[8px] text-white transition-colors duration-300 ${bg}`}>
            {/* Background circle */}
            {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full opacity-30" /> */}
            <div className="absolute bottom-4 -left-40 w-md h-96 rounded-full opacity-10 bg-current filter brightness-85 saturate-200" />


            {/* Content */}
            <div className="grid grid-cols-2 gap-2 relative z-10">
                {IconComponent && <IconComponent className="h-6 w-6 sm:h-5 sm:w-5" />}
                <p className="text-lg sm:text-md md:text-2xl lg:text-3xl font-medium">{title}</p>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center gap-2 relative z-10">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{value}</p>
                {/* {TrendIcon && <TrendIcon className={`h-4 w-4 ${trendColor}`} />} */}
            </div>
        </div>
    )
}

export default StatsCard
