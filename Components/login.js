import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AwesomeButton, {ThemedButton} from 'react-native-really-awesome-button';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Login = () => {

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("signup");
  };
  
  return (
    <View>
      {/* Header Image */}
      <View style={{marginTop: 150}}>
        <Image
          source={require('../image/sheep-box.png')}
          style={{width: 100, height: 100}}
        />
      
      </View>
      
      <View
        style={{
          backgroundColor: '#f8b32b',
          height: 800,
          borderTopRightRadius: 100,
        }}>
        <View style={styles.container}>
          <View style={{alignItems: 'center', margin: 40}}>
            <Text style={styles.head}>Login</Text>
            <Text style={{color: 'black', fontSize: 12}}>
              Sign in to continue
            </Text>
          </View>

          <View style={{marginBottom: 10}}>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} />
          </View>

          
          <View style={styles.downcontainer}>
            <View style={{margin:10}}>
            <AwesomeButton
              onPress={handlePress}
              type="login"
              backgroundColor="black"
              width={245}
              height={50}>
              Login
            </AwesomeButton>
            </View>
          
           <View style={{}}>
           <Text
              style={{
                color: 'black',
                fontSize: 11,
                marginRight: 20,
                fontWeight: 'bold',
                
              }}>
              Remember Me
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 11,
                marginLeft: 40,
                fontWeight: 'bold',
                
              }}>
              Forget Password?
            </Text>
           </View>
             
            <View>
            <View style={{backgroundColor:'white' ,width:100,height:2,opacity:0.5}}></View>
            <Text style={{
                color: 'black',
                fontSize: 11,
                marginRight: 20,
                fontWeight: 'bold',
                
              }}>Or Log In with </Text>
            <View style={{backgroundColor:'white' ,width:100,height:2,opacity:0.5}}></View>
            </View>

           <View >
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity
              style={styles.buttonGPlusStyle}
              activeOpacity={0.5}>
              <Image
                source={require('../image/goggle1.jpg')}
                style={styles.buttonImageIconStyle}
              />
              <View style={styles.buttonIconSeparatorStyle} />
              <Text style={styles.buttonTextStyle}>
                 Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonFacebookStyle}
              activeOpacity={0.5}>
              <Image
                source={require('../image/facebook.png')}
                style={styles.buttonImageIconStyle}
              />
              <View style={styles.buttonIconSeparatorStyle} />
              <Text style={styles.buttonTextStyle}> Facebook</Text>
            </TouchableOpacity>
            </View>

            <View style={{alignItems:'center'}}>
            <Text style={styles.outerTxt}>Didn't have an Account?
              <Text style={styles.innerTxt}>Sign Up</Text>
            </Text>
            </View>

           </View>

            
            
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  downcontainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom:20
  },
  head: {
    fontSize: 45,
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 11,
    justifyContent: 'flex-start',
    marginBottom: 3,
  },
  input: {
    backgroundColor: 'white',
    opacity: 0.6,
    width: 250,
    borderRadius: 12,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
    width:100
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    paddingRight:5
  },
  outerTxt:{
     fontSize:10,
     fontWeight:'bold',
     color:'black',
  },
  innerTxt:{
    color:'dodgerblue'
  }
});

export default Login;
