import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import SvgCameraShot from "../../assets/svg/cameraShot";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(undefined);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    const location = await Location.getCurrentPositionAsync({});
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
  };

  // запрос на предоставление данных локации
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const sendPhoto = () => {
    // console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
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
        <Text style={styles.text}>Take a photo</Text>
      </View>
      <View>
        <TextInput
          placeholder="Name..."
          placeholderTextColor="#BDBDBD"
          style={styles.input}
        />
        <TextInput
          placeholder="Location"
          placeholderTextColor="#BDBDBD"
          style={styles.input}
        />
      </View>
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
  input: {
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  text: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
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
