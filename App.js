import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Demo from "./src/components/Demo";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/state/store";
import { background } from "./src/constants/color";

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
    },
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <View style={{backgroundColor:background}}>
            <RegisterScreen />
          </View>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
