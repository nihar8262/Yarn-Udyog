import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
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
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Summary = () => {

  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("payment");
  };


  return (
    <SafeAreaView>
      <View>
        {/* Header */}
        <View style={tw`w-90 pl-2`}>
          <View style={tw`flex flex-row items-center m-4 pl-3 `}>
            <TouchableHighlight>
            <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableHighlight>
            <Text style={tw`text-2xl  ml-15`}>Order Summary</Text>
          </View>
        </View>
        {/* Line */}
        <View style={tw`bg-slate-400 h-0.4 w-100  mt-1 `}></View>

        {/* Track */}
        <View style={tw`flex flex-row  m-4 justify-center`}>
            {/* Address */}
            <View style={tw`flex items-center  `}>
            <AntDesign name="checkcircleo" size={24} color="#50C878" />
            <Text style={tw`text-xs`}>Address</Text>
            </View>
            <Octicons name="dash" size={24} color="#50C878" />
            <Octicons name="dash" size={24} color="#50C878" />
            <Octicons name="dash" size={24} color="#50C878" />
            <Octicons name="dash" size={24} color="#50C878" />
            

            {/* Order Summary */}
            <View style={tw`flex items-center`}>
            <AntDesign name="checkcircle" size={24} color="#50C878" />
            <Text style={tw`text-xs font-bold`}>Order Summary</Text>
            </View>
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />
            <Octicons name="dash" size={24} color="grey" />

            {/* Payment */}
            <View style={tw`flex items-center`}>
            <AntDesign name="checkcircleo" size={24} color="grey" />
            <Text style={tw`text-xs text-stone-600`}>Payment</Text>
            </View>
            
        </View>
        {/* Line */}
        <View style={tw`bg-slate-400 h-0.1 w-100  mt-1 `}></View>

        {/*Address */}

        <View>
          <View>
            <Text style={tw`text-2xl  ml-12 mt-3 font-bold`}>Delivery Address</Text>
          </View>

          {/* Box */}
          <View>
            <View style={tw`border-green-500 border-2 flex justify-center p-6 w-85 ml-5 mt-5 relative rounded-md`}>
                <Text >House No:104,Village:Dholakpur</Text>
                <Text>Thana+post:Tehari,PIN:44021</Text>
                <Text>District:Mirzapur</Text>
                <Text>Phone:+128724568</Text>
                </View>

            <View style={tw`border-green-500 border-2 flex w-16 rounded-xl absolute bg-slate-100 ml-9 mt-2 text-center`}>
                <Text style={tw`text-center`}>Primary</Text>
            </View>
          </View>

        </View>

        {/* Product Details */}
        <View style={tw` flex mt-4 w-85 m-8`}>
                <Text style={tw`text-lg mb-4`}>Total items: 2</Text>
                <View style={tw` flex flex-row justify-between mt-2`}> 
                 <Text>Sub Total</Text>
                 <Text style={tw`text-green-500`}>₹ 1,560</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-2`}> 
                 <Text>Convineance Fee</Text>
                 <Text style={tw`text-green-500`}>₹ 100</Text>
                 </View>

                 <View style={tw` flex flex-row justify-between mt-2`}> 
                 <Text style={tw`text-xl font-bold`}>Total Amount</Text>
                 <Text style={tw`text-green-500  text-xl font-bold`}>₹ 1,660</Text>
                 </View>

                 
            </View>

            {/* Line */}
        <View style={tw`bg-slate-400 h-0.1 w-100  mt-40 `}></View>

             {/* Button */}
             <View style={tw`items-center m-2 mt-9`}> 
            <TouchableOpacity onPress={handleDone}>
              <Text
                style={tw`bg-green-500 text-lg text-white text-center p-2  w-90   rounded-md`}
              >
                Continue to Payment
              </Text>
            </TouchableOpacity>
            </View>

      </View>
    </SafeAreaView>
  );
};

export default Summary;
