import rootSaga from "./rootSaga";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import portfolioReducer from "./features/Portfolio/portfolioSlice";
import themeSwitcherReducer from "./features/ThemeSwitcher/themeSwitcherSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolioReducer: portfolioReducer,
        themeSwitcherReducer: themeSwitcherReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;