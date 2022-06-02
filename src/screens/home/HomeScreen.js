import * as React from "react";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalScrollDisplayCard from "../../components/cards/DisplayCards/HorizontalScrollDisplayCard";
import ListOfCards from "../../components/cards/DisplayCards/ListOfCards";
import CatList from "../../components/categories/CatList";
import PrimaryHeader from "../../components/headers/PrimaryHeader";
import Search from "../../components/search/Search";
import Title from "../../components/title/Title";
import { styles } from "./HomeStyles";

export default function HomeScreen(props) {
  // create select category state hooks
  const [selectedCat, setSelectedCat] = useState(""); // initially id has value 0

  // set Search Text
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/** Header Container */}
      <PrimaryHeader {...props} />
      {/** HomeScreen Container */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Best Furniture for your Home. </Text>

        {/** Search Container */}
        <Search searchProps={{ searchText, setSearchText }} />

        {/** Display Categories */}
        <CatList
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          navigation={props.navigation}
        />

        <Title title="Top Furnitures" />

        {/** Display List Card */}
        <ListOfCards
          {...props}
          searchText={searchText}
          selectedCat={selectedCat}
        />

        <Title title="Best Selling Furnitures" width="80%" />
        <HorizontalScrollDisplayCard
          card_type="cube"
          rank="best selling"
          {...props}
        />

        <Title title="Popular Products" />
        <HorizontalScrollDisplayCard rank="popular" {...props} />
      </ScrollView>
    </SafeAreaView>
  );
}
