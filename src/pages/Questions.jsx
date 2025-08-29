import React, { useState } from "react"
import { Search } from "lucide-react"
import Filters from "@/components/questions/Filters"
import AddProfileDrawer from "@/components/questions/AddProfileDrawer"
import DataTable from "@/components/common/DataTable"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import InfoCard from "@/components/common/InfoCard"

const Questions = () => {
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
            enableHiding: false,
        },
        {
            accessorKey: "question",
            header: "Questions",
            enableSorting: true,
            enableHiding: false,
        },
        {
            accessorKey: "type",
            header: "Type",
            enableSorting: true,
            enableHiding: false,
        },
        {
            accessorKey: "description",
            header: "Description",
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "status",
            header: "Status",
            enableSorting: false,
            enableHiding: false,
            cell: ({ row }) => (
                <span
                    className={`px-2 py-1 rounded text-xs font-medium ${row.original.status === "Active"
                        ? "bg-green-700 text-green-100 dark:bg-green-600 dark:text-green-200"
                        : "bg-red-700 text-red-100 dark:bg-red-600 dark:text-red-200"
                        }`}
                >
                    {row.original.status}
                </span>
            ),
        },
        {
            accessorKey: "actions",
            header: "Actions",
            enableSorting: false,
            enableHiding: false,
            cell: ({ row }) => (
                <div className="flex gap-2">
                    <button className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500">
                        🗑
                    </button>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                        ✏
                    </button>
                </div>
            ),
        },
    ]

    const data = [
        {
            sno: 1,
            question: "What is React?",
            type: "MCQ",
            description: "A JS library for building UIs",
            status: "Active",
        },
        {
            sno: 2,
            question: "Explain useState hook",
            type: "Descriptive",
            description: "React hook for state management",
            status: "Inactive",
        },
    ]

    return (
        <div className="flex h-screen  dark:text-white">
            {/* Main Content */}
            <div
                className={`flex flex-col gap-6 p-6 transition-all duration-300 overflow-x-hidden
          ${openAddProfile ? "w-[calc(100%-500px)]" : "w-full"}`}
            >
                {/* Card Container */}
                <InfoCard
                    count={12}
                    title="Questions"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    cta={{
                        label: "Add Profile",
                        onClick: () => setOpenAddProfile(true),
                        className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white",
                    }}
                />

                <Filters />

                <DataTable
                    columns={columns}
                    data={data.filter((d) =>
                        d.question.toLowerCase().includes(filter.toLowerCase())
                    )}
                    filterValue={filter}
                    onFilterChange={setFilter}
                    pagination={pagination}
                    onPageChange={(page) =>
                        setPagination((prev) => ({ ...prev, pageIndex: page }))
                    }
                    className="bg-white dark:bg-[#151515] text-black dark:text-white border border-gray-300 dark:border-[#323338] rounded-lg"
                />
            </div>

            {/* Drawer */}
            <AddProfileDrawer title="Add Question" open={openAddProfile} setOpen={setOpenAddProfile} />
        </div>
    )
}

export default Questions
