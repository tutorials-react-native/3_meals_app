import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import { FilterSwitch, IoniconsHeaderButton } from "components";
import { actions } from "store";

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsglutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const filters = {
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree
    };

    dispatch(actions.filterMeals(filters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        value={isGlutenFree}
        setValue={setIsglutenFree}
        label={"Gluten Free"}
      />
      <FilterSwitch
        value={isLactoseFree}
        setValue={setIsLactoseFree}
        label={"LactoseFree"}
      />
      <FilterSwitch value={isVegan} setValue={setIsVegan} label={"Vegan"} />
      <FilterSwitch
        value={isVegetarian}
        setValue={setIsVegetarian}
        label={"Vegetarian"}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title="save"
        iconName={Platform.OS === "ios" ? "ios-save" : "md-save"}
        onPress={navigation.getParam("save")}
      ></Item>
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginVertical: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    textAlign: "center",
    margin: 10
  }
});

export default FiltersScreen;
