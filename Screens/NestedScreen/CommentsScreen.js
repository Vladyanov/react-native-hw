import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import { useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

import formatDate from "../../utils/formatDate";
import { SafeAreaView } from "react-navigation";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const { nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllComments();
  }, []);

  const createPost = async () => {
    const date = formatDate(new Date());

    const commentsRef = collection(db, `posts/${postId}/comments`);
    await addDoc(commentsRef, { comment, nickname, date });

    setComment("");
  };

  const getAllComments = async () => {
    const commentsQuery = query(collection(db, `posts/${postId}/comments`));
    onSnapshot(commentsQuery, (data) =>
      setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.SafeAreaView}>
        <FlatList
          data={allComments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <View style={styles.commentWrapper}>
                <Text style={styles.commentText}>{item.comment}</Text>
                <Text style={styles.commentDate}>{item.date}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
      <View>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="#BDBDBD"
          style={styles.input}
          onChangeText={setComment}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={createPost}
          activeOpacity={0.7}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Add Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    marginHorizontal: 15,
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
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

  commentWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    padding: 16,
    marginBottom: 24,
    flex: 1,
  },

  commentText: {
    color: "#212121",
    fontSize: 13,
    lineHeight: 18,
  },

  commentDate: {
    color: "#bdbdbd",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
  },
});

export default CommentsScreen;
