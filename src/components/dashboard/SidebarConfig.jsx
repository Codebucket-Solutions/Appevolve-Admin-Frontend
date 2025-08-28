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
import AnimatedTabs from "../questions/AnimatedTabs"

const SidebarConfig = ({ open, setOpen, config, setConfig }) => {
    const [activeTab, setActiveTab] = useState("stats")

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const tabs = ["stats", "reports"]

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
            className={`min-h-[calc(100vh-20vh)] dark:bg-[#111111] text-black dark:text-white border-neutral-700
  transition-all duration-300 ease-in-out overflow-hidden
  ${open ? "w-[20vw] min-w-[350px] border-border border-l" : "w-0"}`}
        >
            <div
                className={`flex flex-col h-full transition-opacity duration-200
                    ${open ? "opacity-100 delay-150" : "opacity-0"}`}
            >
                {/* Header */}
                <div className="p-4 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold dark:text-white">
                            Configure Dashboard
                        </h2>
                        <Button
                            onClick={() => setOpen(false)}
                            variant="outline"
                            className="dark:text-white dark:bg-black bg-black text-white hover:text-black dark:hover:text-white"
                        >
                            ✕
                        </Button>
                    </div>

                    <div className="py-2 text-sm dark:text-white">
                        Manage your dashboard layout and visibility settings.
                    </div>

                    <div>
                        <Button className="items-center justify-center text-sm bg-blue-600 text-white hover:bg-blue-accent pointer-events-auto">
                            Setting
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <AnimatedTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* Content */}
                <div className="p-4 overflow-y-auto flex-1 space-y-6">
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
                <div className="p-4 flex justify-end gap-2">
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
        </div>
    )
}

export default SidebarConfig
