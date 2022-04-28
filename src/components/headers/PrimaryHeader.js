import * as React from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import COLORS from "../../const/colors";

export default function PrimaryHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="sort"
        size={30}
        color="black"
        onPress={() => navigation.navigate("Settings")}
      />
      <FontAwesome
        name="shopping-cart"
        size={30}
        color="black"
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
