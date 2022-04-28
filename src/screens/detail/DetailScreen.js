import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddToCart from "../../components/add-to-cart/AddToCart";
import Details from "../../components/details/Details";
import SecondaryHeader from "../../components/headers/SecondaryHeader";
import ImgCard from "../../components/image-overlay/ImgCard";
import { styles } from "./DetailStyle";
export default function DetailScreen({ navigation, route }) {
  //console.log(props);
  const furniture = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <SecondaryHeader navigation={navigation} title="Details" />
      <ImgCard furniture={furniture} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailsContainer}>
          <Details furniture={furniture} />
          <AddToCart furniture={furniture} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
