import {Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'


const WHITE='#ffffff'
const BLACK='#000000'
const DARKBLUE='#081c64'
const LIGHTBLUE='#92c0e2'
const BLUEGREY = '#adc3d1'

export default function InputText({placeHolder, value, setValue, spaces}){
    return(
        <TextInput 
          style = {styles.input}
          onChangeText = {setValue}
          value = {spaces? value : value.replaceAll(" ", "")}
          placeholder= {placeHolder}
          placeholderTextColor={BLUEGREY}
        />

    )
}

const styles = StyleSheet.create({
    
    input:{
        height:40,
        marginVertical:12,
        borderWidth:3, 
        borderRadius:5,
        borderColor:LIGHTBLUE, 
        width:250
      },    
    
})