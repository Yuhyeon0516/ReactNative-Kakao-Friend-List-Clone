import { View, Text, Image } from "react-native";
import React from "react";
import Margin from "./Margin";

const Profile = ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  const fontWeight = isMe ? "bold" : undefined;
  const nameFontSize = isMe ? 16 : 15;
  const introFontSize = isMe ? 12 : 11;
  const margin = isMe ? 6 : 2;

  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <Image source={{ uri: uri }} style={{ width: size, height: size, borderRadius: size * 0.4 }} />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: fontWeight, fontSize: nameFontSize }}>{name}</Text>
        {!!introduction && (
          <View>
            <Margin height={margin} />
            <Text style={{ fontSize: introFontSize, color: "grey" }}>{introduction}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;
