import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { furnitures } from "../../../const/furniture_data";
import CubeCard from "../../cards/cube_cards/CubeCard";

const { height } = Dimensions.get("screen");

function CartProducts(props) {
  const { cart } = useSelector((state) => state.prodReducer);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart.products || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CubeCard key={item.id} furniture={item} cart_mode {...props} />
        )}
      />
    </View>
  );
}

export default CartProducts;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    textAlign: "center",
    alignItems: "center",
    maxHeight: height / 2,
    width: "100%",
    elevation: 7,
  },
});
