import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FriendSection = ({ friendProfileLen, onPressArrow, isOpend }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {friendProfileLen}</Text>
      <TouchableOpacity onPress={onPressArrow}>
        <MaterialIcons name={isOpend ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="lightgrey" />
      </TouchableOpacity>
    </View>
  );
};

export default FriendSection;
