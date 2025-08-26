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
    // const usersLast30Days = 3;

    return (
        <div className="bg-neutral-900 text-white rounded-lg p-4 shadow-lg transition-colors duration-300">

            <div className="flex items-start justify-between mb-4">
                <div>
                    <h2 className="text-xl font-medium">
                        {title}
                    </h2>
                    <p className="text-sm text-neutral-400 cursor-pointer hover:underline">
                        {subtitle}
                    </p>
                </div>
                <div className="bg-neutral-700 p-2 rounded-full cursor-pointer">

                    <LIcon name="Users" size={24} className="text-white" />
                </div>
            </div>

            <div className="mb-8">
                <span className="text-4xl font-semibold">{totalUsers}</span>
                <span className="text-green-500 ml-2 text-lg">+3</span>
                <p className="text-neutral-400 text-sm">
                    last 30d
                </p>
            </div>

            {/* Chart container */}
            <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a" vertical={false} />
                        <XAxis dataKey="name" stroke="#a0a0a0" tick={{ fontSize: 12 }} />
                        <YAxis stroke="#a0a0a0" tick={{ fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#333",
                                border: "none",
                                borderRadius: "4px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                            }}
                            labelStyle={{ color: "#a0a0a0" }}
                            itemStyle={{ color: "#fff" }}
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