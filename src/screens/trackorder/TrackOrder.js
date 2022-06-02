import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StepIndicator from "react-native-step-indicator";
import { useSelector } from "react-redux";
import CubeCard from "../../components/cards/cube_cards/CubeCard";
import { furnitures } from "../../const/furniture_data";
import { useProductStore } from "../../zustand/products";
import { styles } from "./TrackOrderStyle";

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 15,
  currentStepLabelColor: "#fe7013",
};
const labels = ["Placed", "Prepared", "Out for Delivery", "Delivered"];

const data = [
  {
    label: "Placed",
    status: "Your Order is placed Successfully !",
    date: " 24 Nov 2021, 12:34:22 PM",
  },
  {
    label: "Prepared",
    status: "Your Order is Prepared  !",
    date: " 02 Jan 2022, 12:34:22 PM",
  },
  {
    label: "Out for Delivery",
    status: "Your Order is out for delivery !",
    date: " 24 Nov 2021, 12:34:22 PM",
  },
  {
    label: "Delivered",
    status: "Your Order is about to Deliver  !",
    date: " 24 Nov 2021, 12:34:22 PM",
  },
];

export default function TrackOrderScreen({ navigation }) {
  //const { best_selling } = useProductStore((state) => state.products);

  const [currentPosition, setCurrentPostion] = useState(2);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerTitle} onPress={() => console.log("rr")}>
            <Feather
              name="chevron-left"
              size={24}
              color="black"
              style={{ flex: 1 }}
              onPress={() => console.log("qq")}
            />
            <Text style={styles.headerText} onPress={() => console.log("ss")}>
              Order Summary
            </Text>
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.orderId}>Order Id : 712345456789</Text>
            <Text style={styles.orderTotal}>Total : $885.55</Text>
            <Text style={styles.viewDetails}>View Details</Text>
          </View>
          <View style={styles.prodList}>
            {/* <FlatList
              data={best_selling.slice(0, 6)}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CubeCard key={item.id} product={item} />
              )}
            /> */}
          </View>
        </View>

        <View style={styles.indicator}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            stepCount={4}
            direction="vertical"
            renderLabel={({ position, label, stepStatus, currentPosition }) => {
              //console.log(position, label, stepStatus, currentPosition);
              return (
                <View style={styles.lblContainer}>
                  <Text style={styles.lblText}>{data[position]?.label}</Text>
                  <Text style={{ ...styles.lblStatus, marginTop: 5 }}>
                    {data[position]?.status}
                  </Text>
                  <Text style={styles.lblStatus}>{data[position]?.date}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
