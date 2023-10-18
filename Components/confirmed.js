import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Foundation,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import tw from "twrnc";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Confirmed = () => {

    const [show,setShow] = useState(true);

    const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("productlist");
  };

   
  return (
    <SafeAreaView>
      <View style={tw`flex `}>
        {/* Modal */}
        
        <Modal 
        visible={show}
        transparent={true}
        animationType="fade"
        >
          <View style={styles.modalbackdrop}>
          <View style={styles.centerView}>
            <View style={tw`bg-white p-10 rounded-lg shadow-md`}>
            <View style={tw`w-50 h-40`}>
                  <LottieView
                    source={require("../assets/confirm.json")}
                    autoPlay
                    loop
                  />
                </View>
              <TouchableOpacity 
              onPress={()=>setShow(false)}
              style={tw` bg-yellow-500 p-3 m-3 rounded-lg m-3`}>
                <Text style={tw`text-center font-bold text-white text-xl`}>
                  Order Confirmed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        
        

        
        <View style={tw`flex items-center mt-20`}>
       <View style={tw`w-130 h-100`}>
       <LottieView
                    source={require("../assets/order-confirmed.json")}
                    autoPlay
                    loop
                  />
       </View>
          
          <View style={tw`flex m-10 `}>
          <Text style={tw`text-center font-extrabold  text-4xl`}>
                 Thanks For Buying 
                </Text>
                <Text style={tw`text-center font-extrabold  text-3xl text-emerald-400`}>
                  Product from us
                </Text>
          </View>
          
        </View>
        {/* Bottom Button */}
        <View>
       
        </View>
        <View style={tw`flex`}>
          <TouchableOpacity 
          onPress={handleDone}
          style={tw`   border-sky-700 border-4 p-4 m-3 rounded-lg mt-20 `}>
            <Text style={tw`text-center font-bold text-sky-700  text-xl`}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "baseline",
  },
  modalbackdrop:{
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
height: '100%',
  }
});

export default Confirmed;
