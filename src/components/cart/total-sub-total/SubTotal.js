import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";

export default function SubTotal() {
  const { cart } = useSelector((state) => state.prodReducer);
  console.log(cart);

  return (
    <View style={styles.container}>
      <Text style={styles.sub_text}>SubTotal :</Text>
      <Text style={styles.sub_value}>${cart.subtotal}</Text>
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
