import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  title: "",
  selectedTodo: null,
};

const actions = {
  CHANGE_TITLE: "change_title",
  ADD_TODO: "add_todo",
  CHOOSE_TODO: "choose_todo",
  UPDATE_TODO: "update_todo",
  CHOOSE_TODO_FOR_DELETE: "choose_todo_for_delete",
  DELETE_TODO: "delete_todo",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },

    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.title = "";
    },

    chooseTodo: (state, action) => {
      const { title } = action.payload;
      state.selectedTodo = action.payload;
      state.title = title;
    },

    updateTodo: (state) => {
      const todo = state.todos.find((todo) => todo.id === state.selectedTodo.id);
      todo.title = state.title;
      state.todos = [...state.todos.filter((todo) => todo.id !== state.selectedTodo.id), todo];
      state.title = "";
      state.selectedTodo = null;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { changeTitle, addTodo, chooseTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice;
