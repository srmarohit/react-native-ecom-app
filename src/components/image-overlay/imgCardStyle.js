import { StyleSheet } from "react-native";
import pt from "../../const/units";

export const styles = StyleSheet.create({
  // Image Background Styling.

  backgroundImg: {
    marginHorizontal: 20 * pt,
    height: 450 * pt,
    borderRadius: 15 * pt,
    overflow: "hidden",
  },

  ratingInfo: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    borderTopLeftRadius: 15 * pt,
    paddingHorizontal: 15 * pt,
    paddingVertical: 15 * pt,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5 * pt,
  },
  ratingText: {
    color: "white",
    fontSize: 15 * pt,
    fontWeight: "bold",
    marginLeft: 5 * pt,
  },
  reviews: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15 * pt,
  },
});
