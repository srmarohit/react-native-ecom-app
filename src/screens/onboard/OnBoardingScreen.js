import React, { useEffect } from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./OnBoardStyle";
import AppLoading from "expo-app-loading";
import { furnitures } from "../../const/furniture_data";
import { loadProducts } from "../../redux/products/actions";
import { useDispatch } from "react-redux";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

function OnBoardingScreen({ navigation }) {
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  useEffect(() => {
    console.log("Home mount");
    dispatch(loadProducts({ products: furnitures }));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("ww")}>
        <Text
          style={{
            ...styles.brand,
            fontFamily: "Roboto_700Bold_Italic",
          }}
        >
          Furniture Shop
        </Text>
      </Pressable>

      <Button title="Order Now" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default OnBoardingScreen;
