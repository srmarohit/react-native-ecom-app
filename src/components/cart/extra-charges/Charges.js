import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";

export default function Charges() {
  return (
    <View style={styles.container}>
      <View style={styles.chargesWrapper}>
        <Text style={styles.text}>Discount : </Text>
        <Text style={styles.value}>$15.00</Text>
      </View>
      <View style={styles.chargesWrapper}>
        <Text style={styles.text}>Shipping : </Text>
        <Text style={styles.value}>$10.00</Text>
      </View>
      <View style={styles.chargesWrapper}>
        <Text style={styles.text}>Delivery Charges : </Text>
        <Text style={styles.value}>$5.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20 * pt,
  },
  chargesWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 25 * pt,
    paddingVertical: 2 * pt,
  },
  text: {
    color: COLORS.dark,
    fontWeight: "bold",
    fontSize: 15 * pt,
    marginRight: 25 * pt,
  },
  value: {
    fontSize: 18 * pt,
    fontWeight: "bold",
  },
});
