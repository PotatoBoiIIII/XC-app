import * as React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { create } from 'react-test-renderer';
import ImageViewer from '/Users/lyen9/Microsoft VS Code/React/XC-app/XC_Status/components/ImageViewer';
const image1 = require('/Users/lyen9/Microsoft VS Code/React/XC-app/XC_Status/assets/images/image1.png')
const image2 = require('/Users/lyen9/Microsoft VS Code/React/XC-app/XC_Status/assets/images/image2.png')


const Tab = createBottomTabNavigator();



function Status() {
  return (
    <View style={styles.container}>
      <Image style = {styles.imageContainer} source = {image1}/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
      <Image style = {styles.imageContainer} source = {image2}/>
    </View>
    </View>
  );
}


export default function Index() {
  return (
    <NavigationContainer independent ={true}>
      <Tab.Navigator>
        <Tab.Screen name = "Status" component = {Status} />
        <Tab.Screen name = "settings" component = {SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    flex:1,
    paddingTop: 58,
    width: 320,
    height:440,
  },
})