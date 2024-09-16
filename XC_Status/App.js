import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const image1 = require('./assets/images/image1.png')
const image2 = require('./assets/images/image2.png')
const Tab = createBottomTabNavigator()


function Status(){
  return(
    <View style ={styles.container}>
      <Image style={styles.image} source = {image1}>

      </Image>
    </View>
      
   
  )
}

function Settings(){
  return(
    <View style={styles.container}>
      <Image style={styles.image} source = {image2}>

      </Image>
    </View>
      
   
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="status" component={Status} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 320,
    height: 440,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  }
});
