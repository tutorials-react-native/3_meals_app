import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "CATEGORIES"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: "#ccc"
  }
});

export default CategoriesScreen;
