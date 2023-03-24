import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import SvgPosts from "../../assets/svg/postsIcon";
import SvgCreate from "../../assets/svg/createIcon";
import SvgProfile from "../../assets/svg/profileIcon";

const Tabs = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          title: "Publications",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("login")}
            >
              <Image
                source={require("../../assets/logout.jpg")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color, size }) => (
            <SvgPosts color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          title: "Create new publication",
          tabBarIcon: ({ color, size }) => (
            <SvgCreate color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <SvgProfile color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default HomeScreen;
