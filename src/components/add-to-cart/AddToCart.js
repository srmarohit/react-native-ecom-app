import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useCartStore } from "../../zustand/cart";
import { useProductStore } from "../../zustand/products";
import QtyController from "../qty-controller/QtyController";

import styles from "./addToCartStyle";

function AddToCart({ product, navigation }) {
  const { addToCart } = useCartStore((state) => state);

  const [qty, setQty] = useState(1);

  return (
    <>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          ${product.priceInfo?.currentPrice?.price}
        </Text>
        <QtyController qty={qty} setQty={setQty} />
      </View>
      <View style={styles.cartBtnContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name="heart"
            size={24}
            color={product.liked ? "red" : "black"}
          />
        </View>
        <Text
          style={styles.addToCart}
          onPress={() => {
            addToCart({
              id: product.id,
              usItemId: product.usItemId,
              qty,
            });
            navigation.navigate("Cart");
          }}
        >
          Add To Cart{" "}
        </Text>
      </View>
    </>
  );
}

export default AddToCart;
