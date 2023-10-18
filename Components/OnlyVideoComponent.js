import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Octicons,
  FontAwesome,
  FontAwesome5,
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

const OnlyVideoComponent = () => {
  const navigation = useNavigation();

  const goToBlogs = () => {
    navigation.navigate("blogs");
  };
  return (
    <ScrollView>
      <SafeAreaView>

        {/* Blogs & videos */}
        <View style={tw`flex items-center`}>
          {/* Blogs */}
          
          {/* Content */}
          <View style={tw`flex ml-2 mr-2`}>
            {/* Cards 1*/}
            <View style={tw`flex flex-row items-center mt-6`}>
              {/* Image */}
              <View style={tw`relative`}>
                <Image
                  source={require("../image/process2.jpg")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
                <View
                  style={tw`absolute ml-13 mt-8 bg-slate-200/75 w-10 h-10 justify-center items-center rounded-full `}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="play" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>Best wool sorting technique</Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool.
                </Text>
                <TouchableOpacity>
                  <View
                    style={tw`bg-amber-400 p-1 w-25 items-center mt-3 rounded-md`}
                  >
                    <Text style={tw`text-white`}>Play Video</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 2*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View style={tw`relative`}>
                <Image
                  source={require("../image/English-wool.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
                <View
                  style={tw`absolute ml-13 mt-8 bg-slate-200/75 w-10 h-10 justify-center items-center rounded-full `}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="play" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>
                  English wool sorting technique
                </Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool.
                </Text>
                <TouchableOpacity>
                  <View
                    style={tw`bg-amber-400 p-1 w-25 items-center mt-3 rounded-md`}
                  >
                    <Text style={tw`text-white`}>Play Video</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 3*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View style={tw`relative`}>
                <Image
                  source={require("../image/Spanish-wool-sorting.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
                <View
                  style={tw`absolute ml-13 mt-8 bg-slate-200/75 w-10 h-10 justify-center items-center rounded-full `}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="play" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>
                  Spanish wool sorting technique
                </Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool.
                </Text>
                <TouchableOpacity>
                  <View
                    style={tw`bg-amber-400 p-1 w-25 items-center mt-3 rounded-md`}
                  >
                    <Text style={tw`text-white`}>Play Video</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 4*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View style={tw`relative`}>
                <Image
                  source={require("../image/Merino-wool-sorting.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
                <View
                  style={tw`absolute ml-13 mt-8 bg-slate-200/75 w-10 h-10 justify-center items-center rounded-full `}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="play" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>Merino wool sorting technique</Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool.
                </Text>
                <TouchableOpacity>
                  <View
                    style={tw`bg-amber-400 p-1 w-25 items-center mt-3 rounded-md`}
                  >
                    <Text style={tw`text-white`}>Play Video</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 5*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View style={tw`relative`}>
                <Image
                  source={require("../image/process1.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
                <View
                  style={tw`absolute ml-13 mt-8 bg-slate-200/75 w-10 h-10 justify-center items-center rounded-full `}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="play" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>
                  Mordern wool sorting technique
                </Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool.
                </Text>
                <TouchableOpacity>
                  <View
                    style={tw`bg-amber-400 p-1 w-25 items-center mt-3 rounded-md`}
                  >
                    <Text style={tw`text-white`}>Play Video</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 6*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View style={tw`relative`}>
                <Image
                  source={require("../image/sheepshearer.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
                <View
                  style={tw`absolute ml-13 mt-8 bg-slate-200/75 w-10 h-10 justify-center items-center rounded-full `}
                >
                  <TouchableOpacity>
                    <FontAwesome5 name="play" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>Traditional sorting technique</Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool.
                </Text>
                <TouchableOpacity>
                  <View
                    style={tw`bg-amber-400 p-1 w-25 items-center mt-3 rounded-md`}
                  >
                    <Text style={tw`text-white`}>Play Video</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default OnlyVideoComponent;
