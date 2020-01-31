import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "data/dummy-data";
import { IoniconsHeaderButton } from "components";

const getSelectedMeal = navigation => {
  const mealId = navigation.getParam("mealId");
  return MEALS.find(meal => meal.id === mealId);
};

const MealDetailScreen = ({ navigation }) => {
  const selectedMeal = getSelectedMeal(navigation);
  const { title } = selectedMeal;
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Button
        title="Go to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const selectedMeal = getSelectedMeal(navigation);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="start"
          iconName="ios-star"
          onPress={() => console.log("star!")}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealDetailScreen;
