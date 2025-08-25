import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedModule: {
        label: "Module 1",
        color: "#f97316",
        initial: "M1"
    },
    availableModules: [
        { label: "Module 1", color: "#f97316", initial: "M1" },
        { label: "Module 2", color: "#3b82f6", initial: "M2" },
        { label: "Module 3", color: "#10b981", initial: "M3" }
    ]
};

const moduleSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModule: (state, action) => {
            state.selectedModule = action.payload;
        }
    }
});

export const { setModule } = moduleSlice.actions;
export default moduleSlice.reducer;
