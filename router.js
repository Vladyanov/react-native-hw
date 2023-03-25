import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TouchableOpacity, Image } from "react-native";

import RegisterScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/MainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/MainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/MainScreen/ProfileScreen";
import HomeScreen from "./Screens/MainScreen/Home";

//import icons
import SvgPosts from "./assets/svg/postsIcon";
import SvgCreate from "./assets/svg/createIcon";
import SvgProfile from "./assets/svg/profileIcon";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="register"
          component={RegisterScreen}
        />
        {/* Home screen  */}
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              //   onPress={() => navigation.navigate("login")}
            >
              <Image
                source={require("./assets/logout.jpg")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color, size }) => (
            <SvgPosts color={color} size={size} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <SvgCreate color={color} size={size} />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <SvgProfile color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      ></MainTab.Screen>
    </MainTab.Navigator>
  );
};
