import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { IoniconsHeaderButton } from "components";

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen,
  FiltersScreen
} from "screens";
import Color from "constants/colors";

const stackConfigOptions = {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            onPress={() => navigation.toggleDrawer()}
          ></Item>
        </HeaderButtons>
      ),
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
    };
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: { screen: MealDetailScreen }
  },
  stackConfigOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  stackConfigOptions
);

const FilterNavigator = createStackNavigator(
  {
    Filter: FiltersScreen
  },
  stackConfigOptions
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
    screen: FavNavigator,
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
    shifting: true,
    barStyle: {
      backgroundColor: Color.primary
    }
  })
});

const MainDrawerNavigator = createDrawerNavigator(
  {
    MealsFav: MealfavNavigator,
    Filter: FilterNavigator
  },
  {
    contentOptions: {
      activeTintColor: Color.accent,
      labelStyle: {
        fontFamily: "open-sans-bold"
      },
      itemStyle: {
        justifyContent: "center"
      },

      itemsContainerStyle: {}
    }
  }
);

export default createAppContainer(MainDrawerNavigator);
