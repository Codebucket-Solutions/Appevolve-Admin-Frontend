import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

export default function DataTable({
    columns,
    data,
    filterValue,
    onFilterChange,
    pagination,
    onPageChange,
    onPageSizeChange,
}) {
    const [sorting, setSorting] = React.useState([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        manualPagination: true, // parent controls pagination
        pageCount: pagination?.pageCount ?? -1,
    })

    return (
        <div className="space-y-4">
            {/* 🔍 Search / Filter */}
            {onFilterChange && (
                <div className="flex items-center justify-between">
                    <Input
                        placeholder="Search..."
                        value={filterValue}
                        onChange={(e) => onFilterChange(e.target.value)}
                        className="max-w-sm dark:border-[#323338]"
                    />
                </div>
            )}

            {/* 📊 Table */}
            <div className="rounded-[4px] border border-[#B5B5B5] dark:border-[#676879]">
                <Table>
                    <TableHeader className="bg-neutral-900">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="divide-x divide-neutral-800 border-b border-[#B5B5B5] dark:border-[#676879]"
                            >
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className={`px-4 py-2 border-r border-[#B5B5B5] dark:border-[#676879] dark:bg-[#323338] bg-[#D7D7D7] dark:text-white text-sm font-medium select-none ${header.column.getCanSort() ? "cursor-pointer" : "cursor-default"
                                            }`}
                                    >
                                        <div className="flex items-center gap-1">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}

                                            {header.column.getCanSort() && (
                                                <>
                                                    {header.column.getIsSorted() === "asc" && <ArrowUp className="w-4 h-4" />}
                                                    {header.column.getIsSorted() === "desc" && <ArrowDown className="w-4 h-4" />}
                                                    {header.column.getIsSorted() === false && <ArrowUpDown className="w-4 h-4 opacity-40" />}
                                                </>
                                            )}
                                        </div>
                                    </TableHead>

                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="divide-x divide-neutral-800 border-b border-[#B5B5B5] dark:border-[#676879]"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="px-4 py-2 border-r border-[#B5B5B5] dark:border-[#676879] text-sm"
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow className="border-b border-[#B5B5B5] dark:border-[#676879]">
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center text-sm text-black"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* 📌 Pagination */}
            {/* {pagination && (
                <div className="flex items-center justify-end space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPageChange(pagination.pageIndex - 1)}
                        disabled={pagination.pageIndex === 0}
                    >
                        Previous
                    </Button>
                    <span className="text-sm">
                        Page {pagination.pageIndex + 1} of {pagination.pageCount}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPageChange(pagination.pageIndex + 1)}
                        disabled={pagination.pageIndex + 1 >= pagination.pageCount}
                    >
                        Next
                    </Button>
                </div>
            )} */}

            {/* Pagination */}
            {pagination && onPageChange && (
                <div className="flex justify-between items-center text-sm text-black dark:text-white">
                    <span>
                        Page {pagination.pageIndex + 1} of {pagination.pageCount}
                    </span>

                    <div className="flex gap-2">
                        <button
                            onClick={() => onPageChange(pagination.pageIndex - 1)}
                            disabled={pagination.pageIndex === 0}
                            className="px-2 py-1 rounded border border-neutral-700 dark:text-white hover:bg-neutral-800 disabled:opacity-40"
                        >
                            ‹
                        </button>

                        {[...Array(pagination.pageCount)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => onPageChange(i)}
                                className={`px-3 py-1 rounded border border-neutral-700 ${pagination.pageIndex === i
                                    ? "bg-blue-600 text-white"
                                    : "bg-neutral-900 hover:bg-neutral-800 text-neutral-300"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => onPageChange(pagination.pageIndex + 1)}
                            disabled={pagination.pageIndex + 1 >= pagination.pageCount}
                            className="px-2 py-1 dark:text-white rounded border border-neutral-700 hover:bg-neutral-800 disabled:opacity-40"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
