import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "data/dummy-data";
import { MealsList } from "components";

const selectCategory = navigation => {
  const categoryId = navigation.getParam("categoryId");
  return CATEGORIES.find(category => category.id === categoryId);
};

const CategoryMealsScreen = ({ navigation }) => {
  const selectedCategory = selectCategory(navigation);
  const meals = MEALS.filter(
    meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0
  );

  return <MealsList meals={meals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory = selectCategory(navigation);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
