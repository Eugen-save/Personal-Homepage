import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isThemeDark: null,
};

const themeSwitcherSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        fetchThemeState: () => {},
        setTheme: (state, {payload: newState}) => {
            state.isThemeDark = newState;
        },
    },
});

export const {
    fetchThemeState,
    setTheme,
} = themeSwitcherSlice.actions;

const selectThemeState = state => state.themeSwitcherReducer;

export const selectTheme = state => selectThemeState(state).isThemeDark;

export default themeSwitcherSlice.reducer;
