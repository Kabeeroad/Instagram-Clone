import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../Features/UserSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
