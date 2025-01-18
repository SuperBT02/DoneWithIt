import { Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

export default function App() {
  return <View style={{
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingtop: 100,
    flex:1,
  }}>
    <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
    />
  </View>;
}
