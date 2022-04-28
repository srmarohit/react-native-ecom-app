import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height: 75 * pt,
    width: width / 1.4,
    padding: 8 * pt,
    marginRight: 10 * pt,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    borderRadius: 10 * pt,
    elevation: 7,
  },

  cart_mode_container: {
    height: 90 * pt,
    width: width / 1.25,
    marginVertical: 15 * pt,
    marginHorizontal: "auto",
    textAlign: "center",
    marginRight: 0,
  },

  icon: {
    position: "absolute",
    left: 10 * pt,
    top: 10 * pt,
    height: 25 * pt,
    width: 20 * pt,
    borderRadius: 20 * pt,
    elevation: 1,
  },

  image: {
    height: "100%",
    width: "45%",
    borderRadius: 10 * pt,
  },

  infoWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 20 * pt,
  },

  title: {
    fontWeight: "bold",
    fontSize: 15 * pt,
  },

  info: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    flex: 1,
    fontSize: 20 * pt,
    fontWeight: "bold",
  },

  rating: {
    fontWeight: "bold",
    fontSize: 18 * pt,
    marginLeft: 5 * pt,
  },
});

export default styles;
