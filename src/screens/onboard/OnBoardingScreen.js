import React, { useEffect, useState } from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./OnBoardStyle";
// import AppLoading from "expo-app-loading";

// import {
//   useFonts,
//   Roboto_100Thin,
//   Roboto_100Thin_Italic,
//   Roboto_300Light,
//   Roboto_300Light_Italic,
//   Roboto_400Regular,
//   Roboto_400Regular_Italic,
//   Roboto_500Medium,
//   Roboto_500Medium_Italic,
//   Roboto_700Bold,
//   Roboto_700Bold_Italic,
//   Roboto_900Black,
//   Roboto_900Black_Italic,
// } from "@expo-google-fonts/roboto";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/products/actions";
import { fetchBestSellingProduct } from "../../services/products";

function OnBoardingScreen({ navigation }) {
  // const { products, loadProducts } = useProductStore((state) => state);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // let [fontsLoaded] = useFonts({
  //   Roboto_100Thin,
  //   Roboto_100Thin_Italic,
  //   Roboto_300Light,
  //   Roboto_300Light_Italic,
  //   Roboto_400Regular,
  //   Roboto_400Regular_Italic,
  //   Roboto_500Medium,
  //   Roboto_500Medium_Italic,
  //   Roboto_700Bold,
  //   Roboto_700Bold_Italic,
  //   Roboto_900Black,
  //   Roboto_900Black_Italic,
  // });

  useEffect(() => {
    console.log("Home mount");

    const fetchData = async () => {
      let res = await fetchBestSellingProduct();
      //console.log(res);
      dispatch(loadProducts(res));
      setLoading(false);
    };

    fetchData();

    // loadProducts();
  }, []);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("ww")}>
        <Text
          style={{
            ...styles.brand,
            // fontFamily: "Roboto_700Bold_Italic",
          }}
        >
          Furniture Shop
        </Text>
      </Pressable>

      <Button
        title="Order Now"
        disabled={loading && true}
        onPress={() => navigation.navigate("Home")}
      />
      <Text
        style={{
          position: "absolute",
          fontSize: 20,
          color: "gray",
          bottom: 5,
          left: "35%",
        }}
        onPress={() => navigation.navigate("Auth")}
      >
        Login/Register
      </Text>
    </View>
  );
}

export default OnBoardingScreen;
