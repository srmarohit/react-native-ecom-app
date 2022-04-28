import React from "react";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function SecondaryHeader({ navigation, title }) {
  return (
    <View style={styles.header}>
      <Feather
        name="chevron-left"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      <SimpleLineIcons name="options-vertical" size={24} color="black" />
    </View>
  );
}

export default SecondaryHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  leftHeaderBtn: {},

  rightOptBtn: {},
});
