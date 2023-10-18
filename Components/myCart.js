import React from "react";
import { View,Text,Image,TouchableHighlight,TouchableOpacity, ScrollView} from "react-native";
import { Octicons,FontAwesome,Ionicons,MaterialIcons,Foundation,Entypo,AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const MyCart=()=>{

  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("address");
  };

  const goBack = ()=>{
    window.history.go();
  }

    return (
        <SafeAreaView>
            <ScrollView>
            <View style={tw` flex w-90 ml-6`}>
                {/* Header */}
            <View style={tw`flex flex-row  m-3 items-center  -mb-5 `}>
                <TouchableOpacity onPress={goBack}>
                <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Text style={tw`text-2xl p-5 mb-2 ml-15 `}>My Cart</Text>
               
                
            </View>

            {/* Items  1*/}
            <View style={tw`flex flex-row justify-evenly items-center gap-1 mt-5  bg-slate-50 shadow-sm p-2 mr-3 `}>
                <AntDesign name="checkcircle" size={20} color="#50C878" />
                <Image source={require("../image/merino-wool.png")} 
                    style={tw`w-25 h-25 rounded-md ml-2`}></Image>
                    <View style={tw`mr-3`}>
                        <Text style={tw`text-lg font-bold`}>Merino Wool</Text>
                        <Text style={tw`text-sm text-green-500`}>Available in Stock</Text>
                        <Text>Rs.<Text style={tw`text-lg font-bold`}>100</Text>/Kg</Text>
                    </View>

                    <View style={tw`flex  items-center`}>
                            <Entypo name="circle-with-plus" size={22} color="#50C878" />
                            <Text style={tw`text-lg font-bold ml-1 mr-1`}>1 Kg</Text>
                            <Entypo name="circle-with-minus" size={22} color="#50C878" />
                        </View> 

                         <TouchableOpacity>
                        <View style={tw` flex bg-red-600 h-25 justify-center rounded-r-md`}>
                        <MaterialIcons name="delete" size={24} color="white" />
                        </View> 
                        </TouchableOpacity> 

            </View>

            {/* Item 2 */}
            <View style={tw`flex flex-row justify-evenly items-center gap-1 mt-5  bg-slate-50 shadow-sm p-2 mr-3 `}>
                <AntDesign name="checkcircle" size={20} color="#50C878" />
                <Image source={require("../image/cashmere.png")} 
                    style={tw`w-25 h-25 rounded-md ml-2`}></Image>
                    <View style={tw`mr-3`}>
                        <Text style={tw`text-lg font-bold`}>Cashmere</Text>
                        <Text style={tw`text-sm text-green-500`}>Available in Stock</Text>
                        <Text>Rs.<Text style={tw`text-lg font-bold`}>120</Text>/Kg</Text>
                    </View>

                    <View style={tw`flex  items-center`}>
                            <Entypo name="circle-with-plus" size={22} color="#50C878" />
                            <Text style={tw`text-lg font-bold ml-1 mr-1`}>1 Kg</Text>
                            <Entypo name="circle-with-minus" size={22} color="#50C878" />
                        </View> 

                         <TouchableOpacity>
                        <View style={tw` flex bg-red-600 h-25 justify-center rounded-r-md`}>
                        <MaterialIcons name="delete" size={24} color="white" />
                        </View> 
                        </TouchableOpacity> 

            </View>
            {/* Item 3 */}
            <View style={tw`flex flex-row justify-evenly items-center gap-1 mt-5  bg-slate-50 shadow-sm p-2 mr-3 `}>
                <AntDesign name="checkcircle" size={20} color="#50C878" />
                <Image source={require("../image/lamba.png")} 
                    style={tw`w-25 h-25 rounded-md ml-2`}></Image>
                    <View style={tw`mr-3`}>
                        <Text style={tw`text-lg font-bold`}>Lamba</Text>
                        <Text style={tw`text-sm text-green-500`}>Available in Stock</Text>
                        <Text>Rs.<Text style={tw`text-lg font-bold`}>130</Text>/Kg</Text>
                    </View>

                    <View style={tw`flex  items-center`}>
                            <Entypo name="circle-with-plus" size={22} color="#50C878" />
                            <Text style={tw`text-lg font-bold ml-1 mr-1`}>1 Kg</Text>
                            <Entypo name="circle-with-minus" size={22} color="#50C878" />
                        </View> 

                         <TouchableOpacity>
                        <View style={tw` flex bg-red-600 h-25 justify-center rounded-r-md`}>
                        <MaterialIcons name="delete" size={24} color="white" />
                        </View> 
                        </TouchableOpacity> 

            </View>

            {/* Item 4 */}
            <View style={tw`flex flex-row justify-evenly items-center gap-1 mt-5  bg-slate-50 shadow-sm p-2 mr-3 `}>
                <AntDesign name="checkcircle" size={20} color="#50C878" />
                <Image source={require("../image/mohair.png")} 
                    style={tw`w-25 h-25 rounded-md ml-2`}></Image>
                    <View style={tw`mr-3`}>
                        <Text style={tw`text-lg font-bold`}>Mohair</Text>
                        <Text style={tw`text-sm text-green-500`}>Available in Stock</Text>
                        <Text>Rs.<Text style={tw`text-lg font-bold`}>120</Text>/Kg</Text>
                       
                    </View>

                    <View style={tw`flex  items-center`}>
                            <Entypo name="circle-with-plus" size={22} color="#50C878" />
                            <Text style={tw`text-lg font-bold ml-1 mr-1`}>1 Kg</Text>
                            <Entypo name="circle-with-minus" size={22} color="#50C878" />
                        </View>

                        <TouchableOpacity>
                        <View style={tw` flex bg-red-600 h-25 justify-center rounded-r-md`}>
                        <MaterialIcons name="delete" size={24} color="white" />
                        </View> 
                        </TouchableOpacity>

            </View>
            {/* Item 5 */}
            <View style={tw`flex flex-row justify-evenly items-center gap-1 mt-5  bg-slate-50 shadow-sm p-2 mr-3 `}>
                <AntDesign name="checkcircle" size={20} color="#50C878" />
                <Image source={require("../image/vicuna.jpg")} 
                    style={tw`w-25 h-25 rounded-md ml-2`}></Image>
                    <View style={tw`mr-3`}>
                        <Text style={tw`text-lg font-bold`}>Vicuna</Text>
                        <Text style={tw`text-sm text-green-500`}>Available in Stock</Text>
                        <Text>Rs.<Text style={tw`text-lg font-bold`}>115</Text>/Kg</Text>
                    </View>

                    <View style={tw`flex  items-center`}>
                            <Entypo name="circle-with-plus" size={22} color="#50C878" />
                            <Text style={tw`text-lg font-bold ml-1 mr-1`}>1 Kg</Text>
                            <Entypo name="circle-with-minus" size={22} color="#50C878" />
                        </View>
                        <TouchableOpacity>
                        <View style={tw` flex bg-red-600 h-25 justify-center rounded-r-md`}>
                        <MaterialIcons name="delete" size={24} color="white" />
                        </View> 
                        </TouchableOpacity>  

            </View>

            {/* Product Details */}
            <View style={tw` flex mt-4`}>
                <Text style={tw``}>PRICE DETAILS(5 items)</Text>

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Merino Wool(1 Kg)</Text>
                  <Text style={tw`text-green-500`}>₹ 100</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Cashmere Wool(1 Kg)</Text>
                  <Text style={tw`text-green-500`}>₹ 120</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Lamba Wool(1 Kg)</Text>
                  <Text style={tw`text-green-500`}>₹ 130</Text>
                </View>

                

                <View style={tw` flex flex-row justify-between mt-2`}>
                  <Text>Moahir Wool(1 Kg)</Text>
                  <Text style={tw`text-green-500`}>₹ 120</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-2 items-center`}>
                  <Text>Vicuna Wool(1 Kg)</Text>
                  <Text style={tw`text-green-500 `}>₹ 115</Text>
                </View>

                <View style={tw` flex flex-row justify-between mt-5`}>
                  <Text>Total MRP</Text>
                  <Text style={tw`text-green-500 font-bold text-lg`}>₹ 585</Text>
                </View>
              </View>
            

            {/* Button */}
            <View style={tw`items-center m-2 mt-8 mr-5`}> 
            <TouchableOpacity onPress={handleDone}>
              <Text
                style={tw`bg-green-500 text-lg font-bold text-white text-center p-2  w-90   rounded-md`}
              >
                Place Order
              </Text>
            </TouchableOpacity>
            </View>
            
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyCart;