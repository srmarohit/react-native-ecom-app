import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../../const/colors";
import { addToCart, removeFromCart } from "../../../redux/products/actions";
import QtyController from "../../qty-controller/QtyController";

import styles from "./cubeCardStyle";

function CubeCard({ product, navigation, cart_mode }) {
  const setQty = (qty) => {
    //dispatch(addToCart({ ...product, qty: qty - product.qty }));
  };

  const handleDel = (e) => {
    console.log(e);
    e.stopPropagation();
    //dispatch(removeFromCart(product.id));
  };

  const overlayIcon = cart_mode ? (
    <MaterialCommunityIcons
      name="delete-alert"
      style={{ top: 3, left: 2 }}
      size={19}
      color="red"
    />
  ) : (
    <FontAwesome
      name="heart"
      style={{ top: 6, left: 4 }}
      size={13}
      color={product?.liked ? "red" : "black"}
    />
  );

  const cart_mode_container_style = cart_mode
    ? { ...styles.container, ...styles.cart_mode_container }
    : styles.container;

  const cart_mode_info_style = cart_mode ? (
    <QtyController qty={product.qty} setQty={setQty} />
  ) : (
    <>
      <FontAwesome name="star" size={18} color={COLORS.yellow} />
      <Text style={styles.rating}>{product.averageRating}</Text>
    </>
  );

  return (
    <Pressable
      onPress={(e) => {
        e.stopPropagation();
        navigation.navigate("Detail", product);
      }}
    >
      <View style={cart_mode_container_style}>
        <View style={styles.icon} onTouchEnd={{ handleDel }}>
          {overlayIcon}
        </View>
        <Image
          source={{ uri: product.imageInfo?.thumbnailUrl }}
          style={styles.image}
        />
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{product.name?.substring(0, 20)}</Text>
          <View style={styles.info}>
            <Text style={styles.price}>
              {product.priceInfo?.currentPrice?.price}$
            </Text>
            {cart_mode_info_style}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default CubeCard;
