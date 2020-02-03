import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";
import { selectors } from "store";

const MealsList = ({ meals, navigation }) => {
  const favoriteMeals = useSelector(selectors.meals.getFavorites);

  const selectMealHandler = itemData => {
    const isFav = favoriteMeals.some(meal => meal.id === itemData.item.id);
    navigation.navigate({
      routeName: "MealDetail",
      params: {
        mealId: itemData.item.id,
        mealTitle: itemData.item.title,
        isFav
      }
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
