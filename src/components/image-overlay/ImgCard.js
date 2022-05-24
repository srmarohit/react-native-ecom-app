import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import COLORS from "../../const/colors";
import { styles } from "./imgCardStyle";

export default function ImgCard({ product }) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.backgroundImg}
      source={{ uri: product.imageInfo?.thumbnailUrl }}
    >
      <View style={styles.ratingInfo}>
        <View style={styles.rating}>
          <FontAwesome name="star" size={18} color={COLORS.yellow} />
          <Text style={styles.ratingText}>{product.averageRating}</Text>
        </View>
        <Text style={styles.reviews}>{product.numberOfReviews} Reviews</Text>
      </View>
    </ImageBackground>
  );
}
