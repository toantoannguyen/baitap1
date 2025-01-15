import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  square: {
    width: 200, // Width of the square
    height: 200, // Height of the square
    backgroundColor: "rgb(0, 123, 255)", // Background color of the square (RGB format)
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Optional rounded corners
  },
  text: {
    color: "#fff", // Text color
    fontSize: 18, // Font size
    fontWeight: "bold", // Optional bold text
  },
});
