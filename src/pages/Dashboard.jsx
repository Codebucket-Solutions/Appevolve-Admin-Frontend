import React from "react"
import StatsCard from "@/components/dashboard/StatsCard"
import Reports from "@/components/dashboard/Reports"

const Dashboard = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Dashboard</h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Start exploring AppEnvolve
                    </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Configure
                </button>
            </div>

            {/* Welcome / Progress Card */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Welcome, Amrit
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: "30%" }}></div>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">30%</p>
            </div>

            {/* Stats Cards */}

            {/* <div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    Key Metrics
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Overview of your application's key statistics
                </p>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard title="Users" value="350" trend="up" bg="bg-blue-500" />
                <StatsCard title="Questions" value="1200" trend="down" bg="bg-red-500" />
                <StatsCard title="Assessment Profiles" value="87" trend="up" bg="bg-green-500" />
                {/* <StatsCard title="Applications" value="540" trend="up" bg="bg-purple-500" />
    <StatsCard title="Pre-Signed URLs" value="23" trend="up" bg="bg-orange-500" /> */}
            </div>


            {/* Reports / Statistics Grid */}
            <div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    Statistics and Reports
                </h2>
                {/* <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Overview of your application's reports
                </p> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Reports title="Users" value="3" trend="up" />
                <Reports title="Questions" value="3" trend="up" />
                <Reports title="Assessment Profiles" value="3" trend="up" />
                <Reports title="Applications" value="3" trend="up" />
                <Reports title="Pre-Signed URLs" value="3" trend="up" />
            </div>
        </div>
    )
}

export default Dashboard
