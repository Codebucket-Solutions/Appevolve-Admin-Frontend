import { useRef, useEffect, useState } from "react";

export default function AnimatedTabs({ tabs = [], activeTab, onTabChange }) {
    const tabsRef = useRef([]);
    const [underlineStyle, setUnderlineStyle] = useState({});

    useEffect(() => {
        const activeIndex = tabs.indexOf(activeTab);
        const tabEl = tabsRef.current[activeIndex];
        if (tabEl) {
            setUnderlineStyle({
                width: tabEl.offsetWidth,
                left: tabEl.offsetLeft,
            });
        }
    }, [activeTab, tabs]);

    return (
        <div className="relative w-full border-b border-neutral-300 dark:border-neutral-700">
            <div className="flex gap-6">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        ref={(el) => (tabsRef.current[index] = el)}
                        className={`px-2 py-2 text-sm font-medium transition-colors
                            ${activeTab === tab
                                ? "text-black dark:text-white"
                                : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            }`}
                        onClick={() => onTabChange(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Moving underline */}
            <span
                className="absolute bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300"
                style={underlineStyle}
            />
        </div>
    );
}
