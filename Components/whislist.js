import React, { useState } from "react";
import list from "../constant";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Foundation,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import tw from "twrnc";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { PaginationLight } from "react-native-snap-carousel";

const width = Dimensions.get("window").width;
const Stack = createNativeStackNavigator();

const Whishlist = () => {
  const [showInput, setShowInput] = useState(false);
  const [showHeart, setShowHeart] = useState(true);

  const navigation = useNavigation();

  const goToMyCart = () => {
    navigation.navigate("mycart");
  };

  const goToDetails = () => {
    navigation.navigate("details");
  };

  const goToProfile = () => {
    navigation.navigate("profile");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw` `}>
          {/* Header */}
          <View style={tw`flex flex-row items-center mt-4  justify-evenly`}>
            <TouchableHighlight>
            <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableHighlight>
            {/* Input Text */}
            {showInput ? (
              <View
                style={tw`flex flex-row bg-slate-100 justify-start items-center p-2 w-50 rounded-lg gap-2 mr-2`}
              >
                <TouchableOpacity
                  onPress={() => {
                    setShowInput(false);
                  }}
                >
                  <FontAwesome name="search" size={24} color="grey" />
                </TouchableOpacity>
                <TextInput placeholder="Search Here..." />
              </View>
            ) : (
              <View style={tw`flex flex-row justify-evenly items-center gap-18`}>
                <Text style={tw`text-lg`}>Whishlist</Text>
                <TouchableOpacity onPress={() => setShowInput(true)}>
                  <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )}
             {/* Whishlist */}
            <View style={tw`flex flex-row justify-evenly items-center gap-3`}>
              <TouchableOpacity>
              <AntDesign name="heart" size={24} color="red" />
              </TouchableOpacity>

              {/* Cart */}

              <TouchableOpacity onPress={goToMyCart}>
                <AntDesign name="shoppingcart" size={24} color="black" />
              </TouchableOpacity>

              {/* Profile */}

              <TouchableOpacity onPress={goToProfile}>
                <MaterialCommunityIcons
                  name="human-male"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Cards  */}

          <TouchableWithoutFeedback onPress={goToDetails}>
            <View style={tw`flex justify-center flex-wrap flex-row  mt-3`}>
              {list.map((item) => {
                return (
                  <View style={tw`flex p-2 w-45    shadow-md bg-white `}>
                    <View style={tw`items-center`}>
                      <View style={tw`mt-1`}>
                        <Image
                          source={require("../image/mohair.png")}
                          style={tw`w-35 h-30`}
                        />
                      </View>
                      <View style={tw`flex m-2`}>
                        <Text style={tw`font-bold`}>Merino Wool</Text>
                        <Text style={tw`text-xs text-slate-400`}>
                          Super Soft & Light weight...
                        </Text>
                      </View>
                    </View>

                    <View style={tw`flex flex-row justify-between `}>
                      <View style={tw`flex flex-row items-center gap-2`}>
                        <Entypo name="check" size={24} color="#50C878" />
                        <Text>In Stock</Text>
                      </View>

                      {showHeart ? (
                        <TouchableOpacity onPress={() => setShowHeart(false)}>
                          <View>
                            <Entypo name="heart" size={24} color="red" />
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={() => setShowHeart(true)}>
                          <View>
                            <Entypo
                              name="heart-outlined"
                              size={24}
                              color="black"
                            />
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                    <View style={tw`items-center gap-2`}>
                      {/* Button */}
                      <TouchableOpacity onPress={goToMyCart}>
                        <View
                          style={tw` flex flex-row bg-green-500 p-1 w-25 items-center mt-3 rounded-md`}
                        >
                            <MaterialIcons name="delete" size={24} color="black" />
                          <Text style={tw`text-white`}>Remove</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
});

export default Whishlist;