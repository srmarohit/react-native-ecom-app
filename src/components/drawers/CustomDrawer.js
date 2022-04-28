import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo";
function CustomDrawer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          style={{ padding: 20, marginTop: -20 }}
          source={require("../../../assets/coffee.jpg")}
        >
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1453614512568-c4024d13c247",
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 21, color: "#fff", fontWeight: "bold" }}>
            Rohit Sharma
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "#fff", marginEnd: 10 }}>
              240 Coins
            </Text>
            <FontAwesome5 name="coins" color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity>
          <View
            style={{
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="share-social-outline" size={17} />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 7,
              }}
            >
              Share it
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="exit-outline" size={17} />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 7,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default CustomDrawer;
