import { StyleSheet, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";
import { Input } from "@rneui/themed";
import { useState } from "react";
import ButtonComponent from "../components/Button";
import LayoutComponent from "../components/Layout";

export default function LoginScreen() {
  const context = useAuth();
  const [login, setLogin] = useState<string | null>(null);

  return (
    <LayoutComponent>
      <Text style={styles.title}>Login Screen</Text>
      <Input
        placeholder="Login"
        onChangeText={(value: string) => setLogin(value)}
      />
      <Input placeholder="Password" secureTextEntry={true} />
      <Text>Forgot Password?</Text>
      <ButtonComponent
        onPress={() => context?.updateUser(login)}
        title="Login"
        type="solid"
      />
      <ButtonComponent
        onPress={() => console.log("Signup")}
        title="Signup"
        type="clear"
      />
    </LayoutComponent>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 2,
    marginBottom: 30,
  },
});
