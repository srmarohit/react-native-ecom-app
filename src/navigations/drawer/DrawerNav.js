import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../components/drawers/CustomDrawer";

import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../../screens/home/HomeScreen";
import OrderScreen from "../../screens/orders/Order";
import CatScreen from "../../screens/catalog/CatScreen";
import SettingScreen from "../../screens/settings/SettingScreen";
import DetailScreen from "../../screens/detail/DetailScreen";
import CartScreen from "../../screens/cart/CartScreen";
import TrackOrderScreen from "../../screens/trackorder/TrackOrder";
import OnBoardingScreen from "../../screens/onboard/OnBoardingScreen";
import { useSelector } from "react-redux";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          // fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      {user && (
        <Drawer.Screen
          name="Orders"
          component={OrderScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Octicons name="bookmark" size={22} color={color} />
            ),
          }}
        />
      )}

      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="cart" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
          drawerItemStyle: {
            display: "none",
          },
        }}
      />

      {user && (
        <Drawer.Screen
          name="TrackOrder"
          component={TrackOrderScreen}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="track-changes" size={22} color={color} />
            ),
          }}
        />
      )}

      <Drawer.Screen
        name="Catalog"
        component={CatScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="category" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
