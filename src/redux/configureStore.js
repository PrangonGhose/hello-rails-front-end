import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./greetings";

const rootReducer = {
  greetings: greetingsReducer,
}

const store = configureStore({ reducer: rootReducer })

export default store;
