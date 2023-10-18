import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
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

const Payment = () => {

  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("confirmed");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View>
        {/* Header */}
        <View style={tw`w-90 pl-2`}>
          <View style={tw`flex flex-row items-center m-4 pl-3 `}>
            <TouchableHighlight>
            <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableHighlight>
            <Text style={tw`text-2xl  ml-20`}>Payment</Text>
          </View>
        </View>
        {/* Line */}

        <View style={tw`bg-slate-400 h-0.4 w-100  mt-1 `}></View>
        {/* Text */}
        {/* <View style={tw`bg-slate-100 h-12 justify-center`}>
            <Text style={tw`text-2xl ml-8`}>Select any Payment Method</Text>
          </View> */}

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
            <AntDesign name="checkcircleo" size={24} color="#50C878" />
            <Text style={tw`text-xs `}>Order Summary</Text>
          </View>
          <Octicons name="dash" size={24} color="#50C878" />
          <Octicons name="dash" size={24} color="#50C878" />
          <Octicons name="dash" size={24} color="#50C878" />
          <Octicons name="dash" size={24} color="#50C878" />

          {/* Payment */}
          <View style={tw`flex items-center`}>
            <AntDesign name="checkcircle" size={24} color="#50C878" />
            <Text style={tw`text-xs font-bold`}>Payment</Text>
          </View>
        </View>

        {/* Line */}
        <View style={tw`bg-slate-400 h-0.1 w-100  mt-1 `}></View>
        {/* Payment Methods */}
        
          <View style={{flex:1}}  >
            <View style={tw`flex  m-10`}>
              {/* Cash */}
              <View style={tw`flex flex-row items-center m-2 ml-5`}>
                <FontAwesome name="rupee" size={24} color="black" />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-15 font-bold`}>
                    Cash On Delivery
                  </Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.1 w-85  mt-2 `}></View>

              {/* Gpay */}
              <View style={tw`flex flex-row items-center m-4`}>
                <Image
                  source={require("../image/gpay.png")}
                  style={tw`w-8 h-8`}
                />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-11 font-bold`}>GPay</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1 `}></View>

              {/* Phonepay */}
              <View style={tw`flex flex-row items-center m-4`}>
                <Image
                  source={require("../image/phonepay.png")}
                  style={tw`w-8 h-8`}
                />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-11 font-bold`}>PhonePay</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1 `}></View>

              {/* UPI */}
              <View style={tw`flex flex-row items-center m-3`}>
                <Image
                  source={require("../image/upi.png")}
                  style={tw`w-10 h-10`}
                />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-10 font-bold`}>UPI</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1 `}></View>

              {/* Visa */}
              <View style={tw`flex flex-row items-center m-4`}>
                <Image
                  source={require("../image/visa.png")}
                  style={tw`w-10 h-5`}
                />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-9 font-bold`}>Visa</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1 `}></View>

              {/* Master card */}
              <View style={tw`flex flex-row items-center m-4`}>
                <Image
                  source={require("../image/mastercard.png")}
                  style={tw`w-10 h-5`}
                />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-9 font-bold`}>Master Card</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.1 w-85  mt-1 `}></View>

              {/* Wallet */}
              <View style={tw`flex flex-row items-center m-4`}>
                <Entypo name="wallet" size={24} color="black" />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-13 font-bold`}>Paytm/Wallet</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1 `}></View>

              {/* Net Banking */}
              <View style={tw`flex flex-row items-center m-4`}>
                <FontAwesome name="bank" size={24} color="black" />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-13 font-bold`}>Net Banking</Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1  `}></View>

              {/* Credit/Debit Card */}
              <View style={tw`flex flex-row items-center m-4`}>
                <AntDesign name="creditcard" size={24} color="black" />
                <TouchableHighlight>
                  <Text style={tw`text-xl ml-13 font-bold`}>
                    Credit/Debit Card
                  </Text>
                </TouchableHighlight>
              </View>
              {/* Line */}
              <View style={tw`bg-slate-400 h-0.2 w-85  mt-1  `}></View>

              {/* Product Details */}
              <View style={tw` flex mt-4`}>
                <Text style={tw``}>PRICE DETAILS(2 items)</Text>

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Merino Wool(5 Kg)</Text>
                  <Text style={tw`text-green-500`}>₹ 1,000</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Lamba Wool(2 Kg)</Text>
                  <Text style={tw`text-green-500`}>₹ 560</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Total MRP</Text>
                  <Text style={tw`text-green-500`}>₹ 1,560</Text>
                </View>
              </View>
            </View>
            {/* Bottom Nav */}
            <View
              style={tw`flex flex-row border-slate-100 border-2 h-20 items-center justify-between `}
            >
              <View style={tw`ml-8`}>
                <Text style={tw`text-lg font-bold`}>₹ 1,560</Text>
                <Text style={tw`font-bold text-green-500`}>View Details </Text>
              </View>

              {/* Button */}
              <View style={tw`mr-5`}>
                <TouchableOpacity onPress={handleDone}>
                  <Text
                    style={tw`text-lg bg-green-500 text-white w-40 p-2 text-center rounded-md`}
                  >
                    Place Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        
        {/* Checkout */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
