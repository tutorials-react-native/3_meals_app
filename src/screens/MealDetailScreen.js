import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { IoniconsHeaderButton, ListItem } from "components";
import { DefaultText } from "components/Text";
import { List } from "react-native-paper";
import { selectors, actions } from "store";

const getSelectedMeal = navigation => {
  const meals = useSelector(selectors.meals.getMeals);
  const mealId = navigation.getParam("mealId");
  const selectedMeal = meals.find(meal => meal.id === mealId);
  return { mealId, selectedMeal };
};

const MealDetailScreen = ({ navigation }) => {
  const { mealId, selectedMeal } = getSelectedMeal(navigation);
  const dispatch = useDispatch();
  const isFav = useSelector(selectors.meals.isFav(mealId));

  const toggleFavHandler = useCallback(() => {
    dispatch(actions.toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    navigation.setParams({ isFav });
  }, [isFav]);

  const {
    title,
    imageUrl,
    complexity,
    duration,
    affordability,
    ingredients,
    steps
  } = selectedMeal;

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.information}>
        <DefaultText style={styles.infoText}>
          {complexity.toUpperCase()}
        </DefaultText>
        <DefaultText style={styles.infoText}>{duration}m</DefaultText>
        <DefaultText style={styles.infoText}>
          {affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>INGREDIENTS</Text>
      {ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>STEPS</Text>
      {steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealTitle = navigation.getParam("mealTitle");
  const toggleFavHandler = navigation.getParam("toggleFavHandler");
  const isFav = navigation.getParam("isFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="start"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavHandler}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20
  }
});

export default MealDetailScreen;
