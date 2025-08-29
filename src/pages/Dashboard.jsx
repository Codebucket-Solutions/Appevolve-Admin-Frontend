import React, { useState } from "react"
import StatsCard from "@/components/dashboard/StatsCard"
import Reports from "@/components/dashboard/Reports"
import SidebarConfig from "@/components/dashboard/SidebarConfig"

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [config, setConfig] = useState({
        stats: [
            {
                id: "totalApps",
                title: "Total Applications",
                value: "350",
                trend: "up",
                bg: "bg-blue-500",
                visible: true,
            },
            {
                id: "questions",
                title: "Questions",
                value: "1200",
                trend: "down",
                bg: "bg-red-500",
                visible: true,
            },
            {
                id: "profiles",
                title: "Assessment Profiles",
                value: "87",
                trend: "up",
                bg: "bg-green-500",
                visible: true,
            },
            {
                id: "urls",
                title: "Pre-Signed URLs",
                value: "23",
                trend: "up",
                bg: "bg-orange-500",
                visible: false,
            },
        ],
        reports: [
            {
                id: "users",
                title: "Users",
                value: "3",
                trend: "up",
                visible: true,
            },
            {
                id: "apps",
                title: "Applications",
                value: "3",
                trend: "up",
                visible: true,
            },
        ],
    })

    return (
        <div className="flex h-screen overflow-hidden">

            <div
                className={`flex flex-col gap-6 p-6 transition-all duration-300 overflow-x-hidden
          ${open ? "w-[calc(100%-450px)]" : "w-full"}`}
            >
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                        <h1 className="text-3xl font-semibold text-black dark:text-white">
                            Dashboard
                        </h1>
                        <p className="text-sm text-black dark:text-white">
                            Start exploring AppEvolve
                        </p>
                    </div>
                    <button
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Configure
                    </button>
                </div>

                {/* Welcome / Progress Card */}
                <div className="bg-white dark:bg-[#151515] rounded-[4px] shadow p-6 py-12 transition-colors duration-300 border-1 space-y-4 dark:border-[#323338] border-[#C8C8C8]">
                    <div className="text-3xl font-semibold text-black dark:text-white font-poppins">
                        Welcome, Amrit
                    </div>
                    <p className="text-xl text-black dark:text-white mt-1 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded h-2">
                        <div
                            className="bg-blue-600 h-2 rounded"
                            style={{ width: "30%" }}
                        ></div>
                    </div>
                    <p className="text-xs text-black dark:text-white mt-1">
                        30%
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {config.stats
                        .filter((c) => c.visible)
                        .map((card) => (
                            <StatsCard key={card.id} {...card} />
                        ))}
                </div>

                {/* Reports / Statistics Grid */}
                <div>
                    <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Statistics and Reports
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {config.reports
                        .filter((c) => c.visible)
                        .map((rep) => (
                            <Reports key={rep.id} {...rep} />
                        ))}
                </div>
            </div>

            {/* Sidebar */}
            <SidebarConfig
                open={open}
                setOpen={setOpen}
                config={config}
                setConfig={setConfig}
            />
        </div>
    )
}

export default Dashboard
