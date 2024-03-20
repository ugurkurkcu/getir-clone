import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("window");

function index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        height: height * 0.25,
        width: width,
        paddingTop: 22,
      }}
    >
      <FlatList
        data={images}
        style={{ width: width * 0.5, height: height * 0.2 }}
        renderItem={(item) => (
          <Image
            style={{
              width: width * 0.5,
              height: height * 0.2,
              resizeMode: "stretch",
            }}
            source={{ uri: item.item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width*.5}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: activeIndex == index ? "#5d3ebd" : "#c1c1c1" },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});

export default index;
