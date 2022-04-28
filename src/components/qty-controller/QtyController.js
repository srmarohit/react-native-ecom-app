import React from "react";
import { Text, View } from "react-native";
import styles from "./qtyControllerStyle";

function QtyController({ qty, setQty }) {
  return (
    <View style={styles.qtyController}>
      <Text style={styles.qtyInc} onPress={() => setQty(qty + 1)}>
        +
      </Text>
      <Text style={styles.qty}>{qty}</Text>
      <Text style={styles.qtyDec} onPress={() => qty > 1 && setQty(qty - 1)}>
        -
      </Text>
    </View>
  );
}

export default QtyController;
