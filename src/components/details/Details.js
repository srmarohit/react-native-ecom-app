import React from "react";
import { Text, View } from "react-native";

import styles from "./detailStyle";

function Details({ product }) {
  return (
    <>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.descHeader}>Description</Text>
      <Text style={styles.description}>
        Designed modern chair with luxury curves in an organic yet structured
        design that holds the sitting body and provides a feeling of relaxation
        while offering excellent back support.
      </Text>
    </>
  );
}

export default Details;
