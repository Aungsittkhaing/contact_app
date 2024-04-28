import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    auth : authReducer
});
export const store = createStore(reducer,{}, applyMiddleware(thunk))