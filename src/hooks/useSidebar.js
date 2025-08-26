import { useState } from "react"

const useSidebar = () => {
    const [openItems, setOpenItems] = useState({})

    const toggleItem = (label) => {
        setOpenItems((prev) => ({
            ...prev,
            [label]: !prev[label],
        }))
    }

    return { openItems, toggleItem }
}

export default useSidebar
