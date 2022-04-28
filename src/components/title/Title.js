import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Title({ title, width }) {
  return (
    <View style={{ ...styles.container, width }}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginVertical: 15,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 30,
    paddingHorizontal: 20,
  },
});
