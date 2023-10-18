import React from "react";
import { View,Text,Image,TouchableHighlight } from "react-native";
import { Octicons,FontAwesome,Ionicons,MaterialIcons,Foundation,Entypo,AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { SafeAreaView } from "react-native-safe-area-context";

const Track=()=>{
    return(
        <SafeAreaView>
         <View style={tw`w-90 pl-2` }>
            {/* Header */}
            <View style={tw`flex flex-row items-center m-4 pl-3`}>
            <TouchableHighlight>
            <AntDesign name="left" size={26} color="black"  />
            </TouchableHighlight>
            <Text style={tw`text-2xl ml-20`}>Track Order</Text>
            </View>
            {/* Timing */}
            <View>
                <View style={tw`flex flex-row justify-evenly gap-5 items-center m-3`} >
                <TouchableHighlight>
                    <Text style={tw`bg-green-500 text-lg text-white text-center p-2  w-35   rounded-md`}>Active Order</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={tw`text-lg`}>Past Order</Text>
                </TouchableHighlight>
                </View>
            {/* Text */}
                <View style={tw`  w-80 pl-6 items-center m-2`}>
                    <Text>Please check your order status  to get the item delivered to your Home</Text>
                </View>
            {/*Estimated Date*/}
                <View style={tw`flex flex-row justify-evenly m-2`}>
                    {/* Delivery Date */}
                    <View style={tw`flex items-center`}>
                        <Text style={tw`text-xs text-slate-400`}>Estimated Delivery</Text>
                        <Text>Oct 2,2023</Text>
                    </View>
                    {/* Order Number */}
                    <View style={tw`flex items-center`}>
                        <Text style={tw`text-xs text-slate-400`}>Order Number</Text>
                        <Text>#0924850984</Text>
                    </View>
                </View>
            {/* Line */}
                <View style={tw`bg-slate-400 h-0.2 w-80 ml-6 mt-1 mb-8`}></View>
                {/* Tracking */}
                <View style={tw`flex  items-center justify-center`}>
                    {/* Date  */}
                    <View>
                        {/* Oreder Confirm */}
                        <View style={tw`flex flex-row`}>
                        <View>
                        <AntDesign name="checkcircle" size={22} color="#50C878" />
                        <Ionicons name="ellipsis-vertical-outline" size={22} color="#50C878" />
                        <Ionicons name="ellipsis-vertical-outline" size={22} color="#50C878" />
                        </View>
                        <View style={tw`ml-4`}>
                        <Text >Order confirmed</Text>
                        <Text style={tw`text-xs text-slate-400`}>Sun,Oct 3,2023</Text>
                        </View>
                        </View>
                        {/* Packed */}
                        <View style={tw`flex flex-row`}>
                        <View>
                        <AntDesign name="checkcircle" size={22} color="#50C878" />
                        <Ionicons name="ellipsis-vertical-outline" size={22} color="#50C878" />
                        <Ionicons name="ellipsis-vertical-outline" size={22} color="#50C878" />
                        </View>
                        <View style={tw`ml-4`}>
                        <Text>Packed</Text>
                        <Text style={tw`text-xs text-slate-400`}>Tue,Oct 5,2023</Text>
                        </View>
                        </View>
                        {/* Shipped */}
                        <View style={tw`flex flex-row`}>
                        <View>
                        <AntDesign name="checkcircle" size={22} color="#50C878" />
                        <Ionicons name="ellipsis-vertical-outline" size={22} color="grey" />
                        <Ionicons name="ellipsis-vertical-outline" size={22} color="grey" />
                        </View>
                        <View style={tw`ml-4`}>
                        <Text>Shipped</Text>
                        <Text style={tw`text-xs text-slate-400`}>Thu,Oct 7,2023</Text>
                        </View>
                        </View>
                        {/* Delivered */}
                        <View style={tw`flex flex-row`}>
                        <View>
                        <AntDesign name="checkcircle" size={22} color="grey" />
                        </View>
                        <View style={tw`ml-4`}>
                        <Text >Delivered</Text>
                        <Text style={tw`text-xs text-slate-400`}>Estimated Fri,Oct 8,2023</Text>
                        </View>
                        </View>
                        
                        
                             
                    </View>
            </View>

           </View>
           {/* Line */}
           <View style={tw`bg-slate-400 h-0.2 w-80 ml-6 mt-1 mt-8`}></View>

           {/* Image */}
           <View style={tw`flex ml-6 mt-4 `}>
           <Image source={require("../image/track.png")} 
           style={tw`w-90 h-60`}/>
           </View>
        </View>
    </SafeAreaView>
    )
}
export default Track;