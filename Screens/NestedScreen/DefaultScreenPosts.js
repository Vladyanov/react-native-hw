import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import SvgMap from "../../assets/svg/mapIcon";
import SvgComments from "../../assets/svg/messageIcon";

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
            <View style={styles.wrapper}>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Comments")}
              >
                <View style={{ flexDirection: "row" }}>
                  <SvgComments size={40} />
                  <Text>0</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Map")}
              >
                <View style={{ flexDirection: "row" }}>
                  <SvgMap size={40} />
                  <Text>Location</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "#ecf0f1",
  },
  wrapper: {
    flexDirection: "row",

    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,

    width: "100%",
    justifyContent: "space-between",
  },
});

export default DefaultPostsScreen;
