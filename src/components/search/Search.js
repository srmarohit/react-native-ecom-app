import * as React from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import COLORS from "../../const/colors";

import styles from "./searchStyle";

export default function Search({ searchProps: { searchText, setSearchText } }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="ios-search-outline" size={24} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Search your furniture"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={styles.filter}>
        <Fontisto name="filter" size={24} color="black" />
      </View>
    </View>
  );
}
