import { configureStore } from "@reduxjs/toolkit";
import { wrapperAPI } from "./helper/wrapperApi";

export const Store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    wrapperAPI.middleware,
  ],
  reducer: {
    [wrapperAPI.reducerPath]: wrapperAPI.reducer,
  },
});
