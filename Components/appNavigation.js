import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import OnBoarding from "./onBoarding";
import Splash from "./splash";
import Signup from "./signup";
import ProductList from "./productList";
import MyCart from "./myCart";
import Summary from "./summary";
import Payment from "./payement";
import Confirmed from "./confirmed";
import Details from "./details";
import Profile from "./profile";
import Blogs from "./blogs";
import Video from "./videos";
import Address from "./adress";
import Choose from "./choose";
import Track from "./track";
import Whishlist from "./whislist";

const Stack = createNativeStackNavigator();

 const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen  name="OnBoarding"  component={OnBoarding}/>
                <Stack.Screen  name="choose"  component={Choose}/>
                <Stack.Screen  name="login"  component={Login}/>
                <Stack.Screen  name="signup"  component={Signup}/>
                <Stack.Screen name="profile" component={Profile}/>
                <Stack.Screen name="blogs" component={Blogs}/>
                <Stack.Screen name="track" component={Track}/>
                <Stack.Screen name="video" component={Video}/>
                <Stack.Screen name="productlist" component={ProductList}/>
                <Stack.Screen name="whishlist" component={Whishlist}/>
                <Stack.Screen name="details" component={Details}/>
                <Stack.Screen name="mycart" component={MyCart}/>
                <Stack.Screen name="address" component={Address}/>
                <Stack.Screen name="orderSummary" component={Summary}/>
                <Stack.Screen name="payment" component={Payment}/>
                <Stack.Screen name="confirmed" component={Confirmed}/>
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;