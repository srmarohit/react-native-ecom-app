import * as React from "react";

import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrackOrderScreen from "../../screens/trackorder/TrackOrder";
import OrderScreen from "../../screens/orders/Order";
import OnBoardingScreen from "../../screens/onboard/OnBoardingScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import DetailScreen from "../../screens/detail/DetailScreen";
import CartScreen from "../../screens/cart/CartScreen";
import SettingScreen from "../../screens/settings/SettingScreen";
import CatScreen from "../../screens/catalog/CatScreen";

// create Stack
const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoard" component={OnBoardingScreen} />
      <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Catalog" component={CatScreen} />
    </Stack.Navigator>
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
