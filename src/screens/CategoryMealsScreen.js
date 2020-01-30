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
    <View style={styles.meals}>
      <FlatList
        keyExtractor={item => item.id}
        data={meals}
        renderItem={renderMeals}
        contentContainerStyle={styles.screen}
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
    alignItems: "center"
  },
  screen: {
    width: 500,
    maxWidth: "90%"
  }
});

export default CategoryMealsScreen;
