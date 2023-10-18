import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AwesomeButton, {
  ThemedButton,
} from "react-native-really-awesome-button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Choose = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("login");
  };

  return (
    <SafeAreaView>
      <View>
        {/* Header Image */}
        <View style={tw` flex  items-center`}>
          <View style={tw`w-60 h-60`}>
            <LottieView
              source={require("../assets/choose.json")}
              autoPlay
              loop
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#2bad15",
            height: 800,
            borderTopRightRadius: 100,
            borderTopLeftRadius: 100,
          }}
        >
          <View style={tw`flex mt-10`}>
            {/* Button */}
            <View style={tw`items-center  mt-15 `}>
              <View
                style={tw` flex flex-row items-center  gap-3 bg-amber-500 text-xl font-bold text-white text-center p-1  w-70   rounded-md`}
              >
                <View>
                  {/* Image */}
                  <Image
                    source={require("../image/farmer1.png")}
                    style={tw`w-20 h-20`}
                  />
                </View>
                <TouchableOpacity onPress={handlePress}>
                  <Text style={tw` text-center text-2xl font-bold text-white`}>
                    Farmer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Button */}
            <View style={tw`items-center  mt-10 `}>
              <View
                style={tw` flex flex-row items-center  gap-3 bg-amber-500 text-xl font-bold text-white text-center p-2  w-70   rounded-md`}
              >
                <View>
                  {/* Image */}
                  <Image
                    source={require("../image/gift_box.png")}
                    style={tw`w-18 h-18`}
                  />
                </View>
                <TouchableOpacity onPress={handlePress}>
                  <Text style={tw` text-center text-2xl font-bold text-white`}>
                    Buyer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Button */}
            <View style={tw`items-center  mt-10 `}>
              <View
                style={tw` flex flex-row items-center  gap-3 bg-amber-500 text-xl font-bold text-white text-center p-2  w-70   rounded-md`}
              >
                <View>
                  {/* Image */}
                  <Image
                    source={require("../image/buisness.png")}
                    style={tw`w-18 h-18`}
                  />
                </View>
                <TouchableOpacity onPress={handlePress}>
                  <Text style={tw` text-center text-2xl font-bold text-white`}>
                    Service Provider
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Choose;
