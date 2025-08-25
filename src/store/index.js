import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from "./layoutSlice"
import moduleReducer from "./moduleSlice"

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        modules: moduleReducer,
    },
})

export default store