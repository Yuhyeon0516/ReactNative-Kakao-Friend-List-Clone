import { View, Text, Image } from "react-native";
import React from "react";
import Margin from "./Margin";

const Profile = ({ uri, name, introduction }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
        <Margin height={6} />
        <Text style={{ fontSize: 12, color: "grey" }}>{introduction}</Text>
      </View>
    </View>
  );
};

export default Profile;
