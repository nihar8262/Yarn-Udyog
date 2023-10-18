import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
// import reactNativeLottie from "//cdn.jsdelivr.net/npm/react-native-lottie@0.0.1-alpha.2/+esm"
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "react-native-onboarding-swiper";
import tw from "twrnc";
import LottieView from "lottie-react-native";




const { width } = Dimensions.get("window");
const Stack = createNativeStackNavigator();

const OnBoarding = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("choose");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={tw`p-4 bg-white rounded-l-full`} {...props}>
        <Text style={tw`text-center`}>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
   <SafeAreaView>
     <ScrollView>
      <View style={tw`flex `}>
        <Onboarding
          onDone={handleDone}
          onSkip={handleDone}
          bottomBarHighlight={false}
          DoneButtonComponent={doneButton}
          containerStyles={{ paddingHorizontal: 15 }}
          pages={[
            {
              backgroundColor: "#F8B32B",
              image: (
                <View style={styles.lottie}>
                  <LottieView
                    source={require("../assets/marketplace.json")}
                    autoPlay
                    loop
                  />
                </View>
              ),
              title: "MarketPlace",
              subtitle: "",
            },
            {
              backgroundColor: "#4ac4cf",
              image: (
                <View style={styles.lottie}>
                  <LottieView
                    source={require("../assets/traning.json")}
                    autoPlay
                    loop
                  />
                </View>
              ),
              title: "Traning",
              subtitle: "Done with React Native Onboarding Swiper",
            },
            {
              backgroundColor: "#f5f4b8",
              image: (
                <View style={styles.lottie}>
                  <LottieView
                    source={require("../assets/education.json")}
                    autoPlay
                    loop
                  />
                </View>
              ),
              title: "Education",
              subtitle: "Done with React Native Onboarding Swiper",
            },
            {
              backgroundColor: "#6699ff",
              image: (
                <View style={styles.lottie}>
                  <LottieView
                    source={require("../assets/tacking.json")}
                    autoPlay
                    loop
                  />
                </View>
              ),
              title: "Tracking",
              subtitle: "Done with React Native Onboarding Swiper",
            },
          ]}
        />
      </View>
    </ScrollView>
     
    
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
  },
});

export default OnBoarding;
