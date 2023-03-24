// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focused, setFocused] = useState("");
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    if (!isShowKeyboard) {
      return;
    }
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.wrapper,
                paddingBottom: !isShowKeyboard ? 65 : 32,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                  placeholder="Email address"
                  placeholderTextColor={"#BDBDBD"}
                  style={{
                    ...styles.input,
                    borderColor: focused === "email" ? "#FF6C00" : "#E8E8E8",
                    backgroundColor:
                      focused === "email" ? "#FFFFFF" : "#F6F6F6",
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setFocused("email");
                  }}
                  onBlur={() => setFocused("")}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                  style={{
                    ...styles.input,
                    borderColor: focused === "password" ? "#FF6C00" : "#E8E8E8",
                    backgroundColor:
                      focused === "password" ? "#FFFFFF" : "#F6F6F6",
                  }}
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setFocused("password");
                  }}
                  onBlur={() => setFocused("")}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                {!isShowKeyboard && (
                  <TouchableOpacity
                    onPress={handleSubmit}
                    activeOpacity={0.7}
                    style={styles.btn}
                  >
                    <Text style={styles.btnText}>Sign In</Text>
                  </TouchableOpacity>
                )}
              </View>
              {!isShowKeyboard && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("register")}
                >
                  <Text style={styles.signinText}>
                    Don't have an account? Register
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrapper: {
    justifyContent: "center",
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  form: {
    marginHorizontal: 16,
  },
  title: {
    marginBottom: 32,
    alignSelf: "center",
    fontFamily: "Roboto-Regular",
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  signinText: {
    alignSelf: "center",
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 35,
    color: "#1B4371",
  },
});
