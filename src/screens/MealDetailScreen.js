import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen Screen!</Text>
      <Button
        title="Go to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealDetailScreen;
