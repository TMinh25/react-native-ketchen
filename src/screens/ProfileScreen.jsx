import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../components/Button";
import { theme } from "../core/theme";

export default function ProfileScreen({ navigation, route }) {
  const { user } = route.params;

  console.log(route.params);

  return (
    <>
      <View
        style={{
          padding: 12,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 24,
        }}
      >
        <Image
          source={user.image}
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
            resizeMode: "cover",
            marginRight: 12,
          }}
        />
        <View style={{ width: "70%" }}>
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
      <View style={{ paddingHorizontal: 12 }}>
        <Button mode="outlined">
          <Text>Món của tôi</Text>
        </Button>
        <Button mode="outlined">
          <Text>Món đã lưu</Text>
        </Button>
      </View>
    </>
  );
}
