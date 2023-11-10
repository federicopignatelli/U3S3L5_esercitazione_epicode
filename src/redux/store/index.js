import { configureStore, combineReducers } from "@reduxjs/toolkit";
import musicReducer from "../reducers/music";

const bigReducer = combineReducers({
    // cart: cartReducer,
    // user: userReducer,
    music: musicReducer,
});

const store = configureStore({
    reducer: bigReducer,
});

export default store;