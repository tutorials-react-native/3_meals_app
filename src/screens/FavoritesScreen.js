import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "data/dummy-data";
import { MealsList } from "components";

// const selectCategory = navigation => {
//   const categoryId = navigation.getParam("categoryId");
//   return CATEGORIES.find(category => category.id === categoryId);
// };

const CategoryMealsScreen = ({ navigation }) => {
  const meals = MEALS.filter(
    meal => ["m1", "m2", "m4", "m5"].findIndex(id => id === meal.id) >= 0
  );

  return <MealsList meals={meals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = {
  headerTitle: "Your Favorites"
};

export default CategoryMealsScreen;
