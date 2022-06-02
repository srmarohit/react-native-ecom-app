import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { width } from "../../const/units";
import { login, logout, signup } from "../../redux/user/action";

function Auth({ navigation }) {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const loginOpt = {
    email,
    setEmail,
    password,
    setPassword,
    dispatch,
  };

  const signupOpt = {
    name,
    setName,
    mobile,
    setMobile,
    email,
    setEmail,
    password,
    setPassword,
    dispatch,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 35,
            paddingVertical: 15,
            fontSize: 15,
            fontWeight: "bold",
            backgroundColor: toggle ? "black" : "gray",
            color: toggle ? "white" : "black",
            borderRadius: 15,
            marginRight: 20,
          }}
          onPress={() => setToggle(true)}
        >
          Login
        </Text>
        <Text
          style={{
            paddingHorizontal: 35,
            paddingVertical: 15,
            fontSize: 15,
            fontWeight: "bold",
            backgroundColor: !toggle ? "black" : "gray",
            color: !toggle ? "white" : "black",
            borderRadius: 15,
          }}
          onPress={() => setToggle(false)}
        >
          SignUp
        </Text>
      </View>
      {toggle ? <Login {...loginOpt} /> : <Signup {...signupOpt} />}

      <Text
        style={{
          position: "absolute",
          bottom: 5,
          left: "5%",
          fontSize: 25,
          color: "#ccc",
          borderBottomWidth: 1,
          borderColor: "#ccc",
          elevation: 1,
          paddingVertical: 5,
          paddingHorizontal: 20,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        skip
      </Text>
    </View>
  );
}

export default Auth;

export const Login = ({ email, password, setEmail, setPassword, dispatch }) => {
  return (
    <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="enter email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            width: width / 1.25,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            paddingHorizontal: 25,
          }}
        />
        <FontAwesome5
          name="user-alt"
          style={{ position: "absolute", right: 20, top: "25%" }}
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            width: width / 1.25,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            paddingHorizontal: 25,
          }}
        />
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 20, top: "25%" }}
          name="lastpass"
          size={24}
          color="black"
        />
      </View>
      <Text
        style={{
          backgroundColor: "white",
          color: "black",
          paddingHorizontal: 20,
          paddingVertical: 15,
          width: width / 1.3,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          borderRadius: 15,
        }}
        onPress={() => dispatch(login({ email, password }))}
      >
        Login
      </Text>
    </View>
  );
};

export const Signup = ({
  name,
  setName,
  mobile,
  setMobile,
  email,
  setEmail,
  password,
  setPassword,
  dispatch,
}) => {
  return (
    <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="Enter Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{
            width: width / 1.25,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            paddingHorizontal: 25,
          }}
        />
        <FontAwesome5
          name="user"
          style={{ position: "absolute", right: 20, top: "25%" }}
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="Enter Mobile"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          style={{
            width: width / 1.25,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            paddingHorizontal: 25,
          }}
        />
        <FontAwesome5
          name="phone"
          style={{ position: "absolute", right: 20, top: "25%" }}
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="enter email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            width: width / 1.25,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            paddingHorizontal: 25,
          }}
        />
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 20, top: "25%" }}
          name="email-variant"
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            width: width / 1.25,
            height: 50,
            borderBottomColor: "#ccc",
            borderBottomWidth: 2,
            paddingHorizontal: 25,
          }}
        />
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 20, top: "25%" }}
          name="lastpass"
          size={24}
          color="black"
        />
      </View>
      <Text
        style={{
          backgroundColor: "white",
          color: "black",
          paddingHorizontal: 20,
          paddingVertical: 15,
          width: width / 1.3,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          borderRadius: 15,
        }}
        onPress={() => {
          dispatch(signup({ name, email, password, mobile }));
          setName("");
          setEmail("");
          setPassword("");
          setMobile("");
        }}
      >
        SignUp
      </Text>
    </View>
  );
};
