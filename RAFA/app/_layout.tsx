//import { Stack } from "expo-router";
import {Text, Image, View, TextInput, StyleSheet, SafeAreaView, ImageBackground, Pressable, ScrollView, Switch} from 'react-native'
import {useState} from 'react'
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
        <InputText placeHolder = "Email" value = {blank} setValue={onChangeEmail}/>
        <InputText placeHolder = "Username" value = {blank2} setValue={onChangeUsername}/>
        <InputText placeHolder="Password" value = {blank3} setValue = {onChangePassword}/>
        <Separator/>
        <Button label="Sign Up" navigation={navigation} page='Terms and Agreement' name="Terms" disabled={blank==""||blank2==""||blank3==""}/>
      
      </View>
    </View>
    
  );
}
const LoginScreen = ({navigation}) => {
  const[blank, onChangeUsername] = React.useState('')
  const[blank2, onChangePassword] = React.useState('')
  return (
    <View style = {styles.container}>
      <View style = {styles.view}>
        <InputText placeHolder="Username" value = {blank} setValue={onChangeUsername}/>
        <InputText placeHolder="Password" value = {blank2} setValue = {onChangePassword}/>
      <View style = {styles.viewRow}>
        <Button label="Login" navigation={navigation} page='Profile' name="picture" disabled={blank==""||blank2==""}/>
          <Separator/>
        <Button label="Sign Up" navigation={navigation} page='Sign Up' name="Sign Up" disabled={undefined}/>
      </View>
      
      </View>
    </View>
    
  );
};
const ProfileScreen = ({navigation, route}) => {
  return(
      <View></View>
    
    

    
  ) 

};

const TermsScreen  = ({navigation, route} )=> {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch= ()=> setIsEnabled(previousState=>!previousState)
  return(
    <View style = {styles.container}>
      <View style = {styles.view}>
        <Image source = {require('../assets/images/falcon.png')} style = {{resizeMode:'contain', flex:1, backgroundColor:'lightblue', objectFit:'scale-down'}}/>
        <View style = {[styles.container, {flex:6}]}>
          <ScrollView style = {{borderWidth:3, borderColor:'lightblue', padding: 30, flex:6}}>
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
        </View>
      
        <Separator/>
        <View style = {styles.viewRow}>
          <Switch trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#add8e6' : '#f4f3f4'}
          ios_backgroundColor="#add8e6"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style = {{margin:10}}/>
            <View style = {styles.container}>
              <Text >I agree to the</Text>
              <Text >Terms and Agreement</Text>
            </View>
          <Button label = "Continue" navigation = {navigation} page = "Profile" name = "picture" disabled = {!isEnabled} />
        </View>
      
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
          options={{title: 'Welcome to RAFA!', headerStyle: {backgroundColor: 'lightblue'}, }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerStyle:{backgroundColor:'lightblue'}}}/>
        <Stack.Screen name = "Sign Up" component = {SignUpScreen} options={{headerStyle:{backgroundColor:'lightblue'}}}/>
        <Stack.Screen name = "Terms and Agreement" component = {TermsScreen} options={{headerStyle:{backgroundColor:'lightblue'}}}/>
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
    padding:0

  },
  view:{
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'lightblue',
    flex:1,
    padding: 10,
    margin:0,
    width:'100%'
  },
  viewRow:{
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }

})
