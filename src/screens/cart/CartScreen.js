import React from "react";
import { Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartProducts from "../../components/cart/cart-products/CartProducts";
import Total from "../../components/cart/cart-total/Total";
import SecondaryHeader from "../../components/headers/SecondaryHeader";

function CartScreen({ navigation }) {
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
