import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import SvgCameraShot from "../../assets/svg/cameraShot";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("Posts", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              style={{
                height: 90,
                width: 150,
                borderRadius: 8,
              }}
              source={{ uri: photo }}
            ></Image>
          </View>
        )}
        <TouchableOpacity onPress={takePhoto}>
          <SvgCameraShot></SvgCameraShot>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity
          onPress={sendPhoto}
          activeOpacity={0.7}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
    // alignItems: "center",
  },
  camera: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    marginTop: 32,
    borderRadius: 8,
  },
  cameraShotIcon: {
    alignSelf: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
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
});

export default CreatePostsScreen;
