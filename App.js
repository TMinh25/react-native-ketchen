import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-native-paper";
import { theme } from "./src/core/theme";
import FoodRecipeScreen from "./src/screens/FoodRecipeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { Button as PaperButton } from "react-native-paper";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route, navigation }) => ({
            title: route.params?.title || "Home",
            headerStyle: { backgroundColor: theme.colors.primary },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
            headerRight: () => (
              <PaperButton
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Home" }],
                  })
                }
                icon="home"
                color="white"
                compact
              />
            ),
          })}
        >
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="FoodRecipe" component={FoodRecipeScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
