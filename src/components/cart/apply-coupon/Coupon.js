import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "./couponStyle";

function Coupon() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Have any coupon ?</Text>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder="Enter your Coupon Code" />
        <Button style={styles.btn} title="Apply" variant="contained" />
      </View>
    </View>
  );
}

export default Coupon;
