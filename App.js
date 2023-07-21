import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import MyProfile from "./src/components/MyProfile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/components/Margin";
import Division from "./src/components/Division";
import FriendSection from "./src/components/FriendSection";
import FriendList from "./src/components/FriendList";

export default function App() {
  const onPressArrow = () => {
    console.log("clicked arrow");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Margin height={10} />
        <MyProfile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection friendProfileLen={friendProfiles.length} onPressArrow={onPressArrow} />
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
