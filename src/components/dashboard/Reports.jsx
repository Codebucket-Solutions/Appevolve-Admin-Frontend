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

const Reports = ({
    title = "Reports",
    subtitle = "",
    data = null,
}) => {
    // Sample data if none is passed
    const chartData = data || [
        { name: "Jan", value: 12 },
        { name: "Feb", value: 19 },
        { name: "Mar", value: 8 },
        { name: "Apr", value: 17 },
        { name: "May", value: 14 },
    ];

    return (
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 transition-colors duration-300">
            <div className="mb-3">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis stroke="#8884d8" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#fff",
                                borderRadius: "6px",
                                border: "none",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Reports;
