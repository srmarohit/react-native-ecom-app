import React from "react";
import { ScrollView, Text, View } from "react-native";
import Coupon from "../apply-coupon/Coupon";
import Charges from "../extra-charges/Charges";
import SubTotal from "../total-sub-total/SubTotal";
import styles from "./totalStyle";

export default function Total() {
  return (
    <ScrollView style={styles.container}>
      <SubTotal />
      <Coupon />
      <Charges />
      <View style={styles.total}>
        <Text style={styles.text}>Total : </Text>
        <Text style={styles.value}>$444.25</Text>
      </View>
    </ScrollView>
  );
}
