import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../NestedScreen/DefaultScreenPosts";
import MapScreen from "../NestedScreen/MapScreen";
import CommentsScreen from "../NestedScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
