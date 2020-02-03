import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "data/dummy-data";
import { MealsList } from "components";
import { DefaultText } from "components/Text";
import { selectors } from "store";

const selectCategory = navigation => {
  const categoryId = navigation.getParam("categoryId");
  return CATEGORIES.find(category => category.id === categoryId);
};

const CategoryMealsScreen = ({ navigation }) => {
  const filteredMeals = useSelector(selectors.meals.getFilteredMeals);
  const selectedCategory = selectCategory(navigation);
  const meals = filteredMeals.filter(
    meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0
  );

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals here or All filtered out.</DefaultText>
      </View>
    );
  }

  return <MealsList meals={meals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory = selectCategory(navigation);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
