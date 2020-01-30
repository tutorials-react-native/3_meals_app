import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen
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

export default createAppContainer(MealsNavigator);
