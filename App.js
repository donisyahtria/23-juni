// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar } from "react-native";
// import Todo from "./pages/Todo";
// import { Provider } from "react-redux";
// import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import UpcomingScreen from "./pages/UpComingScreen";
// import MovieDetailsScreen from "./MovieDetailsScreen";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    //   <View style={styles.container}>
    //     <ExpoStatusBar style="auto" />
    //     <Todo />
    //   </View>
    // </Provider>

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "ios-film";
            } else if (route.name === "Upcoming") {
              iconName = "ios-calendar";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
