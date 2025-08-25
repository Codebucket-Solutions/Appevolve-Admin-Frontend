import React from "react";
import { useSelector } from "react-redux";

export default function SidebarProfile() {
    const profile = useSelector((state) => state.menu.profile);

    return (
        <div className="p-4 border-t flex items-center gap-3">
            <img
                src={profile.avatar}
                alt="profile"
                className="w-10 h-10 rounded-full"
            />
            <div>
                <p className="font-medium text-sm">{profile.name}</p>
                <p className="text-xs text-gray-500">{profile.email}</p>
                <button className="text-xs text-blue-600">{profile.cta}</button>
            </div>
        </div>
    );
}
