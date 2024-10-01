import {Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function InputText({placeHolder, value, setValue}){
    return(
        <TextInput 
          style = {styles.input}
          onChangeText = {setValue}
          value = {value}
          placeholder= {placeHolder}
          placeholderTextColor={'grey'}
        />

    )
}

const styles = StyleSheet.create({
    
    input:{
        height:40,
        marginVertical:12,
        borderWidth:3, 
        borderRadius:5,
        borderColor:'lightblue', 
        width:'80%'
      },    
    
})