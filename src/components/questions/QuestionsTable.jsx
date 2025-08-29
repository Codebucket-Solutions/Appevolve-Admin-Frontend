import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const columns = [
    { key: "select", label: "" },
    { key: "sno", label: "S.No" },
    { key: "question", label: "Questions" },
    { key: "type", label: "Type" },
    { key: "description", label: "Description" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
];

const initialRows = [
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
];

const QuestionsTable = () => {
    const [rows, setRows] = useState(initialRows);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });

        const sortedRows = [...rows].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });

        setRows(sortedRows);
    };

    return (
        <div className="bg-neutral-900 rounded-[4px] shadow p-6 flex flex-col gap-4">
            <Table className="border border-neutral-800 rounded-[4px]">
                <TableHeader className="bg-neutral-800">
                    <TableRow>
                        {columns.map((col) => (
                            <TableHead
                                key={col.key}
                                className="px-4 py-2 border border-neutral-800 cursor-pointer select-none"
                                onClick={() =>
                                    col.key !== "select" &&
                                    col.key !== "actions" &&
                                    handleSort(col.key)
                                }
                            >
                                <div className="flex items-center">
                                    {col.label}
                                    {sortConfig.key === col.key && (
                                        <span className="ml-1">
                                            {sortConfig.direction === "asc" ? "▲" : "▼"}
                                        </span>
                                    )}
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow
                            key={i}
                            className="hover:bg-neutral-800"
                        >
                            <TableCell className="px-4 py-2 border border-neutral-800">
                                <input type="checkbox" />
                            </TableCell>
                            <TableCell className="px-4 py-2 border border-neutral-800">
                                {row.sno}
                            </TableCell>
                            <TableCell className="px-4 py-2 border border-neutral-800">
                                {row.question}
                            </TableCell>
                            <TableCell className="px-4 py-2 border border-neutral-800">
                                {row.type}
                            </TableCell>
                            <TableCell className="px-4 py-2 border border-neutral-800">
                                {row.description}
                            </TableCell>
                            <TableCell className="px-4 py-2 border border-neutral-800">
                                <span
                                    className={`px-2 py-1 rounded text-xs font-medium ${row.status === "Active" ? "bg-green-600" : "bg-red-600"
                                        }`}
                                >
                                    {row.status}
                                </span>
                            </TableCell>
                            <TableCell className="px-4 py-2 border border-neutral-800 flex gap-2">
                                <Button size="icon" variant="ghost" className="text-red-500">
                                    🗑
                                </Button>
                                <Button size="icon" variant="ghost" className="text-blue-400">
                                    ✏
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default QuestionsTable;
