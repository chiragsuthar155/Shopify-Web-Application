import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { hmServicesApi } from "./services/hmServices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [hmServicesApi.reducerPath]: hmServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hmServicesApi.middleware),
});

export default store;
