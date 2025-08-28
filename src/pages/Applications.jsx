import React, { useState } from "react"
import { Search } from "lucide-react"
import Filters from "@/components/questions/Filters"
import AddProfileDrawer from "@/components/questions/AddProfileDrawer"
import DataTable from "@/components/common/DataTable"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

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
                {/* Card Container */}
                <div className="bg-white dark:bg-[#151515] rounded-xl p-6 flex flex-col gap-6 border border-gray-300 dark:border-[#323338]">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-bold">3</h2>
                            <h2 className="text-3xl">Applications</h2>
                            <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <Button className="bg-green-50 dark:bg-green-900 text-green-600 dark:text-white border border-green-200 dark:border-green-900 hover:bg-green-100 dark:hover:bg-green-800 transition-colors">
                                    Change Client
                                </Button>

                                <Button className="bg-yellow-50 dark:bg-yellow-900 text-yellow-600 dark:text-white border border-yellow-200 dark:border-yellow-900 hover:bg-yellow-100 dark:hover:bg-yellow-800 transition-colors">
                                    Import
                                </Button>

                                <Button className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-white border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors">
                                    Export All
                                </Button>

                                <Button className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-white border border-red-200 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-800 transition-colors">
                                    Delete
                                </Button>
                            </div>
                        </div>

                        {/* CTA Button */}
                        {/* <div className="flex items-center gap-3 mt-2 lg:mt-0">
                            <Button
                                className="px-4 py-2 rounded-sm bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white"
                                onClick={() => setOpenAddProfile(true)}
                            >
                                Add Profile
                            </Button>
                        </div> */}
                    </div>
                </div>

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
