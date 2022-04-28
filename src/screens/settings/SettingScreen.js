import React from "react";
import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SecondaryHeader from "../../components/headers/SecondaryHeader";
import { styles } from "./settingStyle";

export default function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SecondaryHeader navigation={navigation} title="Settings" />
      <ScrollView>
        <View style={styles.card}>
          <Feather name="user" size={24} color="black" />
          <Text style={styles.title}>Account</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card}>
          <Ionicons
            name="md-notifications-circle-outline"
            size={24}
            color="black"
          />
          <Text style={styles.title}>Notification</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card} onPress={() => console.log("ff")}>
          <Ionicons
            name="md-notifications-circle-outline"
            size={24}
            color="black"
          />
          <Text style={styles.title}>Orders</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card}>
          <FontAwesome name="bullseye" size={24} color="black" />
          <Text style={styles.title}>Apperance</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card}>
          <MaterialIcons name="privacy-tip" size={24} color="black" />
          <Text style={styles.title}>Privacy & Security</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card}>
          <Feather name="help-circle" size={24} color="black" />
          <Text style={styles.title}>Help and Support</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="kaaba" size={24} color="black" />
          <Text style={styles.title}>About</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.card}>
          <AntDesign name="exclamationcircle" size={24} color="black" />
          <Text style={styles.title}>Terms & Conditions</Text>
          <Feather
            style={styles.arrowIcon}
            name="arrow-right"
            size={24}
            color="gray"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
