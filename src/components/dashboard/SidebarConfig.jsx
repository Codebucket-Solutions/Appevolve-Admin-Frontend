import React, { useState } from "react"
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import SortableItem from "./SortableItem"
import { Button } from "../ui/button"

const SidebarConfig = ({ open, setOpen, config, setConfig }) => {
    const [activeTab, setActiveTab] = useState("stats") // "stats" or "reports"

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const handleDragEnd = (event, type) => {
        const { active, over } = event
        if (!over) return
        if (active.id !== over.id) {
            const items = config[type]
            const oldIndex = items.findIndex((i) => i.id === active.id)
            const newIndex = items.findIndex((i) => i.id === over.id)
            const newItems = arrayMove(items, oldIndex, newIndex)
            setConfig({ ...config, [type]: newItems })
        }
    }

    return (
        <div
            className={`fixed top-0 right-0 h-screen bg-[#000000] transition-all duration-300 ease-in-out z-50
        ${open ? "w-[20vw] min-w-[350px] p-4" : "w-0 overflow-hidden"}`}
        >
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b border-neutral-700">
                <h2 className="text-lg font-semibold">Configure Dashboard</h2>
                {/* Extra Sections */}


                {/* <div>
                    <h3 className="text-base font-semibold mb-2">Section 1</h3>
                    <p className="text-sm text-neutral-400">
                        Manage stats and KPIs that appear on your dashboard.
                    </p>
                </div> */}


                <Button
                    onClick={() => setOpen(false)}
                    variant="outline"
                    className="text-neutral-400 hover:text-white"
                >
                    ✕
                </Button>

            </div>

            {/* Subheader Description */}
            <div className="px-4 py-2 text-sm text-neutral-400 border-b border-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>

            <Button
                // onClick={() => setOpen(false)}
                // variant="ghost"
                className="m-4 text-sm bg-blue-600 text-white hover:text-white"
            >
                Setting
            </Button>

            {/* Tabs */}
            <div className="flex border-b border-neutral-700">
                <button
                    className={`flex-1 py-2 ${activeTab === "stats"
                        ? "bg-neutral-800 font-semibold"
                        : "hover:bg-neutral-800"
                        }`}
                    onClick={() => setActiveTab("stats")}
                >
                    Stats
                </button>
                <button
                    className={`flex-1 py-2 ${activeTab === "reports"
                        ? "bg-neutral-800 font-semibold"
                        : "hover:bg-neutral-800"
                        }`}
                    onClick={() => setActiveTab("reports")}
                >
                    Reports
                </button>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto h-[calc(100%-160px)] space-y-6">


                {/* Stats Config */}
                {activeTab === "stats" && (
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={(e) => handleDragEnd(e, "stats")}
                    >
                        <SortableContext
                            items={config.stats.map((c) => c.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {config.stats.map((c) => (
                                <SortableItem
                                    key={c.id}
                                    id={c.id}
                                    label={c.title}
                                    checked={c.visible}
                                    onToggle={() =>
                                        setConfig({
                                            ...config,
                                            stats: config.stats.map((s) =>
                                                s.id === c.id
                                                    ? { ...s, visible: !s.visible }
                                                    : s
                                            ),
                                        })
                                    }
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                )}

                {/* Reports Section */}
                <div>
                    <h3 className="text-base font-semibold mb-2">Reports and Graphs</h3>
                    <p className="text-sm text-neutral-400">
                        Enable or disable reports that display insights.
                    </p>
                </div>

                {activeTab === "reports" && (
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={(e) => handleDragEnd(e, "reports")}
                    >
                        <SortableContext
                            items={config.reports.map((r) => r.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {config.reports.map((r) => (
                                <SortableItem
                                    key={r.id}
                                    id={r.id}
                                    label={r.title}
                                    checked={r.visible}
                                    onToggle={() =>
                                        setConfig({
                                            ...config,
                                            reports: config.reports.map((rep) =>
                                                rep.id === r.id
                                                    ? { ...rep, visible: !rep.visible }
                                                    : rep
                                            ),
                                        })
                                    }
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                )}
            </div>

            {/* Footer */}
            <div className="p-4 flex justify-end gap-2 border-t border-neutral-700">
                <button
                    className="px-4 py-2 rounded bg-neutral-700 hover:bg-neutral-600"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
                    onClick={() => setOpen(false)}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default SidebarConfig
