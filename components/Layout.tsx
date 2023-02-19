import { StyleSheet, View } from "react-native";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutComponent({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      <>{children}</>
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
