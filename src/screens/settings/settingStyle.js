import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 15,
    backgroundColor: "white",
  },

  card: {
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: "gray",
    alignItems: "center",
  },

  title: {
    marginLeft: 10,
    fontSize: 18,
  },

  arrowIcon: {
    marginLeft: "auto",
  },
});
