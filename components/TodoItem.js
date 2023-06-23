import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View, StyleSheet } from "react-native";

function TodoItem({ todo, chooseTodo, chooseTodoForDelete }) {
  return (
    <Pressable
      onPress={() => {
        chooseTodo(todo);
      }}
    >
      <View style={styles.item}>
        <Text>{todo.title}</Text>
        <Pressable
          onPress={() => {
            chooseTodoForDelete(todo);
          }}
        >
          <Ionicons name="trash" size={20} color="red" />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 10,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginRight: 10,
  },
});

export default TodoItem;
