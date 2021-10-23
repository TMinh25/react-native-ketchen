import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileCard({ user, style }) {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        paddingHorizontal: 12,
        paddingVertical: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          height: "100%",
          borderRadius: 6,
          border: "1px solid grey",
          padding: 12,
        }}
      >
        <View style={{ height: "100%" }}>
          <Text style={{ fontSize: 20 }}>{user.name}</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 14,
            }}
          >
            {user.email}
          </Text>
        </View>
      </View>
    </View>
  );
}
