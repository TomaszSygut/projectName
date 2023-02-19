import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/Chat";
import LoginScreen from "./screens/Login";
import useAuth from "./hooks/useAuth";
import type { ParamListBase } from "@react-navigation/native";

export type AppParamList = {
  Home: ParamListBase;
  Chat: ParamListBase;
  Login: ParamListBase;
};

type Pages = "Home" | "Chat" | "Login";

export type IntroScreenNavigationProp = NativeStackNavigationProp<
  AppParamList,
  Pages
>;

const Stack = createNativeStackNavigator<AppParamList>();

const StackNavigator = () => {
  const context = useAuth();
  return (
    <Stack.Navigator>
      {context?.data ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
