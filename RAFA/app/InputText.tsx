import {Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function InputText({placeHolder}){
    const [blank, onChange] = React.useState('')
    return(
        <TextInput 
          style = {styles.input}
          onChangeText = {onChange}
          value = {blank}
          placeholder= {placeHolder}
        />

    )
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
    
})