import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from "./layoutSlice"
import moduleReducer from "./moduleSlice"
import accessibilityReducer from "./accessibilitySlice"

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        modules: moduleReducer,
        accessibility: accessibilityReducer,
    },
})

export default store