import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../const/colors";

function Category({ selectedCat, setSelectedCat, item }) {
  return (
    <TouchableOpacity onPress={() => setSelectedCat(item.name)}>
      <View
        style={{
          ...styles.container,
          backgroundColor:
            selectedCat == item.name ? COLORS.primary : COLORS.light,
        }}
      >
        <Text
          style={{
            ...styles.title,
            color: item.name === selectedCat ? COLORS.light : COLORS.primary,
          }}
        >
          {item.name}
        </Text>
        <MaterialCommunityIcons
          name={item.iconName}
          size={20}
          color={COLORS.white}
        />
      </View>
    </TouchableOpacity>
  );
}

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.light,
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: "center",
    marginRight: 15,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.primary,
    marginRight: 5,
  },
});
