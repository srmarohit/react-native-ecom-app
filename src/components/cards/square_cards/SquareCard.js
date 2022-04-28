import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../../../const/colors";

import styles from "./squareCardStyles";

function SquareCard({ furniture, navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate("Detail", furniture)}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesome
            name="heart"
            style={{ top: 2 }}
            size={18}
            color={furniture.liked ? "red" : "black"}
          />
        </View>
        <Image source={furniture.image} style={styles.image} />
        <Text style={styles.title}>{furniture.name.substring(0, 25)}</Text>
        <View style={styles.info}>
          <Text style={styles.price}>{furniture.price}</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={18} color={COLORS.yellow} />
            <Text style={styles.ratingNumber}>4.3</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default SquareCard;
