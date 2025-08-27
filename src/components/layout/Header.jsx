import React, { useState, useEffect } from "react"
import {
    Sun,
    Moon,
    Funnel,
    // ArrowsUpDown,
    RefreshCw,
    Info,
    Bell
} from "lucide-react"

const Header = ({ onToggleAccessibility }) => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <header className="w-full h-14 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between px-6 transition-colors duration-300">
            <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">AppEvolve</h1>

            <div className="flex items-center gap-1">
                {/* Filter */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Filter">
                    <Funnel className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                </button>

                {/* Sort */}
                {/* <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Sort">
                    <ArrowsUpDown className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                </button> */}

                {/* Refresh */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Refresh">
                    <RefreshCw className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                </button>

                {/* Dark mode toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? (
                        <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                        <Moon className="h-5 w-5 text-neutral-600" />
                    )}
                </button>

                {/* Info */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Info">
                    <Info className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                </button>

                {/* Notifications */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Notifications">
                    <Bell className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                </button>
            </div>
        </header>
    )
}

export default Header
