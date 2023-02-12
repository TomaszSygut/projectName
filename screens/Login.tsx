import { StyleSheet, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

export default function LoginScreen() {
  const context = useAuth();

  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
