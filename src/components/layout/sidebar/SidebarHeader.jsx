import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModule } from "@/store/moduleSlice";
import menus from "@/config/menus.json";

export default function SidebarHeader() {
    const dispatch = useDispatch();
    const { selectedModule, availableModules } = useSelector(
        (state) => state.modules
    );

    const handleChange = (e) => {
        const newModule = availableModules.find((m) => m.label === e.target.value);
        if (newModule) {
            dispatch(setModule(newModule));
        }
    };

    return (
        <div className="p-4 border-b flex items-center justify-between">
            <select
                value={selectedModule.label}
                onChange={handleChange}
                className="p-2 border rounded"
            >
                {availableModules.map((m) => (
                    <option key={m.label} value={m.label}>
                        {m.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
