import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import Login from './Components/login';
import Signup from './Components/signup';
import Profile from './Components/profile';
import Track from './Components/track';
import Details from './Components/details';
import MyCart from './Components/myCart';
import Blogs from './Components/blogs';
import Video from './Components/videos';
import Payment from './Components/payement';
import Summary from './Components/summary';
import AppNavigator from './Components/appNavigation';
import Confirmed from './Components/confirmed';
import ProductList from './Components/productList';
import Address from './Components/adress';
import Choose from './Components/choose';



export default function App() {
  return (
  //  <Login/>
  // <Signup/>
  // <Profile/>
  // <Track/>
  // <Details/>
  // <MyCart/>
//  <Blogs/> 
//  <Video/> 
//  <Payment/>
  // <Summary/> 
  <AppNavigator/>
  // <Confirmed/>
  // <ProductList/>
  // <Address/>
  // <Choose/>
 

  );
}


