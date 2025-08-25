import { createSlice } from "@reduxjs/toolkit"
import menus from "@/config/menus.json"

const initialState = menus["Module 1"]

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        updateMenu: (state, action) => {
            return { ...state, modules: action.payload }
        },
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload }
        },
        switchModule: (state, action) => {
            return menus[action.payload] || state
        },
    },
})

export const { updateMenu, updateProfile, switchModule } = menuSlice.actions
export default menuSlice.reducer
