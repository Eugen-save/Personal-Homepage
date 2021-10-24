import { all } from "@redux-saga/core/effects";
import { portfolioSaga } from "./features/Portfolio/portfolioSaga";
import { themeSwitcherSaga } from "./features/ThemeSwitcher/themeSwitcherSaga";

export default function* rootSaga() {
    yield all([
        portfolioSaga(),
        themeSwitcherSaga()
    ]);
}