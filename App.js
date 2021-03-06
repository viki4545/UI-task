import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Login" component={LoginScreen}/>
              </Stack.Navigator>
            </NavigationContainer>
          );
}
