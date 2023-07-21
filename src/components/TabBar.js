import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TabButton = ({ isSelected, onPress, activeIconName, inactiveIconName }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
      <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />
    </TouchableOpacity>
  );
};

const TabBar = ({ selectedTabIndex, setSelectedTabIndex }) => {
  return (
    <View style={{ flexDirection: "row", width: "100%", height: 50, borderTopWidth: 0.5, borderTopColor: "grey" }}>
      <TabButton isSelected={selectedTabIndex === 0} onPress={() => setSelectedTabIndex(0)} activeIconName={"person"} inactiveIconName={"person-outline"} />
      <TabButton
        isSelected={selectedTabIndex === 1}
        onPress={() => setSelectedTabIndex(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
      />
      <TabButton isSelected={selectedTabIndex === 2} onPress={() => setSelectedTabIndex(2)} activeIconName={"pricetag"} inactiveIconName={"pricetag-outline"} />
      <TabButton
        isSelected={selectedTabIndex === 3}
        onPress={() => setSelectedTabIndex(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
      />
    </View>
  );
};

export default TabBar;
