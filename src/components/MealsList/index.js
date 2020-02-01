import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ meals, navigation }) => {
  const selectMealHandler = itemData => {
    navigation.navigate({
      routeName: "MealDetail",
      params: { mealId: itemData.item.id }
    });
  };

  const renderMeals = itemData => {
    return <MealItem itemData={itemData} onSelectMeal={selectMealHandler} />;
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={item => item.id}
        data={meals}
        renderItem={renderMeals}
        style={styles.meals}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  meals: {
    width: "100%"
  },
  screen: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealsList;
