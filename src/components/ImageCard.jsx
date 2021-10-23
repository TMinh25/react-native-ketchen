import {
  ActivityIndicator,
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
// import ProfilePicture from "react-native-profile-picture";

export default function ImageCard({ source, user, onPress }) {
  return (
    <View
      style={{
        flex: 1,
        shadowColor: "black",
        shadowOffset: { height: 2, width: 10 },
        shadowOpacity: 0.3,
        overflow: "hidden",
        elevation: 10,
      }}
      borderRadius={12}
    >
      <ImageBackground
        source={source}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
        PlaceholderContent={<ActivityIndicator />}
      >
        <TouchableOpacity
          style={{
            padding: 12,
            backgroundColor: "#0f0f0fc0",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <View style={{ width: "70%" }}>
            <Text style={{ fontSize: 20, color: "white" }}>{user.name}</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 14,
              }}
            >
              {user.email}
            </Text>
          </View>
          <Image
            source={user.image}
            style={{
              borderRadius: 45,
              width: 45,
              height: 45,
              resizeMode: "cover",
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
