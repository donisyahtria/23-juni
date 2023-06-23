import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar } from "react-native";
import Todo from "./pages/Todo";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ExpoStatusBar style="auto" />
        <Todo />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
});
