import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { DefaultText } from "components/Text";

const MealItem = ({ itemData, onSelectMeal }) => {
  const {
    title,
    complexity,
    duration,
    affordability,
    imageUrl
  } = itemData.item;
  return (
    <View style={styles.shadow}>
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal.bind(this, itemData)}>
          <View>
            <View style={styles.header}>
              <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{title}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.information}>
              <DefaultText style={styles.infoText}>
                {complexity.toUpperCase()}
              </DefaultText>
              <DefaultText style={styles.infoText}>{duration}m</DefaultText>
              <DefaultText style={styles.infoText}>
                {affordability.toUpperCase()}
              </DefaultText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    margin: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.26
  },
  mealItem: {
    width: "100%",
    height: 200,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10 //왠지 shadow 에 넣으면 안되고 여기  넣어야 android 에 제대로 적용이 된다.
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    color: "white",
    textAlign: "center",

    fontFamily: "open-sans-bold"
  },
  header: {
    height: "85%"
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    paddingHorizontal: 10
  },
  infoText: {
    fontFamily: "open-sans"
  }
});

export default MealItem;
