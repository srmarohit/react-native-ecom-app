import { StyleSheet } from "react-native";
import pt, { height, width } from "../../const/units";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },

  header: {
    height: 275 * pt,
    padding: 20 * pt,
    // width: "100%",
    backgroundColor: "whitesmoke",
    //elevation: 10 * pt,
  },

  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    flex: 5,
    marginLeft: 45 * pt,
  },

  orderInfo: {
    padding: 20 * pt,
    marginBottom: 7 * pt,
  },

  orderId: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20 * pt,
  },

  orderTotal: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20 * pt,
    marginVertical: 5 * pt,
  },
  viewDetails: {
    color: "blue",
  },

  prodList: {
    paddingLeft: 10 * pt,
  },

  indicator: {
    height: height - 450 * pt,
    width: width - 30 * pt,
    paddingLeft: 25 * pt,
    marginBottom: 15 * pt,
    //elevation: 5 * pt,
    borderRadius: 20 * pt,
    // backgroundColor: "white",
  },

  lblContainer: {
    marginTop: 30 * pt,
    padding: 10 * pt,
    paddingLeft: 5 * pt,
    width: width - 100 * pt,
  },

  lblText: {
    fontSize: 17 * pt,
    marginTop: 12 * pt,
    color: "black",
    fontWeight: "bold",
  },

  lblStatus: {
    fontSize: 15 * pt,
    color: "gray",
  },
});
