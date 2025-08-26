import { createSlice } from "@reduxjs/toolkit"

const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        collapsed: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.collapsed = !state.collapsed
        },
        setSidebarCollapsed: (state, action) => {
            state.collapsed = action.payload
        },
    },
})

export const { toggleSidebar, setSidebarCollapsed } = layoutSlice.actions
export default layoutSlice.reducer
