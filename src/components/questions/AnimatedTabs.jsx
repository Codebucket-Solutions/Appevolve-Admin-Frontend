import React from "react";

export default function AnimatedTabs({ tabs = [], activeTab, onTabChange }) {
    const count = Math.max(1, tabs.length);
    const activeIndex = Math.max(0, tabs.indexOf(activeTab));
    const percent = 100 / count;
    const underlineStyle = {
        width: `${percent}%`,
        left: `${percent * activeIndex}%`,
    };

    return (
        <div className="relative w-full border-b border-neutral-300 dark:border-neutral-700">
            {/* use CSS grid to ensure perfectly equal columns even if you add gap */}
            <div
                className="w-full"
                style={{ display: "grid", gridTemplateColumns: `repeat(${count}, 1fr)` }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={`text-center py-2 text-sm font-medium transition-colors
              ${activeTab === tab
                                ? "text-black dark:text-white"
                                : "text-neutral-500 dark:text-white hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* underline uses percent-based left+width so it's full-width and immediate */}
            <span
                className="absolute bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300"
                style={underlineStyle}
            />
        </div>
    );
}
