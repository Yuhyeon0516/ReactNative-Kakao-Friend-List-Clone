import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Profile from "./src/components/Profile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/components/Margin";
import Division from "./src/components/Division";
import FriendSection from "./src/components/FriendSection";
import FriendList from "./src/components/FriendList";
import { useState } from "react";

export default function App() {
  const [isOpend, setIsOpend] = useState(true);
  const onPressArrow = () => {
    setIsOpend((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Margin height={10} />
        <Profile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection friendProfileLen={friendProfiles.length} onPressArrow={onPressArrow} isOpend={isOpend} />
        <FriendList datas={friendProfiles} isOpend={isOpend} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});
