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

// import React, { useEffect, useState } from "react";
// import { StyleSheet, Image, FlatList, View } from "react-native";

// const PostsScreen = ({ route }) => {
//   const [posts, setPosts] = useState([]);
//   console.log("route.params", route.params);

//   useEffect(() => {
//     if (route.params) {
//       setPosts((prevState) => [...prevState, route.params]);
//     }
//   }, [route.params]);
//   console.log("posts", posts);
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               marginBottom: 5,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               source={{ uri: item.photo }}
//               style={{ width: "100%", height: 200 }}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: "center",
//     marginHorizontal: 16,
//     backgroundColor: "#ecf0f1",
//   },
// });

// export default PostsScreen;
