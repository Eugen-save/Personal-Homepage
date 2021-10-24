import { put, call, delay, takeLatest } from "@redux-saga/core/effects";
import { getAPI } from "../../getAPI";
import { fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess } from "./portfolioSlice";

function* fetchPortfolioHandler() {

    try {
        yield delay(1000);
        const portfolio = yield call (getAPI);
        yield put(fetchPortfolioSuccess(portfolio));
    } catch (error) {
        yield put(fetchPortfolioError());
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler)
}