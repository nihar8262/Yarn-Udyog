import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,TextInput
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
import OnlyBlogsComponent from "./onlyBlogsComponent";
import OnlyVideoComponent from "./OnlyVideoComponent";
const Stack = createNativeStackNavigator();

const Blogs = () => {
  const navigation = useNavigation();

  const [showBlogs,setBlogs]=useState(true);

  const goToVideos = () => {
    navigation.navigate("video");
  };

  return (
    <SafeAreaView>
      
        <View style={tw`w-90 pl-2`}>
          {/* Header */}
          <View style={tw`flex flex-row items-center m-4 pl-3 justify-between`}>
            <TouchableHighlight>
            <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableHighlight>
            <View
              style={tw`flex flex-row bg-slate-100 justify-start items-center p-2 w-50 rounded-lg gap-2 mr-2`}
            >
              <FontAwesome name="search" size={24} color="grey" />
              <TextInput placeholder="Search Here..." />
            </View>
            <TouchableHighlight>
              <MaterialIcons name="g-translate" size={24} color="black" />
            </TouchableHighlight>
          </View>
        </View>

        {/* Blogs & videos */}
        <View style={tw`flex items-center`}>
          {/* Blogs */}
          <View
            style={tw`flex flex-row justify-evenly gap-3 items-center  bg-slate-100 h-17 w-85 rounded-lg`}
          >

            {
              showBlogs ? 
              <TouchableOpacity onPress={()=>setBlogs(true)}>
              <Text  style={tw`text-lg  bg-green-500 text-white w-35 p-2  text-center rounded-md `}
              >
                Blogs
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>setBlogs(true)}>
              <Text  style={tw`text-lg  bg-white  w-35 p-2  text-center rounded-md `}
              >
                Blogs
              </Text>
            </TouchableOpacity>
            }

            {
              showBlogs? 
              <TouchableOpacity onPress={()=>setBlogs(false)}>
              <Text
                style={tw`bg-white text-lg  text-center p-2  w-35   rounded-md`}
              >
                Videos
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={()=>setBlogs(false)}>
              <Text
                style={tw`bg-white text-lg bg-green-500 text-white text-center p-2  w-35   rounded-md`}
              >
                Videos
              </Text>
            </TouchableOpacity>
            }
            

            
          </View>
          {/* Content */}

          {
            showBlogs?(<OnlyBlogsComponent/>):(<OnlyVideoComponent/>)
          }
          
        </View>
      
    </SafeAreaView>
  );
};
export default Blogs;
