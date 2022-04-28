import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import COLORS from "../../../const/colors";
import { addToCart, removeFromCart } from "../../../redux/products/actions";
import QtyController from "../../qty-controller/QtyController";

import styles from "./cubeCardStyle";

function CubeCard({ furniture, navigation, cart_mode }) {
  const dispatch = useDispatch();

  const setQty = (qty) => {
    dispatch(addToCart({ ...furniture, qty: qty - furniture.qty }));
  };

  const handleDel = (e) => {
    console.log(e);
    e.stopPropagation();
    dispatch(removeFromCart(furniture.id));
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
      color={furniture.liked ? "red" : "black"}
    />
  );

  const cart_mode_container_style = cart_mode
    ? { ...styles.container, ...styles.cart_mode_container }
    : styles.container;

  const cart_mode_info_style = cart_mode ? (
    <QtyController qty={furniture.qty} setQty={setQty} />
  ) : (
    <>
      <FontAwesome name="star" size={18} color={COLORS.yellow} />
      <Text style={styles.rating}>4.3</Text>
    </>
  );

  return (
    <Pressable
      onPress={(e) => {
        e.stopPropagation();
        navigation.navigate("Detail", furniture);
      }}
    >
      <View style={cart_mode_container_style}>
        <View style={styles.icon} onTouchEnd={{ handleDel }}>
          {overlayIcon}
        </View>
        <Image source={furniture.image} style={styles.image} />
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{furniture.name}</Text>
          <View style={styles.info}>
            <Text style={styles.price}>{furniture.price}</Text>
            {cart_mode_info_style}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default CubeCard;
