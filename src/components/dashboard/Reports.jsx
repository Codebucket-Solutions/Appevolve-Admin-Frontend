import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import LIcon from "../ui/LIcon";

const UserReports = ({
    title = "Users",
    subtitle = "Click to Add clients, Users",
    data = null,
}) => {
    const chartData = data || [
        { name: "July 2025", value: 0 },
        { name: "", value: 20 },
        { name: "Today", value: 0 },
        { name: "", value: 10 },
        { name: "", value: 0 },
    ];

    const totalUsers = 3;

    return (
        <div className="bg-white dark:bg-[#151515] text-black dark:text-white rounded-[4px] border border-[#C8C8C8] dark:border-[#323338] transition-colors duration-300">

            <div className="flex items-start justify-between mb-4 p-4">
                <div>
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-sm text-neutral-500 dark:text-white cursor-pointer hover:underline">
                        {subtitle}
                    </p>
                </div>
                <div className="bg-neutral-100 dark:bg-white p-2 rounded-full cursor-pointer">
                    <LIcon name="Users" size={24} className="text-black dark:text-black p-1" />
                </div>
            </div>

            <hr className="border-neutral-200 dark:border-[#323338]" />

            <div className="mb-8 p-4">
                <span className="text-4xl font-semibold">{totalUsers}</span>
                <span className="text-green-500 ml-2 text-lg">+3</span>
                <p className="text-neutral-500 dark:text-white text-sm">last 30d</p>
            </div>

            {/* Chart container */}
            <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-[#323338]" vertical={false} />
                        <XAxis dataKey="name" stroke="#6b7280" className="dark:stroke-neutral-400" tick={{ fontSize: 12 }} />
                        <YAxis stroke="#6b7280" className="dark:stroke-neutral-400" tick={{ fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#f9fafb",
                                border: "none",
                                borderRadius: "4px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                            }}
                            labelStyle={{ color: "#374151" }}
                            itemStyle={{ color: "#111827" }}
                            wrapperStyle={{ zIndex: 9999 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6, fill: "#3b82f6", stroke: "#3b82f6", strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default UserReports;
