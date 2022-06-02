import { Alert } from "react-native";
import { LOG_IN, LOG_OUT, SIGN_UP } from "./action";

const initialState = {
  users: [{ name: "Rohit", email: "a", mobile: "11", password: "a" }],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      const { name, email, password, mobile } = action.payload;
      if (!email || !password || !name || !mobile) {
        Alert.alert("Error", "Enter Required Fields", [
          {
            text: "Ok",
            style: "cancel",
          },
        ]);

        return state;
      }

      // validate credential

      //show success message
      Alert.alert(
        "Congratulation !",
        "Your Account is created Successfully..!",
        [
          {
            text: "Ok",
            style: "cancel",
          },
        ]
      );

      return {
        ...state,
        users: [...state.users, { name, mobile, email, password }],
      };
    }

    case LOG_IN: {
      const { email, password } = action.payload;
      if (!email || !password) {
        Alert.alert("Error", "Enter Required Credential", [
          {
            text: "Ok",
            style: "cancel",
          },
        ]);

        return state;
      }

      // validate login with static credential

      let user = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        return {
          ...state,
          user: { email, password },
        };
      }

      Alert.alert("Error", "Invalid Credential", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);

      return state;
    }

    case LOG_OUT: {
      console.log("logout");
      return {
        ...state,
        user: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
