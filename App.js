import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/state/store";
import { background, orange } from "./src/constants/color";
import RootNavigator from "./src/navigation";

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 1,
    colors: {
      ...DefaultTheme.colors,
      primary: orange,
      accent: "#f1c40f",
    },

  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
          <RootNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
