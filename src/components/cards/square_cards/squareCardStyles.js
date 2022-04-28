import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height: 190 * pt,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20 * pt,
    padding: 10 * pt,
    marginVertical: 10 * pt,
    borderRadius: 10 * pt,
  },

  icon: {
    height: 30 * pt,
    width: 30 * pt,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    position: "absolute",
    elevation: 1,
    right: 15 * pt,
    top: 15 * pt,
    borderRadius: 20 * pt,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 120 * pt,
    width: "100%",
    borderRadius: 10 * pt,
  },

  title: {
    marginTop: 10 * pt,
    fontSize: 13 * pt,
    color: COLORS.primary,
    fontWeight: "bold",
  },

  info: {
    marginTop: 5 * pt,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  price: {
    fontWeight: "bold",
    fontSize: 12 * pt,
    color: COLORS.primary,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  ratingNumber: {
    fontSize: 15 * pt,
    fontWeight: "bold",
    color: COLORS.primary,
    marginLeft: 5 * pt,
  },
});

export default styles;
