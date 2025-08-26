import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const SortableItem = ({ id, label, checked, onToggle }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="flex items-center justify-between bg-neutral-800 border border-neutral-700 p-3 rounded-xl mb-3 cursor-grab hover:bg-neutral-700 transition-colors"
        >


            {/* Left side: drag indicator + label */}
            <div className="flex items-center gap-3">

                <div className="flex gap-1 mr-2">
                    <div className="flex flex-col justify-center text-neutral-400">
                        <span className="block w-1 h-1 bg-neutral-500 rounded-full mb-1"></span>
                        <span className="block w-1 h-1 bg-neutral-500 rounded-full mb-1"></span>
                        <span className="block w-1 h-1 bg-neutral-500 rounded-full"></span>
                    </div>
                    <div className="flex flex-col justify-center text-neutral-400">
                        <span className="block w-1 h-1 bg-neutral-500 rounded-full mb-1"></span>
                        <span className="block w-1 h-1 bg-neutral-500 rounded-full mb-1"></span>
                        <span className="block w-1 h-1 bg-neutral-500 rounded-full"></span>
                    </div>

                </div>

                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onToggle}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5 cursor-pointer accent-indigo-500"
                />
                <span className="text-neutral-100 font-medium">{label}</span>
            </div>


        </div>
    )
}

export default SortableItem
