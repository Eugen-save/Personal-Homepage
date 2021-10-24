import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolioState",
    initialState: { 
        portfolio: [],
    },
    reducers: {
        fetchPortfolio: (state) => {
            state.status = "loading";
        },
        fetchPortfolioSuccess: (state, {payload: APIrepo}) => {
            state.status = "success";
            state.portfolio = APIrepo;
        },
        fetchPortfolioError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchPortfolio,
    fetchPortfolioSuccess,
    fetchPortfolioError,
} = portfolioSlice.actions;

export const selectPortfolioState = state => state.portfolioReducer;
export const selectPortfolio = state => selectPortfolioState(state).portfolio;
export const selectStatus = state => selectPortfolioState(state).status;

export default portfolioSlice.reducer;