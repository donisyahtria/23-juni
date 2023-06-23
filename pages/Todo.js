import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeTitle, chooseTodo, deleteTodo, updateTodo } from "../reducer/todo.reducer";
import TodoItem from "../components/TodoItem";

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

const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case actions.CHOOSE_TODO:
      const { title } = action.payload;
      return {
        ...state,
        selectedTodo: action.payload,
        title,
      };

    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        title: "",
      };

    case actions.UPDATE_TODO:
      const todo = state.todos.find((todo) => todo.id === state.selectedTodo.id);
      todo.title = state.title;
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== state.selectedTodo.id), todo],
        title: "",
        selectedTodo: null,
      };

    case actions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      break;
  }
};

function Todo() {
  const dispatch = useDispatch();
  const { todos, selectedTodo, title } = useSelector((state) => state.todo);
  // console.log(selectedTodo);

  const handleAddTodo = () => {
    if (!title) return;
    dispatch(addTodo({ id: todos.length, title }));
  };

  const chooseTodoToUpdate = (todo) => {
    dispatch(chooseTodo(todo));
  };

  const handleUpdateTodo = () => {
    if (!title) return;
    dispatch(updateTodo());
  };

  const handleDeleteTodo = (todo) => {
    Alert.alert("CONFIRM!", "Are You Sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => dispatch(deleteTodo(todo.id)) },
    ]);
  };

  return (
    <View>
      <Text>Todo</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={title} onChangeText={(text) => dispatch(changeTitle(text))} />
        <Button title="Submit" onPress={selectedTodo ? handleUpdateTodo : handleAddTodo} />
      </View>
      <View style={styles.todoContainer}>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} chooseTodo={chooseTodoToUpdate} chooseTodoForDelete={handleDeleteTodo} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  todoContainer: {
    marginTop: 10,
  },
});

export default Todo;
