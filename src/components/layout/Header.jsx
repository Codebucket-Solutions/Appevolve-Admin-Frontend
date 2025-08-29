import React, { useState, useEffect } from "react"
import {
    Sun,
    Moon,
    Funnel,
    RefreshCw,
    Info,
    Bell
} from "lucide-react"

const Header = ({ onToggleAccessibility }) => {
    const [theme, setTheme] = useState("system")
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (theme === "system") {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            document.documentElement.classList.toggle("dark", systemDark)
        } else {
            document.documentElement.classList.toggle("dark", theme === "dark")
        }
    }, [theme])

    return (
        <header className="w-full h-[3.8rem] bg-white dark:bg-[#151515] border-neutral-200 dark:border-neutral-700 flex items-center justify-between px-6 transition-colors duration-300 relative">
            <h1 className="text-lg font-semibold text-black dark:text-white">AppEvolve</h1>

            <div className="flex items-center gap-1">
                {/* Filter */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Filter">
                    <Funnel className="h-5 w-5 text-black dark:text-neutral-300" />
                </button>

                {/* Refresh */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Refresh">
                    <RefreshCw className="h-5 w-5 text-black dark:text-neutral-300" />
                </button>

                {/* Dark mode / Theme toggle */}
                <div className="relative">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <Moon className="h-5 w-5 text-black dark:text-neutral-300" />
                        )}
                    </button>

                    {/* Dropdown menu */}
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#222] border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg p-2 z-50">
                            <div
                                className={`flex items-center px-3 py-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 ${theme === "system" ? "font-semibold" : ""}`}
                                onClick={() => { setTheme("system"); setMenuOpen(false) }}
                            >
                                <input type="radio" checked={theme === "system"} readOnly className="mr-2" />
                                Use System - Default Setting
                            </div>
                            <div
                                className={`flex items-center px-3 py-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 ${theme === "dark" ? "font-semibold" : ""}`}
                                onClick={() => { setTheme("dark"); setMenuOpen(false) }}
                            >
                                <input type="radio" checked={theme === "dark"} readOnly className="mr-2" />
                                Dark Theme
                            </div>
                            <div
                                className={`flex items-center px-3 py-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 ${theme === "light" ? "font-semibold" : ""}`}
                                onClick={() => { setTheme("light"); setMenuOpen(false) }}
                            >
                                <input type="radio" checked={theme === "light"} readOnly className="mr-2" />
                                White Theme
                            </div>

                            <hr className="my-2 border-neutral-300 dark:border-neutral-600" />

                            <div
                                className="px-3 py-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                onClick={onToggleAccessibility}
                            >
                                Accessibility Setting
                            </div>
                        </div>
                    )}
                </div>
                {/* End Theme Menu */}

                {/* Info */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Info">
                    <Info className="h-5 w-5 text-black dark:text-neutral-300" />
                </button>

                {/* Notifications */}
                <button className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" aria-label="Notifications">
                    <Bell className="h-5 w-5 text-black dark:text-neutral-300" />
                </button>
            </div>
        </header>
    )
}

export default Header
