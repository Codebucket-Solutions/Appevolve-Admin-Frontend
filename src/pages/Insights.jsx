import React, { useState } from "react"
import StatsCard from "@/components/dashboard/StatsCard"
import Reports from "@/components/dashboard/Reports"
import SidebarConfig from "@/components/dashboard/SidebarConfig"
import Filters from "@/components/questions/Filters"
import AddProfileDrawer from "@/components/questions/AddProfileDrawer"
import { Button } from "@/components/ui/button"
import InfoCard from "@/components/common/InfoCard"


const Insights = (props) => {

    // console.log("🚀 ~ Insights ~ config:", config)
    const [openAddProfile, setOpenAddProfile] = useState(false)

    return (
        <div className="p-6 space-y-6">
            {/* Page Header */}

            {/* Welcome / Progress Card */}
            {/* <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 transition-colors duration-300">
                <p className="text-2xl font-semibold text-black dark:text-white font-poppins">
                    Welcome, Amrit
                </p>
                <p className="text-sm text-black dark:text-white mt-1 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: "30%" }}></div>
                </div>
                <p className="text-xs text-black dark:text-white mt-1">30%</p>
            </div> */}
            <div
                className={`flex flex-col gap-6 p-6 transition-all duration-300 overflow-x-hidden
          ${openAddProfile ? "w-[calc(100%-500px)]" : "w-full"}`}
            >
                <InfoCard
                    title="Insights"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    cta={{
                        label: "Configure",
                        onClick: () => setOpenAddProfile(true),
                        className:
                            "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white",
                    }}
                />


                <Filters />

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {props?.config.stats
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
                    {props?.config.reports
                        .filter((c) => c.visible)
                        .map((rep) => (
                            <Reports key={rep.id} {...rep} />
                        ))}
                </div>

                {/* <SidebarConfig
                open={open}
                setOpen={setOpen}
                config={config}
                setConfig={setConfig}
            /> */}
            </div>
            <AddProfileDrawer title="Add Insight" open={openAddProfile} setOpen={setOpenAddProfile} />

        </div>
    )
}

export default Insights
