import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productReducer from "./products/reducer";

const rootReducer = combineReducers({ prodReducer: productReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
