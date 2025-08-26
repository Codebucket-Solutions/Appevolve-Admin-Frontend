import React, { useState, useEffect } from "react"
import { Sun, Moon, Accessibility } from "lucide-react" // ♿ icon

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
            <h1 className="text-lg font-semibold text-neutral-900 dark:text-white">AppEnvolve</h1>

            <div className="flex items-center gap-4">
                {/* Dark mode toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? (
                        <Sun className="h-4 w-4 text-yellow-400" />
                    ) : (
                        <Moon className="h-4 w-4 text-neutral-600" />
                    )}
                </button>

                {/* Accessibility toggle */}
                <button
                    onClick={onToggleAccessibility}
                    className="p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                    aria-label="Accessibility options"
                >
                    <Accessibility className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </button>

                {/* Other actions */}
                <button className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    Settings
                </button>
                <button className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Header
