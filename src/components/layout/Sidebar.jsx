import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import modules from "@/lib/modules.json"
import useSidebar from "@/hooks/useSidebar"
import { ChevronDown, Menu, Search as SearchIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "@/store/layoutSlice"
import * as Lucide from "lucide-react"

const LIcon = ({ name, className }) => {
    const Cmp = Lucide[name]
    return Cmp ? <Cmp className={className} /> : null
}


const SidebarItem = ({ item, depth = 0, openItems, toggleItem }) => {
    const location = useLocation()
    const collapsed = useSelector((s) => s.layout.collapsed)
    const isActive = item.route && location.pathname.startsWith(item.route)
    const hasChildren = Array.isArray(item.children) && item.children.length > 0
    const isOpen = openItems?.[item.label]


    const handleClick = (e) => {
        if (hasChildren) {
            e.preventDefault()
            toggleItem(item.label)
        }
    }

    const left = (
        <div className="flex-1 flex items-center gap-2 ">
            {item.icon && <LIcon name={item.icon} className="h-5 w-5 shrink-0" />}
            {!collapsed && <span>{item.label}</span>}
            {item.badge && !collapsed && (
                <span className="ml-auto bg-blue-600/90 text-white text-xs px-2 rounded-full">
                    {item.badge}
                </span>
            )}
        </div>
    )

    const buttonContent = (
        <Button
            variant={isActive ? "secondary" : "ghost"}
            className={`w-full flex items-center justify-between px-3 ${depth > 0 ? "pl-6" : ""}`}
            onClick={handleClick}
        >
            {left}
            {hasChildren && !collapsed && (
                <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            )}
        </Button>
    )

    return (
        <div className="w-full">
            {item.route && !hasChildren ? (

                <Link to={item.route} className="block">
                    {buttonContent}
                </Link>
            ) : (
                buttonContent
            )}


            {hasChildren && isOpen && !collapsed && (
                <div className="ml-4 border-l border-neutral-700">
                    {item.children.map((child) => (
                        <SidebarItem
                            key={child.label}
                            item={child}
                            depth={depth + 1}
                            openItems={openItems}
                            toggleItem={toggleItem}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

const Sidebar = () => {
    const { openItems, toggleItem } = useSidebar()
    const dispatch = useDispatch()
    const collapsed = useSelector((s) => s.layout.collapsed)
    const [selectedHeader, setSelectedHeader] = useState(modules.moduleHeader[0])
    const header = selectedHeader

    return (
        <div
            className={`h-screen bg-neutral-900 text-white flex flex-col justify-between border-r border-neutral-800 transition-all duration-300 ${collapsed ? "w-16" : "w-64"
                }`}
        >
            {/* Top bar with app name + collapse button */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
                {!collapsed && <span className="text-lg font-bold">
                    <LIcon name="Layers" className="inline h-6 w-6 mr-2 text-orange-500" />
                </span>}
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="p-1 hover:bg-neutral-800 rounded"
                    aria-label="Toggle sidebar"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            {/* --- Module header (Module 1 + Settings/Help + Search) --- */}
            <div className="px-3 py-3 border-b border-neutral-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div
                            className="h-6 w-6 rounded grid place-items-center text-xs font-bold"
                            style={{
                                backgroundColor: header.color || "#f97316",
                                color: "#111",
                            }}
                            aria-hidden
                        >
                            {header.initial || "S"}
                        </div>
                        {!collapsed && <span className="text-base">{header.label}</span>}
                    </div>
                    {!collapsed && (
                        <select
                            className="bg-transparent text-neutral-400 text-sm focus:outline-none"
                            value={header.label}
                            onChange={e => {
                                const selected = modules.moduleHeader.find(h => h.label === e.target.value)
                                if (selected) {
                                    setSelectedHeader(selected)
                                }
                            }}
                        >
                            {modules.moduleHeader.map(h => (
                                <option key={h.label} value={h.label} className="text-black">
                                    {h.label}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                {!collapsed && (
                    <>
                        {/* quick links */}
                        <div className="mt-4 space-y-3">
                            {header.actions?.map((a) => (
                                <Link
                                    key={a.label}
                                    to={a.route}
                                    className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white"
                                >
                                    <LIcon name={a.icon} className="h-5 w-5" />
                                    <span>{a.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* search */}
                        {header.search?.enabled && (
                            <div className="mt-4">
                                <div className="relative">
                                    <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                                    <Input
                                        placeholder={header.search.placeholder || "Search"}
                                        className="pl-8 bg-neutral-900/50 border-neutral-700 text-neutral-200 placeholder:text-neutral-400"
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* --- Sections (MAIN, SYSTEM, etc.) --- */}
            <div className="p-2 space-y-4 overflow-y-auto flex-1 pr-3">
                {modules.modules.map((section) => (
                    <div key={section.label}>
                        {!collapsed && (
                            <p className="text-xs text-neutral-400 uppercase mb-2">
                                {section.label}
                            </p>
                        )}
                        <div className="space-y-1">
                            {section.children.map((item) => (
                                <SidebarItem
                                    key={item.label}
                                    item={item}
                                    openItems={openItems}
                                    toggleItem={toggleItem}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Profile --- */}
            <div className="p-4 border-t border-neutral-800">
                {collapsed ? (
                    <Avatar className="h-10 w-10 mx-auto">
                        <AvatarImage src={modules.profile.avatar} alt={modules.profile.name} />
                        <AvatarFallback>{modules.profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                ) : (
                    <>
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={modules.profile.avatar} alt={modules.profile.name} />
                                <AvatarFallback>{modules.profile.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">{modules.profile.name}</p>
                                <p className="text-xs text-neutral-400">{modules.profile.email}</p>
                            </div>
                        </div>
                        <Button variant="secondary" className="w-full mt-3">
                            {modules.profile.cta}
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Sidebar

// export default Sidebar
