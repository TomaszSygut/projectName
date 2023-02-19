import { useNavigation } from "@react-navigation/core";
import { IntroScreenNavigationProp } from "../StackNavigator";
import ButtonComponent from "../components/Button";
import LayoutComponent from "../components/Layout";

export default function HomeScreen() {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  return (
    <LayoutComponent>
      <ButtonComponent
        onPress={() => navigation.navigate("Chat", {})}
        title="Go to chat"
      />
    </LayoutComponent>
  );
}
