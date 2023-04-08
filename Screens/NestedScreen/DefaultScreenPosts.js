import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

import SvgMap from "../../assets/svg/mapIcon";
import SvgComments from "../../assets/svg/messageIcon";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    try {
      onSnapshot(collection(db, "posts"), (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

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
            <View style={styles.commentWrapper}>
              <Text style={styles.comment}>{item.comment}</Text>
            </View>
            <View style={styles.wrapper}>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() =>
                  navigation.navigate("Comments", { postId: item.id })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <SvgComments size={40} />
                  <Text>Comments</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() =>
                  navigation.navigate("Map", { location: item.location })
                }
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
  commentWrapper: {
    width: "100%",
    padding: 5,
    textAlign: "left",
  },
  comment: {
    fontWeight: "bold",
  },
});

export default DefaultPostsScreen;
