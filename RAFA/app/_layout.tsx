//import { Stack } from "expo-router";
import {Text, Image, View, TextInput, StyleSheet, SafeAreaView, ImageBackground, Pressable, ScrollView} from 'react-native'
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
        <Button label="Sign Up" navigation={navigation} page = 'Terms and Agreement' name = "Terms"/>
      
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
    <View style ={styles.container}>
      <Text style = {{fontSize:20, borderColor:'black', borderWidth:1, borderRadius:3}}>This is picture</Text>
      <Image style = {{alignItems: 'center', justifyContent: 'center'}}source = {require('../assets/images/image1.png')}>

      </Image>
    </View>
    
    

    
  ) 

};

const termsScreen  = ({navigation, route} )=> {
  return(
    <View style = {styles.container}>
      <View style = {styles.view}>

      
      <ScrollView style = {{borderWidth:3, borderColor:'lightblue', padding: 30}}>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>
        <Text>please work</Text>

        <Text>please work</Text>
        <Text>please work</Text>
      </ScrollView>
      <Separator/>
      <Button label = "Continue" navigation = {navigation} page = "Profile" name = "picture"/>
      </View>
    </View>
  )
  
}

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
        <Stack.Screen name = "Terms and Agreement" component = {termsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
    borderRadius:10,
    padding: 30
  },

})
