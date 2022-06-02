import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useProductStore } from "../../../zustand/products";
import CubeCard from "../cube_cards/CubeCard";
import SquareCard from "../square_cards/SquareCard";

function HorizontalScrollDisplayCard({ card_type, rank, ...props }) {
  // const { best_selling } = useProductStore((state) => state.products);

  const { best_selling } = useSelector(
    (state) => state.prodReducer?.products || {}
  );

  //console.log("Dd   " + JSON.stringify(state.prodReducer._W.products));

  const [popular, setPopular] = useState([]);

  // useEffect(() => {
  //   const popular_products = products?.filter((product) =>
  //     product.rank.includes(rank)
  //   );
  //   setPopular(popular_products || products.slice(0, 5));
  // }, []);

  useEffect(() => {
    setPopular(best_selling?.slice(0, 5));
  }, []);

  const SelectCard = (props) => {
    return card_type == "cube" ? (
      <CubeCard {...props} />
    ) : (
      <SquareCard {...props} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={popular}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SelectCard key={item.id} product={item} {...props} />
        )}
      />
    </View>
  );
}

export default HorizontalScrollDisplayCard;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginBottom: 20,
  },
});
