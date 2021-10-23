import React, { useEffect } from "react";
import { View } from "react-native";
import ImageCard from "../components/ImageCard";
import ProfileCard from "../components/ProfileCard";
import RecipeCard from "../components/RecipeCard";
import { styles } from "../core/theme";

export default function FoodRecipeScreen({ navigation, route }) {
  const { source, foodRecipe, user } = route.params;

  return (
    <>
      <View style={styles.containerNoCenter}>
        <View style={{ padding: 12, height: "30%" }}>
          <ImageCard
            source={source}
            user={user}
            onPress={() =>
              navigation.push("Profile", { title: user.name, user })
            }
          />
        </View>
        <RecipeCard {...{ entries: foodRecipe }} />
      </View>
    </>
  );
}
