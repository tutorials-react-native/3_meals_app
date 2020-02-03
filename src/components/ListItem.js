import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ style, children }) => {
  return <Text style={{ ...style, ...styles.item }}>{children}</Text>;
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});

export default ListItem;
