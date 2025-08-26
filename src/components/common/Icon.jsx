import React from "react"
import * as Icons from "lucide-react"

const Icon = ({ name, className }) => {
    const LucideIcon = Icons[name] || Icons.Circle
    return <LucideIcon className={className} />
}

export default Icon
