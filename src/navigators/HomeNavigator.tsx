import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Image, Text, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#fff",
              }}
            >
              Ürünler
            </Text>
          ),
        }}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#FFF",
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="close"
                size={28}
                color="#fff"
                style={{ marginLeft: 12 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Entypo
                name="heart"
                size={24}
                color="#32177a"
                style={{ marginRight: 12 }}
              />
            </TouchableOpacity>
          ),
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
