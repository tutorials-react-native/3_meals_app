import React from "react";
import { View, Text, StyleSheet, Platform, Switch } from "react-native";

import Color from "constants/colors";

const FilterSwitch = ({ label, value, setValue }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={newValue => setValue(newValue)}
        trackColor={{ true: Color.primary }}
        thumbColor={Platform.OS === "android" ? Color.primary : ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
    width: "80%"
  }
});

export default FilterSwitch;
