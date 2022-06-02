import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productReducer from "./products/reducer";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  prodReducer: productReducer,
  userReducer,
  cartReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
