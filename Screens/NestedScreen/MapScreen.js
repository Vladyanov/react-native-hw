import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.4226711,
          longitude: -122.0849872,
          latitudeDelta: 0.001,
          longitudeDelta: 0.06,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.4226711, longitude: -122.0849872 }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
});

export default MapScreen;
