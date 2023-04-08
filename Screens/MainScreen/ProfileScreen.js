import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
// import { useDispatch } from "react-redux";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const IDRef = collection(db, "posts");

  const getUserPosts = async () => {
    try {
      const q = await query(IDRef, where("userId", "==", userId));
      onSnapshot(q, (data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userPosts}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

export default ProfileScreen;
