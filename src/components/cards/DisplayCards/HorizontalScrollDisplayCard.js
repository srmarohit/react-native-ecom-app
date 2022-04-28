import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { furnitures } from "../../../const/furniture_data";
import CubeCard from "../cube_cards/CubeCard";
import SquareCard from "../square_cards/SquareCard";

function HorizontalScrollDisplayCard({ card_type, rank, ...props }) {
  const { products } = useSelector((state) => state.prodReducer);

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const popular_products = products?.filter((product) =>
      product.rank.includes(rank)
    );
    setPopular(popular_products || products.slice(0, 5));
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
          <SelectCard key={item.id} furniture={item} {...props} />
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
