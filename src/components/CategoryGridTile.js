import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const CategoryGridTile = ({ itemData, onSelect }) => {
  const { color, title } = itemData.item;

  const Touchable = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback
  });
  return (
    <View style={styles.gridItem}>
      <Touchable
        style={styles.touchable}
        onPress={onSelect.bind(this, itemData)}
      >
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 10
  },
  touchable: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 18,
    borderRadius: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right"
  }
});

export default CategoryGridTile;
