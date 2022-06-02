import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Category from "./Category";
import { furniture_cat } from "../../const/furniture_data";
import { SimpleLineIcons } from "@expo/vector-icons";

function CatList({ navigation, ...props }) {
  // const furniture_cat = [
  //   { id: 0, name: "Chair", iconName: "seat" },
  //   { id: 1, name: "Table", iconName: "chair-rolling" },
  //   { id: 2, name: "Cupboard", iconName: "table-chair" },
  //   { id: 3, name: "double bed", iconName: "bunk-bed-outline" },
  //   { id: 4, name: "Single Bed", iconName: "bed-queen-outline" },
  //   { id: 5, name: "Bed", iconName: "bunk-bed-outline" },
  //   { id: 6, name: "Bed", iconName: "bed-queen-outline" },
  // ];
  return (
    <View style={styles.container}>
      <SimpleLineIcons
        name="options-vertical"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Catalog")}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
        data={furniture_cat}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Category {...props} item={item} />}
      />
    </View>
  );
}

export default CatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});
