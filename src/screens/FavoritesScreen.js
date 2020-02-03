import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "data/dummy-data";
import { MealsList } from "components";
import { selectors } from "store";

const CategoryMealsScreen = ({ navigation }) => {
  const favMeals = useSelector(selectors.meals.getFavorites);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return <MealsList meals={favMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = {
  headerTitle: "Your Favorites"
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
