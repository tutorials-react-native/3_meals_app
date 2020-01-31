import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "data/dummy-data";
import { MealItem } from "components";

const selectCategory = navigation => {
  const categoryId = navigation.getParam("categoryId");
  return CATEGORIES.find(category => category.id === categoryId);
};

const CategoryMealsScreen = ({ navigation }) => {
  const selectedCategory = selectCategory(navigation);
  const meals = MEALS.filter(
    meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0
  );

  const renderMeals = itemData => {
    const {
      title,
      complexity,
      duration,
      affordability,
      imageUrl
    } = itemData.item;
    return (
      <MealItem
        title={title}
        complexity={complexity}
        duration={duration}
        affordability={affordability}
        imageUrl={imageUrl}
        onSelectMeal={() => {}}
      />
    );
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

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory = selectCategory(navigation);
  return {
    headerTitle: selectedCategory.title
  };
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

export default CategoryMealsScreen;
