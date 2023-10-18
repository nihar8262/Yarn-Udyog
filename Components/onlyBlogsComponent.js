import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
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


const OnlyBlogsComponent=()=>{

  const navigation = useNavigation();
  const goToDetails = () => {
    navigation.navigate("details");
  };
    return (
        <ScrollView>
            <View style={tw`flex ml-2 mr-2`}>
            {/* Cards 1*/}
            <View style={tw`flex flex-row items-center mt-6`}>
              {/* Image */}
              <View>
                <Image
                  source={require("../image/process2.jpg")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
              </View>

              {/* Content */}
              <TouchableWithoutFeedback onPress={goToDetails}>
              <View>
                <Text style={tw`font-bold`}>Best wool sorting technique</Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool. Closely examined, the fleece of the common sheep shows
                  thirteen or fourteen different qualities of ...
                  <Text style={tw`font-bold text-green-500`}>Read More</Text>
                </Text>
              </View>
              </TouchableWithoutFeedback>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 2*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View>
                <Image
                  source={require("../image/English-wool.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>
                  English wool sorting technique
                </Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool. Closely examined, the fleece of the common sheep shows
                  thirteen or ...
                  <Text style={tw`font-bold text-green-500`}>Read More</Text>
                </Text>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 3*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View>
                <Image
                  source={require("../image/Spanish-wool-sorting.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>
                  Spanish wool sorting technique
                </Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool. Closely examined, the fleece of the common sheep shows
                  thirteen or fourteen different...
                  <Text style={tw`font-bold text-green-500`}>Read More</Text>
                </Text>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 4*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View>
                <Image
                  source={require("../image/Merino-wool-sorting.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>Merino wool sorting technique</Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool. Closely examined, the fleece of the common sheep shows
                  thirteen or fourteen different qualities...
                  <Text style={tw`font-bold text-green-500`}>Read More</Text>
                </Text>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 5*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View>
                <Image
                  source={require("../image/process1.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>
                  Mordern wool sorting technique
                </Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool. Closely examined, the fleece of the common sheep shows
                  thirteen or fourteen different qualities...
                  <Text style={tw`font-bold text-green-500`}>Read More</Text>
                </Text>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>

            {/* Cards 6*/}
            <View style={tw`flex flex-row items-center  w-60 `}>
              {/* Image */}
              <View>
                <Image
                  source={require("../image/sheepshearer.png")}
                  style={tw`w-30 h-27 mr-3 ml-3 rounded-l-md`}
                />
              </View>

              {/* Content */}
              <View>
                <Text style={tw`font-bold`}>Traditional sorting technique</Text>
                <Text style={tw`text-xs text-slate-400 w-50`}>
                  Sorting is the process of separating different qualities of
                  wool. Closely examined, the fleece of the common sheep shows
                  thirteen or fourteen different qualities...
                  <Text style={tw`font-bold text-green-500`}>Read More</Text>
                </Text>
              </View>
            </View>
            {/* Line */}
            <View style={tw`bg-slate-400 h-0.2 w-85 ml-4 mt-1 mb-8`}></View>
          </View>
        </ScrollView>

    )
}

export default OnlyBlogsComponent;