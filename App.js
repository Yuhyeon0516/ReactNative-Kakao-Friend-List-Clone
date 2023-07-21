import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import MyProfile from "./src/components/MyProfile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { myProfile } from "./src/data";
import Margin from "./src/components/Margin";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Margin height={10} />
        <MyProfile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
