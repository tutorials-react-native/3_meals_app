import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import { MealsNavigator } from "navigation";
import store from "store/configureStore";

enableScreens();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchData = () => {
    return Fonts.loadAsync({
      "open-sans": require("assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("assets/fonts/OpenSans-Bold.ttf")
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "open-sans"
  }
});
