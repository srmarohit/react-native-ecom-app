import React, { useRef, useState } from "react";
import { Animated, FlatList, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { furniture_cat } from "../../const/furniture_data";
import ListOfCards from "../../components/cards/DisplayCards/ListOfCards";

function CatScreen(props) {
  const [cat, setCat] = useState("Categories");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const showCat = (item) => (
    <TouchableOpacity
      key={item.id}
      style={{
        justifyContent: "center",
        marginVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={item.iconName}
        color={cat == item.name ? "orange" : "#eee"}
        size={30}
      />
      <Text
        onPress={() => {
          setCat(item.name);
        }}
        style={{
          color: cat == item.name ? "orange" : "#eee",
          fontWeight: "500",
          fontSize: 15,
          marginTop: 10,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#004",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <FlatList
        data={furniture_cat}
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => showCat(item)}
      />

      {/** Overlay Screen */}
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // menu button
        }

        <Animated.View
          style={{
            paddingBottom: 20,
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              onPress={() => {
                // console.log("dd");
                // Do Actions Here....
                // Scaling the Text...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.95,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 70,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}
            >
              <FontAwesome5Icon
                name={!showMenu ? "bars" : "window-close"}
                size={20}
              />
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "700", marginStart: 80 }}>
              {cat}
            </Text>
          </View>

          {/* {// Content of Products } */}
          <ScrollView>
            <ListOfCards {...props} />
            <ListOfCards {...props} />
            <ListOfCards {...props} />
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

export default CatScreen;
