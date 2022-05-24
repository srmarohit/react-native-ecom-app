import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartProducts from "../../components/cart/cart-products/CartProducts";
import Total from "../../components/cart/cart-total/Total";
import SecondaryHeader from "../../components/headers/SecondaryHeader";
import { useCartStore } from "../../zustand/cart";

function CartScreen({ navigation }) {
  const { products } = useCartStore((state) => state);

  const [cartProducts, setCartProducts] = useState([]);

  if (!Object.keys(products).length) {
    return (
      <SafeAreaView>
        <SecondaryHeader navigation={navigation} title="Cart" />
        <View style={styles.blank_cart_container}>
          <Text style={styles.blank_cart_msg}>No Item Found</Text>
          <Button
            variant="contained"
            size="lg"
            title="Browse Products"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </SafeAreaView>
    );
  }

  useEffect(() => {
    const fetchCart = async () => {
      Object.keys().map((id, index) => {
        // fetching data
      });
    };
  });

  return (
    <SafeAreaView>
      <SecondaryHeader navigation={navigation} title="Cart" />
      {/** Cart List */}
      <CartProducts navigation={navigation} />
      {/** Total Price */}
      <Total />
      <Button variant="contained" size="lg" title="Checkout" fullWidth />
    </SafeAreaView>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    elevation: 7,
  },

  blank_cart_container: {
    padding: 75,
    marginTop: 100,
  },

  blank_cart_msg: {
    fontWeight: "600",
    fontSize: 25,
    marginVertical: 20,
    textAlign: "center",
  },
});
