//import { Stack } from "expo-router";
import {Text, Image, View, TextInput, StyleSheet, SafeAreaView, ImageBackground, Pressable} from 'react-native'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Button from './Button'
import InputText from './InputText'

const Stack = createNativeStackNavigator();
const Separator = () => <View style = {styles.separator}/>

const SignUpScreen = ({navigation, route}) =>{
  const[blank, onChangeEmail] = React.useState('')
  const[blank2, onChangeUsername] = React.useState('')
  const[blank3, onChangePassword] = React.useState('')
  
  return (
    <View style = {styles.container}>
      <View style = {styles.view}> 
        <InputText placeHolder = "Email"/>
        <InputText placeHolder = "Username"/>
        <InputText placeHolder="Password"/>
        <Separator/>
        <Button label="Sign Up" navigation={navigation} page = 'Profile' name = "picture"/>
      
      </View>
    </View>
    
  );
}
const LoginScreen = ({navigation}) => {
  const[blank, onChangeEmail] = React.useState('')
  const[blank2, onChangeUsername] = React.useState('')
  const[blank3, onChangePassword] = React.useState('')
  return (
    <View style = {styles.container}>
      <View style = {styles.view}>
        <InputText placeHolder="Username"/>
        <InputText placeHolder="Password"/>
      <Button label="Login" navigation={navigation} page = 'Profile' name = "picture"/>
        <Separator/>
      <Button label="Sign Up" navigation={navigation} page = 'Sign Up' name = "Sign Up"/>
      </View>
    </View>
    
  );
};
const ProfileScreen = ({navigation, route}) => {
  return(
    <View style ={{alignItems: 'center', justifyContent:'center', paddingTop:100}}>
      <Text style = {{fontSize:20, borderColor:'black', borderWidth:1, borderRadius:3}}>This is picture</Text>
      <Image style = {{alignItems: 'center', justifyContent: 'center'}}source = {require('../assets/images/image1.png')}>

      </Image>
    </View>
    
    

    
  ) 

};

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{title: 'Welcome to RAFA!!!'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name = "Sign Up" component = {SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input:{
    height:40,
    margin:12,
    borderWidth:1, 
    padding:10,
    width:400,
    borderRadius:5,
    borderColor:'lightblue'
  },
  separator:{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 0
  },
  container:{
    alignItems:'center',
    justifyContent: 'center',
    flex:1,

  },
  view:{
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'lightblue',
    flex:1/2,
    borderRadius:10
  },
  pressable:{
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'lightblue',
    borderWidth: 3,
    backgroundColor:'lightblue'
    
    
    
    

  },

})
