import React, { useEffect, useState } from "react";
import { StyleSheet, Image, FlatList, View, Button } from "react-native";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: "100%", height: 200 }}
            />
          </View>
        )}
      />
      <Button
        title="Go to map"
        onPress={() => navigation.navigate("Map")}
      ></Button>
      <Button
        title="Go to comments"
        onPress={() => navigation.navigate("Comments")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "#ecf0f1",
  },
});

export default DefaultPostsScreen;
