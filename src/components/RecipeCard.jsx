import { useRoute } from "@react-navigation/core";
import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
const windowWidth = Dimensions.get("window").width;

export default class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: props?.entries,
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 24,
          margin: 12,
          marginTop: 0,
          height: "97%",
          shadowColor: "black",
          shadowOffset: { height: 2, width: 10 },
          shadowOpacity: 0.3,
          overflow: "hidden",
          elevation: 10,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          {item.title}:
        </Text>
        {item?.notice && (
          <Text
            style={{
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            {item.notice}
          </Text>
        )}

        <FlatList
          data={item?.steps}
          renderItem={({ item, index, separators }) => {
            return (
              <Text style={{ marginBottom: 3 }}>
                <Text style={{ fontWeight: "bold" }}>{index}.</Text> {item}
              </Text>
            );
          }}
          keyExtractor={(item, index) => "key" + index}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        layout={"default"}
        ref={(ref) => (this.carousel = ref)}
        data={this.state.carouselItems}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={this._renderItem}
        onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    );
  }
}
