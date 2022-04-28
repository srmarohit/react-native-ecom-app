import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/products/actions";
import QtyController from "../qty-controller/QtyController";

import styles from "./addToCartStyle";

function AddToCart({ furniture, navigation }) {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  return (
    <>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${furniture.price}</Text>
        <QtyController qty={qty} setQty={setQty} />
      </View>
      <View style={styles.cartBtnContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name="heart"
            size={24}
            color={furniture.liked ? "red" : "black"}
          />
        </View>
        <Text
          style={styles.addToCart}
          onPress={() => {
            navigation.navigate("Cart");
            dispatch(addToCart({ ...furniture, qty }));
          }}
        >
          Add To Cart{" "}
        </Text>
      </View>
    </>
  );
}

export default AddToCart;
