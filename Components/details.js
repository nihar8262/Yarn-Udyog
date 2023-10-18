import React from "react";
import { View,Text,Image,TouchableHighlight,TouchableOpacity} from "react-native";
import { Octicons,FontAwesome,Ionicons,MaterialIcons,Foundation,Entypo,AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Details=()=>{

    const navigation = useNavigation();

  const goToMyCart = () => {
    navigation.navigate("mycart");
  };

    return(
        <SafeAreaView >
            <View >
                {/* Header */}
                <View style={tw`flex flex-row  ml-5 mr-7 items-center justify-between `}>
                  <TouchableOpacity>
                  <AntDesign name="arrowleft" size={30} color="black" />
                  </TouchableOpacity>
                  <Text style={tw`text-2xl p-5 mb-2 `}>Details</Text>
                  <TouchableOpacity>
                  <FontAwesome name="bookmark-o" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                {/* Image */}
                <View style={tw`flex items-center`}>
                    <Image source={require("../image/merino-wool.png")} 
                    style={tw`w-85 h-60 rounded-md`}></Image>
                </View>
                {/* Wool Type */}
                <View >
                    <Text style={tw`font-bold text-xl ml-5 p-2`}>Merino Wool</Text>
                </View>

                {/* Pricing  */}
                <View style={tw`flex flex-row  justify-between `}>
                    <View style={tw`ml-7`}>
                        <Text style={tw`text-lg text-green-500`}>Available in Stock</Text>
                        <View style={tw`flex flex-row `}>
                        <Entypo name="star" size={24} color="orange" />
                        <Text style={tw`text-lg`}>4.5</Text>
                        </View>
                    </View>

                    <View style={tw`mr-5 flex items-center`}>
                        <Text>Rs.<Text style={tw`text-lg font-bold`}>100</Text>/Kg</Text>
                        <View style={tw`flex flex-row items-center`}>
                            <Entypo name="circle-with-minus" size={22} color="#50C878" />
                            <Text style={tw`text-lg font-bold ml-1 mr-1`}>1 Kg</Text>
                            <Entypo name="circle-with-plus" size={22} color="#50C878" />
                        </View>
                    </View>
                </View>
                
                {/* Description */}
                <View style={tw` flex w-89 ml-7 p-2 `}>
                    <Text style={tw`text-lg`}>Description</Text>
                    <Text style={tw`text-sm text-slate-400`}>It is a very soft type of wool, and when used in fabrics, 
                        it is ideal for regulating body temperature. Merino is a fine,
                         shiny type of wool. Merino wool is popular for sports clothing
                          because it suits both hot and cold climates for warmth and
                           keeping body temperatures ...<Text style={tw`font-bold text-green-500`}>Read More</Text> </Text>
                </View>

                {/* More Products */}
                <View>
                    <Text style={tw`text-lg mb-2 ml-6`}>More Products</Text>
                    
                    <View style={tw`flex flex-row justify-evenly`}>
                    <View>
                    <Image source={require("../image/cashmere.png")} 
                    style={tw`w-17 h-17 rounded-md`}></Image>
                    <Text>Cashmere</Text>
                    </View>
                    <View>
                    <Image source={require("../image/vicuna.jpg")} 
                    style={tw`w-17 h-17 rounded-md`}></Image>
                    <Text>Vicuna</Text>
                    </View>
                    <View>
                    <Image source={require("../image/mohair.png")} 
                    style={tw`w-17 h-17 rounded-md`}></Image>
                    <Text>Mohair</Text>
                    </View>
                    <View>
                    <Image source={require("../image/lamba.png")} 
                    style={tw`w-17 h-17 rounded-md`}></Image>
                    <Text>Lamba</Text>
                    </View>
                    </View>
                </View>

                {/* Button */}
                <View style={tw`flex items-center`}>
                <TouchableOpacity onPress={goToMyCart}>
                    <Text style={tw`bg-green-500 text-lg font-bold text-white text-center m-3 p-3  w-87  rounded-md`}>Add to Cart</Text>
                </TouchableOpacity>
                </View>
                
            </View>
         </SafeAreaView>
    )
}

export default Details;