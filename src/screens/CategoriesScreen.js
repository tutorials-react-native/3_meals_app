import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "data/dummy-data";
import { CategoryGridTile } from "components";

const CategoriesScreen = ({ navigation }) => {
  const selectHandler = itemData => {
    navigation.navigate({
      routeName: "CategoryMeals",
      params: {
        categoryId: itemData.item.id
      }
    });
  };
  return (
    <FlatList
      numColumns={2}
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={itemData => (
        <CategoryGridTile itemData={itemData} onSelect={selectHandler} />
      )}
    />
  );
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "CATEGORIES"
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoriesScreen;
