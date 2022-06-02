import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider, useSelector } from "react-redux";
import { Store } from "./src/redux/store";
import StackNav from "./src/navigations/stack/StackNav";
import DrawerNav from "./src/navigations/drawer/DrawerNav";

// create Stack
const Stack = createNativeStackNavigator();

export function Main() {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <NavigationContainer>
      {user ? <DrawerNav /> : <StackNav />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
