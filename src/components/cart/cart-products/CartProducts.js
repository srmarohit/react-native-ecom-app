import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import CubeCard from "../../cards/cube_cards/CubeCard";

const { height } = Dimensions.get("screen");

function CartProducts(props) {
  return (
    <View style={styles.container}>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={products || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CubeCard key={item.id} product={item} cart_mode {...props} />
        )}
      /> */}
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
