import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import SquareCard from "../square_cards/SquareCard";

export default function ListOfCards(props) {
  const { products } = useSelector((state) => state.prodReducer);
  const [top_products, setTopProducts] = useState([]);

  useEffect(() => {
    // console.log({ info: props.searchText, top_products });
    let filt_products = [];
    if (props.searchText) {
      filt_products = products?.filter((product) =>
        product.name.includes(props.searchText)
      );
    } else if (props.selectedCat !== "all") {
      filt_products = products?.filter((product) =>
        product.cat.includes(props.selectedCat)
      );
    }

    // console.log({
    //   info: props.searchText,
    //   cat: props.selectedCat,
    //   filt_products,
    // });

    if (filt_products && filt_products.length) {
      setTopProducts(filt_products);
    } else {
      setTopProducts(products.slice(0, 6) || []);
    }
  }, [props.searchText, props.selectedCat]);

  return (
    <View style={styles.container}>
      {top_products?.map((furniture) => (
        <SquareCard key={furniture.id} furniture={furniture} {...props} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: -20,
    marginVertical: -10,
    marginBottom: 10,
  },
});
