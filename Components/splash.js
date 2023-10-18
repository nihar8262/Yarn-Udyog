import { View, Text, Image, StyleSheet ,Dimensions} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

const Splash = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace("OnBoarding");
    }, 2000);
  }, []);
  return (
    <View style={tw`flex justify-center items-center mt-50`}>
      <View style={styles.lottie}>
      {/* <LottieView
                    source={require("../assets/jumping-sheep.json")}
                    autoPlay
                    loop
                  /> */}
             <View >
        <Image
          source={require('../image/farmer.png')}
          style={styles.lottie}
        />
      
      </View>      
                 
      </View>
      <View style={tw`mt-5`}>
      <Text style={tw`font-bold text-3xl`}>Yarn Udyog</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
    // backgroundColor: "ff9900"
  },
});

export default Splash;