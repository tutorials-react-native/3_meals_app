import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen
} from "screens";
import Color from "constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: { screen: MealDetailScreen }
  },
  {
    defaultNavigationOptions: {
      ...Platform.select({
        ios: {
          headerTintColor: Color.primary
        },
        android: {
          headerStyle: {
            backgroundColor: Color.primary
          },
          headerTintColor: "white"
        }
      })
    }
  }
);

const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primary
    }
  },
  Favorite: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.accent
    }
  }
};

const MealfavNavigator = Platform.select({
  ios: createBottomTabNavigator(tabConfig, {
    tabBarOptions: {
      activeTintColor: Color.accent
    }
  }),
  android: createMaterialBottomTabNavigator(tabConfig, {
    activeColor: "white",
    shifting: false,
    barStyle: {
      backgroundColor: Color.primary
    }
  })
});

export default createAppContainer(MealfavNavigator);
