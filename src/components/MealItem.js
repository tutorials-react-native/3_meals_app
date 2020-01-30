import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = ({
  title,
  complexity,
  duration,
  affordability,
  imageUrl,
  onSelectMeal
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
          </View>
          <View style={styles.information}>
            <Text style={styles.infoText}>{duration}m</Text>
            <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontFamily: "open-sans-bold"
  },
  header: {
    height: "85%"
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "15%"
  },
  infoText: {
    fontFamily: "open-sans"
  }
});

export default MealItem;
