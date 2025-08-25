import React from "react";
import { useSelector } from "react-redux";
import menus from "@/config/menus.json";

export default function Sidebar() {
    const { selectedModule } = useSelector((state) => state.modules);
    const menuConfig = menus[selectedModule.label];

    return (
        <div className="w-64 h-screen bg-white border-r flex flex-col">
            {/* Header */}
            <div
                className="p-4 font-bold"
                style={{ color: menuConfig.moduleHeader.color }}
            >
                {menuConfig.moduleHeader.label}
            </div>

            {/* Menus */}
            <nav className="flex-1 p-2">
                {menuConfig.modules.map((section) => (
                    <div key={section.label}>
                        <div className="text-gray-500 text-xs font-semibold px-2 mt-4">
                            {section.label}
                        </div>
                        {section.children.map((item) => (
                            <a
                                key={item.label}
                                href={item.route}
                                className="flex items-center px-2 py-1 hover:bg-gray-100 rounded"
                            >
                                <span className="ml-2">{item.label}</span>
                            </a>
                        ))}
                    </div>
                ))}
            </nav>
        </div>
    );
}
