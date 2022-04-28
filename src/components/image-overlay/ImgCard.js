import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import COLORS from "../../const/colors";
import { styles } from "./imgCardStyle";

export default function ImgCard({ furniture }) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.backgroundImg}
      source={furniture.image}
    >
      <View style={styles.ratingInfo}>
        <View style={styles.rating}>
          <FontAwesome name="star" size={18} color={COLORS.yellow} />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
        <Text style={styles.reviews}>250 Reviews</Text>
      </View>
    </ImageBackground>
  );
}
