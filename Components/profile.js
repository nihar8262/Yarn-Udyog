import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
  useColorScheme,
} from "react-native";
import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Foundation,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tw, { useAppColorScheme } from "twrnc";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Profile = () => {
  const navigation = useNavigation();

  const goToMyCart = () => {
    navigation.navigate("mycart");
  };

  const goToBlogs = () => {
    navigation.navigate("blogs");
  };

  const goToProduct = () => {
    navigation.navigate("productlist");
  };

  const goToTrack = () => {
    navigation.navigate("track");
  };

  const goToAddress = () => {
    navigation.navigate("address");
  };

  return (
    <SafeAreaView>
      <View style={tw`w-90 ml-5 mr-3 `}>
        {/* Header */}
        <View
          style={tw`flex flex-row  m-3 items-center justify-between -mb-5 `}
        >
          <TouchableOpacity>
            <Octicons name="three-bars" size={24} color="black" />
          </TouchableOpacity>

          <Text style={tw`text-2xl p-5 mb-2 `}>Profile</Text>
          <TouchableOpacity>
            <FontAwesome name="pencil-square-o" size={24} color="black" />
          </TouchableOpacity>
          <Switch value={true} onChange={() => {}} />
        </View>

        {/*Profile  */}
        <View style={tw`flex   items-center -mb-5`}>
          {/* Image */}
          <View>
            <Image
              source={require("../image/Nihar.jpg")}
              style={tw`w-35 h-35 rounded-full border-white border-8 mb-1 `}
            />
          </View>
          {/* Image Background */}
          <View
            style={tw`flex flex-row bg-green-500 justify-between ml-4 mr-4 w-80 rounded-lg `}
          >
            <View style={tw`p-4 flex items-center `}>
              <Text style={tw`text-white font-bold text-lg`}>38</Text>
              <Text style={tw`text-white text-xs`}>Favorites</Text>
            </View>
            <View style={tw`p-4 flex items-center `}>
              <Text style={tw`text-white font-bold text-lg`}>56</Text>
              <Text style={tw`text-white text-xs`}>Orders</Text>
            </View>
          </View>
        </View>

        {/* Name & Location */}
        <View style={tw`flex items-center mt-5 `}>
          <Text style={tw`text-xl font-bold p-2 `}>Nihar Chandra Sharma</Text>
          <View style={tw`flex flex-row gap-3  `}>
            <Ionicons name="md-location-sharp" size={24} color="black" />
            <Text style={tw`text-lg text-slate-500`}>Patna</Text>
          </View>
        </View>

        <View style={tw`p-4`}>
          {/* Shipping Address */}
          <TouchableHighlight onPress={goToAddress}>
            <View
              style={tw`flex flex-row justify-between p-2 mb-1 bg-slate-100 shadow-sm `}
            >
              <View style={tw`flex flex-row `}>
                <Ionicons name="md-location-sharp" size={24} color="black" />
                <Text style={tw`text-lg ml-5`}>Shipping Address</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
          {/* Payment Settings */}
          <TouchableHighlight>
            <View
              style={tw`flex flex-row justify-between p-2 mb-1 bg-slate-100 shadow-sm`}
            >
              <View style={tw`flex flex-row justify-evenly`}>
                <MaterialIcons name="payment" size={24} color="black" />
                <Text style={tw`text-lg ml-5`}>Payment Settings</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
          {/* Order History */}
          <TouchableHighlight>
            <View
              style={tw`flex flex-row justify-between p-2  mb-1 bg-slate-100 shadow-sm`}
            >
              <View style={tw`flex flex-row  `}>
                <Entypo name="location" size={24} color="black" />
                <Text style={tw`text-lg ml-5`}>Order History</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
          {/* Track */}
          <TouchableHighlight onPress={goToTrack}>
            <View
              style={tw`flex flex-row justify-between p-2  mb-1 bg-slate-100 shadow-sm`}
            >
              <View style={tw`flex flex-row ml-2 `}>
                <Foundation name="clipboard-notes" size={24} color="black" />
                <Text style={tw`text-lg ml-5`}>Track</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
          {/* Settings */}
          <TouchableHighlight>
            <View
              style={tw`flex flex-row justify-between p-2 mb-1 bg-slate-100 shadow-sm`}
            >
              <View style={tw`flex flex-row ml-1`}>
                <MaterialIcons name="settings" size={24} color="black" />
                <Text style={tw`text-lg ml-3`}> Settings</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
          {/* Privacy Policy */}
          <TouchableHighlight>
            <View
              style={tw`flex flex-row justify-between p-2 mb-1 bg-slate-100 shadow-sm`}
            >
              <View style={tw`flex flex-row ml-1`}>
                <MaterialIcons name="privacy-tip" size={24} color="black" />
                <Text style={tw`text-lg ml-4`}>Privacy Policy</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
          {/* Logout */}
          <TouchableHighlight>
            <View
              style={tw`flex flex-row justify-between p-2 mb-1 bg-slate-100 shadow-sm`}
            >
              <View style={tw`flex flex-row ml-2`}>
                <MaterialIcons name="logout" size={24} color="black" />
                <Text style={tw`text-lg ml-3`}>Logout</Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      {/* Bottom Navbar */}
      <View style={tw` mt-1 border-t-slate-800 shadow-md h-40 `}>
        <View style={tw`flex flex-row justify-between m-6`}>
          {/* Home */}
          <TouchableOpacity onPress={goToProduct}>
            <View style={tw`flex items-center `}>
              <FontAwesome name="home" size={24} color="black" />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          {/* Service */}
          <TouchableOpacity>
            <View style={tw`flex items-center `}>
              <Entypo name="shop" size={24} color="black" />
              <Text>Service</Text>
            </View>
          </TouchableOpacity>
          {/* Cart */}
          <TouchableOpacity onPress={goToMyCart}>
            <View style={tw`flex items-center `}>
              <MaterialIcons name="shopping-cart" size={24} color="black" />
              <Text>Cart</Text>
            </View>
          </TouchableOpacity>
          {/* Traning */}
          <TouchableOpacity onPress={goToBlogs}>
            <View style={tw`flex items-center  `}>
              <MaterialCommunityIcons
                name="book-education-outline"
                size={24}
                color="black"
              />
              <Text>Traning</Text>
            </View>
          </TouchableOpacity>
          {/* Profile */}
          <TouchableOpacity>
            <View style={tw`flex items-center  `}>
              <AntDesign name="profile" size={24} color="#50C878" />
              <Text style={tw`text-green-500`}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
