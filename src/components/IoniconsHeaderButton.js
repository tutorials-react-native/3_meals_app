import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Color from "constants/colors";

const IoniconsHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      size={30}
      color={Platform.OS === "ios" ? Color.primary : "white"}
    ></HeaderButton>
  );
};

export default IoniconsHeaderButton;
