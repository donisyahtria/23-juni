import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoAPI = createApi({
  reducerPath: "todoAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://native-train-default-rtdb.asia-southeast1.firebasedatabase.app/todos" }),
});
endpoints: (builder) => ({
  addTodo: builder.mutation({
    query: (body) => ({
      url: () => ".json",
      method: "POST",
      body,
    }),
  }),
});

export const { useAddTodoMutation } = todoAPI;
export default todoAPI;
