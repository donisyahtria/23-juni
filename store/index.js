import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducer/todo.reducer";
// import todoAPI from "../reducer/todo.api";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    // [todoAPI.reducerPath]: todoApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([todoApi.middleware]),
});

export { store };
