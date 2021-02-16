import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";

import rootReducer from "@redux/reducers";
import rootSaga from "@redux/saga";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {

    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};
export const makeStore: MakeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

// export const wrapper = createWrapper(makeStore);
export const wrapper = createWrapper(makeStore, { debug: true });
