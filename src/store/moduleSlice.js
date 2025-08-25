import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moduleHeader: [],
    modules: [],
    profile: {},
    selectedModule: null
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
