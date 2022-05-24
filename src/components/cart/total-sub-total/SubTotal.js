import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";
import { useCartStore } from "../../../zustand/cart";
import { useProductStore } from "../../../zustand/products";

export default function SubTotal() {
  const { subTotal } = useCartStore((state) => state);

  return (
    <View style={styles.container}>
      <Text style={styles.sub_text}>SubTotal :</Text>
      <Text style={styles.sub_value}>${subTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15 * pt,
    paddingHorizontal: 25 * pt,
  },

  sub_text: {
    fontSize: 15 * pt,
    fontWeight: "700",
    color: COLORS.dark,
  },

  sub_value: {
    fontSize: 28 * pt,
    fontWeight: "600",
    color: COLORS.dark,
  },
});
