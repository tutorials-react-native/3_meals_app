import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DefaultText = ({ style, children }) => {
  return <Text style={{ ...style, ...styles.text }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans"
  }
});

export default DefaultText;
