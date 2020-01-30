import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "data/dummy-data";

const selectCategory = navigation => {
  const categoryId = navigation.getParam("categoryId");
  return CATEGORIES.find(category => category.id === categoryId);
};

const CategoryMealsScreen = ({ navigation }) => {
  const selectedCategory = selectCategory(navigation);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate({ routeName: "MealDetail" });
        }}
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
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealsScreen;
