import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Platform, Text } from "react-native";
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

const headerLeftMenu = navigation => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title="menu"
        iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
        onPress={() => navigation.toggleDrawer()}
      ></Item>
    </HeaderButtons>
  )
});

const stackConfigOptions = {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        fontFamily: "open-sans"
      },
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
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({ navigation }) => headerLeftMenu(navigation)
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  stackConfigOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: ({ navigation }) => headerLeftMenu(navigation)
    },
    MealDetail: MealDetailScreen
  },
  stackConfigOptions
);

const FilterNavigator = createStackNavigator(
  {
    Filter: {
      screen: FiltersScreen,
      navigationOptions: ({ navigation }) => headerLeftMenu(navigation)
    }
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
      tabBarColor: Color.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
        ) : (
          "Meals"
        )
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
      activeTintColor: Color.accent,
      labelStyle: {
        fontFamily: "open-sans"
      }
    }
  }),
  android: createMaterialBottomTabNavigator(tabConfig, {
    activeColor: "white",
    shifting: true,
    barStyle: {
      backgroundColor: Color.primary,
      fontFamily: "open-sans"
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
