import {Pressable, Text, View, StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function Button({label, navigation, page, name, disabled}){
    return(
        <Pressable style={({pressed}) => [{borderRadius: pressed ? 10 : 5,},styles.pressable,{backgroundColor: disabled ? 'lightgray':'lightblue', borderColor: disabled ? 'lightgray':'lightblue'}]} onPress={()=>navigation.navigate(page, {name: name})} disabled = {disabled} >
            <Text>{label}</Text>
        </Pressable>
    )
    
}

const styles = StyleSheet.create({
    pressable:{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'lightblue',
        borderWidth: 10,
        marginHorizontal: 10,
      },
})