import { FlatList, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Profile from "./src/components/Profile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/components/Margin";
import Division from "./src/components/Division";
import FriendSection from "./src/components/FriendSection";
import { useState } from "react";
import TabBar from "./src/components/TabBar";

export default function App() {
  const [isOpend, setIsOpend] = useState(true);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const onPressArrow = () => {
    setIsOpend((prev) => !prev);
  };

  const itemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile uri={item.uri} name={item.name} introduction={item.introduction} isMe={false} />
    </View>
  );

  const listHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <Profile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} isMe={true} />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection friendProfileLen={friendProfiles.length} onPressArrow={onPressArrow} isOpend={isOpend} />
      <Margin height={5} />
    </View>
  );

  const listFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
        <FlatList
          data={isOpend ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={itemSeparatorComponent}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          ListHeaderComponent={listHeaderComponent}
          ListFooterComponent={listFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex} />
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
