import { View, Text, ScrollView } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

const FriendList = ({ datas, isOpend }) => {
  return isOpend ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {datas.map((data, index) => (
        <View key={index}>
          <Profile uri={data.uri} name={data.name} introduction={data.introduction} />
          <Margin height={13} />
        </View>
      ))}
      <Margin height={10} />
    </ScrollView>
  ) : null;
};

export default FriendList;
