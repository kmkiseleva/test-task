import { configureStore } from "@reduxjs/toolkit";
import cards from "./fetchCards";

const store = configureStore({
  reducer: {
    cards,
  },
});

export default store;
