import React, { useState } from "react"
import { Search } from "lucide-react"
import Filters from "@/components/questions/Filters"
import AddProfileDrawer from "@/components/questions/AddProfileDrawer"
import DataTable from "@/components/common/DataTable"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import InfoCard from "@/components/common/InfoCard"

const Clients = () => {
    const [openAddProfile, setOpenAddProfile] = useState(false)
    const [filter, setFilter] = useState("")
    const [pagination, setPagination] = useState({ pageIndex: 0, pageCount: 5 })

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                    className="border-gray-400 dark:border-gray-600 bg-white dark:bg-black"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="border-gray-400 dark:border-gray-600 bg-white dark:bg-black"
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
            accessorKey: "name",
            header: "Name",
            enableSorting: true,
        },
        {
            accessorKey: "email",
            header: "Email",
            enableSorting: true,
        },
        {
            accessorKey: "phone",
            header: "Phone",
            enableSorting: true,
        },
        {
            accessorKey: "address",
            header: "Address",
            enableSorting: true,
        },
        {
            accessorKey: "actions",
            header: "Actions",
            enableSorting: false,
            cell: ({ row }) => (

                <div className="flex gap-2">
                    {["✏", "Disable"].map((label, idx) => (
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
    ];

    const data = [
        {
            sno: 1,
            name: "Full Name",
            email: "fjss",
            phone: "+1 92184",
            address: "Add",
        },
    ];



    return (
        <div className="flex h-screen ">
            {/* Main Content */}
            <div
                className={`flex flex-col gap-6 p-6 transition-all duration-300 overflow-x-hidden
          ${openAddProfile ? "w-[calc(100%-500px)]" : "w-full"}`}
            >
                {/* Card Container */}
                <InfoCard
                    count={3}
                    title="Clients"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    cta={{
                        label: "Add Clients",
                        onClick: () => setOpenAddProfile(true),
                        className:
                            "px-4 py-2 bg-[#0073EA] hover:bg-blue-700 text-sm font-medium text-white",
                    }}
                />


                {/* <Filters /> */}

                <DataTable
                    columns={columns}
                    data={data.filter((d) =>
                        d.name.toLowerCase().includes(filter.toLowerCase())
                    )}
                    filterValue={filter}
                    onFilterChange={setFilter}
                    pagination={pagination}
                    onPageChange={(page) =>
                        setPagination((prev) => ({ ...prev, pageIndex: page }))
                    }
                    className="bg-white dark:bg-neutral-900 text-black dark:text-white border border-gray-300 dark:border-neutral-800 rounded-lg"
                />
            </div>

            {/* Drawer */}
            <AddProfileDrawer title="Add Clients" open={openAddProfile} setOpen={setOpenAddProfile} />
        </div>
    )
}

export default Clients
