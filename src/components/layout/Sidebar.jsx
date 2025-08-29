import React, { use, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import modules from "@/lib/modules.json"
import useSidebar from "@/hooks/useSidebar"
import { ChevronDown, Menu, Search as SearchIcon, PanelRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "@/store/layoutSlice"
import * as Lucide from "lucide-react"
import logo from "../../assets/logos/logo_sidebar.png"
// import logo from '../../assets/logos/rect_logo.png'

import LogoutButton from "@/container/authContainer/Logout"

const LIcon = ({ name, className }) => {
    const Cmp = Lucide[name]
    return Cmp ? <Cmp className={className} /> : null
}


const SidebarItem = ({ item, depth = 0, openItems, toggleItem }) => {
    const location = useLocation();
    const collapsed = useSelector((s) => s.layout.collapsed);
    const isActive = item.route && location.pathname.startsWith(item.route);
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const isOpen = openItems?.[item.label];

    const handleClick = (e) => {
        if (hasChildren) {
            e.preventDefault();
            toggleItem(item.label);
        }
    };

    const left = (
        <div className="flex-1 flex items-center gap-2 font-figtree">
            {item.icon && <LIcon name={item.icon} className="h-5 w-5 shrink-0" />}
            {!collapsed && <span>{item.label}</span>}
            {item.badge && !collapsed && (
                <span className="ml-auto bg-blue-600/90 text-white text-xs px-2 rounded-full">
                    {item.badge}
                </span>
            )}
        </div>
    );

    const buttonContent = (
        <Button
            variant={isActive ? "darkActive" : "darkGhost"}
            className={`w-full flex items-center justify-between px-3 dark:text-white ${depth > 0 ? "pl-6" : ""}`}
            onClick={handleClick}
        >
            {left}
            {hasChildren && !collapsed && (
                <Lucide.ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            )}
        </Button>
    );


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
    );
};

const Sidebar = ({ handleLogout }) => {
    const { openItems, toggleItem } = useSidebar();
    const { selectedModule } = useSelector((state) => state.modules);
    const dispatch = useDispatch();
    const collapsed = useSelector((s) => s.layout.collapsed);
    console.log(modules.moduleHeader)
    const [selectedHeader, setSelectedHeader] = useState({});
    const header = selectedHeader;

    useEffect(() => {
        setSelectedHeader(modules.moduleHeader.find((h) => h?.label === selectedModule));
    }, [modules.moduleHeader, selectedModule]);

    return (
        <div
            className={`h-screen dark:bg-[#151515] text-white flex flex-col justify-between border-r border-[#D5D5D5] dark:border-[#323338] transition-all duration-300 ${collapsed ? "w-16 justify-center items-center" : "w-64"
                }`}
        >
            <div className="flex items-center justify-between p-4 border-b border-neutral-300 dark:border-neutral-800">
                {!collapsed && (
                    <span className="text-lg font-bold text-black dark:text-white">
                        <img src={logo} alt="Logo" className="inline h-4 mr-2" />
                    </span>
                )}
                <button
                    onClick={() => dispatch({ type: "layout/toggleSidebar" })}
                    className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-black dark:text-white"
                    aria-label="Toggle sidebar"
                >
                    <Lucide.PanelRight className="h-5 w-5" />
                </button>
            </div>


            {/* --- Module header (Module 1 + Settings/Help + Search) --- */}
            <div className="px-3 py-3 border-b dark:border-neutral-800">
                <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
                    <div className={`flex items-center ${collapsed ? "justify-center" : ""} gap-2`}>
                        <div
                            className={`h-6 w-6 rounded grid place-items-center text-xs font-bold `}
                            style={{
                                backgroundColor: header?.color || "#f97316",
                                color: "#111",
                            }}
                            aria-hidden
                        >
                            {header?.initial || "S"}
                        </div>
                        {/* {!collapsed ? (
                            <span className="dark:text-white text-black">
                                {header.label.charAt(0)}
                            </span>
                        ) : null} */}

                    </div>
                    {!collapsed && (
                        <select
                            className="bg-transparent text-black dark:text-white text-sm focus:outline-none  font-figtree"
                            value={header?.label}
                            onChange={(e) => {
                                const selected = modules.moduleHeader.find((h) => h.label === e.target.value);
                                if (selected) {
                                    setSelectedHeader(selected);
                                }
                            }}
                        >
                            {modules.moduleHeader.map((h) => (
                                <option key={h.label} value={h.label} className="bg-primary text-black dark:text-white font-figtree">
                                    {h.label}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                {/* quick links */}
                <div className="mt-4 space-y-3 font-figtree">
                    {header?.actions?.map((a) => (
                        <Link
                            key={a.label}
                            to={a.route}
                            className={`flex items-center ${collapsed ? "justify-center" : ""} gap-3 text-sm dark:text-white hover:text-black text-black`}
                        >
                            {/* icon always visible */}
                            <LIcon name={a.icon} className="h-5 w-5" />

                            {/* label only when expanded */}
                            {!collapsed && <span>{a.label}</span>}
                        </Link>
                    ))}
                </div>

                {/* search */}
                {header?.search?.enabled && (
                    <div className="mt-3">
                        {collapsed ? (
                            <button className="p-2 border-1 border-[#676879] hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-[4px]">
                                <Lucide.Search className="h-5 w-5 dark:text-[#676879] text-black" />
                            </button>


                        ) : (
                            <div className="relative">
                                <Lucide.Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-black dark:text-[#676879]" />
                                <Input
                                    placeholder={header.search.placeholder || "Search"}
                                    className="pl-8 w-full bg-neutral-100 text-black dark:bg-[#151515] dark:text-white dark:placeholder:text-[#676879] rounded-[4px]"
                                />
                            </div>
                        )}
                    </div>
                )}


            </div>

            {/* --- Sections (MAIN) --- */}
            <div className="p-2 space-y-4 overflow-y-auto flex-1 pr-3">
                {modules.modules.map((section) => (
                    <div key={section.label}>
                        {/* {!collapsed && ( */}
                        <p className={`text-xs text-black dark:text-white uppercase mb-2 ${collapsed ? "text-center" : ""}`}>
                            {section.label}
                        </p>
                        {/* )} */}
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

            <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                {collapsed ? (
                    <button
                        // onClick={() => dispatch(logout())}
                        className="block mx-auto"
                    >
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={modules.profile.avatar} alt={modules.profile.name} />
                            <AvatarFallback>{modules.profile.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </button>
                ) : (
                    <div>
                        <button
                            className="w-full flex items-center gap-3 text-left p-2 rounded-[4px] transition"
                        >
                            <Avatar className="bg-gray-100 dark:bg-neutral-700">
                                <AvatarImage src={modules.profile.avatar} alt={modules.profile.name} />
                                <AvatarFallback className="text-black dark:text-white">
                                    {modules.profile.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="">
                                <p className="text-sm font-medium text-black dark:text-white">
                                    {modules.profile.name}
                                </p>
                                <p className="text-xs text-black dark:text-white">
                                    {modules.profile.email}
                                </p>

                            </div>
                            <div className="mt-auto">
                                <LogoutButton handleLogout={handleLogout} />
                            </div>
                        </button>


                        <Button
                            variant="secondary"
                            className="w-full mt-3 bg-white dark:bg-white text-black dark:text-black border border-neutral-300 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-600"
                        >
                            {modules.profile.cta}
                        </Button>

                    </div>
                )}
            </div>


        </div>
    );
};

export default Sidebar

// export default Sidebar
