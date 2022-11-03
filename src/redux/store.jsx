import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
