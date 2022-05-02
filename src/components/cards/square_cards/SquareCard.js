import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../../../const/colors";

import styles from "./squareCardStyles";

function SquareCard({ product, navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate("Detail", product)}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesome
            name="heart"
            style={{ top: 2 }}
            size={18}
            color={product.liked ? "red" : "black"}
          />
        </View>
        <Image
          source={{ uri: product.imageInfo?.thumbnailUrl }}
          style={styles.image}
        />
        <Text style={styles.title}>{product?.name.substring(0, 15)}</Text>
        <View style={styles.info}>
          <Text style={styles.price}>
            {product?.priceInfo?.currentPrice?.price}$
          </Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={18} color={COLORS.yellow} />
            <Text style={styles.ratingNumber}>{product.averageRating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default SquareCard;
