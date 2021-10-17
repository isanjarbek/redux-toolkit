import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducers from "./count/toolkitReducers";
import toggleReducer from "./toggle/toggleReducer";
import toolkitSlice from "./toolkitSlice";

export const rootReducer = combineReducers({
  toolkit: toolkitReducers,
  toggle: toggleReducer,
  toolkitslice: toolkitSlice,
});
