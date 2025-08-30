import React, { useState } from "react"
import { Search } from "lucide-react"
import Filters from "@/components/questions/Filters"
import AddProfileDrawer from "@/components/questions/AddProfileDrawer"
import DataTable from "@/components/common/DataTable"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import InfoCard from "@/components/common/InfoCard"

const Applications = () => {
    const [openAddProfile, setOpenAddProfile] = useState(false)
    const [filter, setFilter] = useState("")
    const [pagination, setPagination] = useState({ pageIndex: 0, pageCount: 5 })

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="
                   border-gray-400 dark:border-gray-600
                   bg-white dark:bg-black
                   text-black dark:text-black
                   data-[state=checked]:bg-blue-500
                   data-[state=checked]:border-blue-500
                   data-[state=checked]:text-white
                 "
                />

            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="
                   border-gray-400 dark:border-gray-600
                   bg-white dark:bg-black
                   text-black dark:text-black
                   data-[state=checked]:bg-blue-500
                   data-[state=checked]:border-blue-500
                   data-[state=checked]:text-white
                 "
                />
            ),
            enableSorting: false,
            enableHiding: false,
            size: 50,
        },
        {
            accessorKey: "sno",
            header: "S.No",
            enableSorting: false,
        },
        {
            accessorKey: "appName",
            header: "App Name",
            enableSorting: true,
        },
        {
            accessorKey: "businessService",
            header: "Business Service",
            enableSorting: true,
        },
        {
            accessorKey: "appOwner",
            header: "App Owner",
            enableSorting: true,
        },
        {
            accessorKey: "userName",
            header: "User Name",
            enableSorting: true,
        },
        {
            accessorKey: "progress",
            header: "Progress",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${row.original.progress}%` }}
                        ></div>
                    </div>
                    <span className="text-xs text-black dark:text-white">{row.original.progress}%</span>
                </div>
            ),
        },
        {
            accessorKey: "actions",
            header: "Actions",
            enableSorting: false,
            cell: ({ row }) => (
                <div className="flex gap-2">
                    {["✏", "Profile", "Response"].map((label, idx) => (
                        <button
                            key={idx}
                            className="px-5 py-1 bg-white dark:bg-black text-black dark:text-white border border-gray-400 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            ),
        },
    ]

    const data = [
        {
            sno: 1,
            appName: "App",
            businessService: "Service Name",
            appOwner: "Owner Name",
            userName: "User Name",
            progress: 30,
        },
        {
            sno: 2,
            appName: "Another App",
            businessService: "Another Service",
            appOwner: "Owner 2",
            userName: "User 2",
            progress: 70,
        },
    ]

    return (
        <div className="flex h-screen ">
            {/* Main Content */}
            <div
                className={`flex flex-col gap-6 p-6 transition-all duration-300 overflow-x-hidden
          ${openAddProfile ? "w-[calc(100%-500px)]" : "w-full"}`}
            >
                <InfoCard
                    count={3}
                    title="Applications"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    actions={[
                        {
                            label: "Change Client",
                            className:
                                "bg-[#6543FF] text-white",
                            onClick: () => console.log("Change Client"),
                        },
                        {
                            label: "Import",
                            className:
                                "bg-[#00A84E] text-white",
                            onClick: () => console.log("Import"),
                        },
                        {
                            label: "Export All",
                            className:
                                "bg-[#353535] text-white",
                            onClick: () => console.log("Export"),
                        },
                        {
                            label: "Delete",
                            className:
                                "bg-[#FE1E1E] text-white",
                            onClick: () => console.log("Delete"),
                        },
                    ]}
                />


                <Filters />

                <DataTable
                    columns={columns}
                    data={data?.filter((d) =>
                        d?.appName.toLowerCase().includes(filter.toLowerCase())
                    )}
                    filterValue={filter}
                    onFilterChange={setFilter}
                    pagination={pagination}
                    onPageChange={(page) =>
                        setPagination((prev) => ({ ...prev, pageIndex: page }))
                    }
                    className="bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg"
                />
            </div>

            {/* Drawer */}
            <AddProfileDrawer title="Add Application" open={openAddProfile} setOpen={setOpenAddProfile} />
        </div>
    )
}

export default Applications
