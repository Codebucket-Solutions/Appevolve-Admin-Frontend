import React from "react"
import * as Icons from "lucide-react"

export default function LIcon({ name, size = 20, className = "" }) {
    const LucideIcon = Icons[name]
    if (!LucideIcon) {
        console.warn(`Lucide icon "${name}" not found.`)
        return null
    }
    return <LucideIcon size={size} className={className} />
}
