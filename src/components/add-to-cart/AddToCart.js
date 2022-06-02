import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/cart/actions";
import QtyController from "../qty-controller/QtyController";

import styles from "./addToCartStyle";

function AddToCart({ product, navigation }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { wishlist } = useSelector((state) => state.cartReducer);

  const liked = wishlist.find((id) => id == product.id);

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
            color={liked ? "red" : "black"}
            onPress={() =>
              liked
                ? dispatch(removeFromWishlist(product.id))
                : dispatch(addToWishlist(product.id))
            }
          />
        </View>
        <Text
          style={styles.addToCart}
          onPress={() => {
            dispatch(
              addToCart({
                ...product,
                qty,
              })
            );
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
