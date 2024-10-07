import {Pressable, Text, View, StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const WHITE='#ffffff'
const BLACK='#000000'
const DARKBLUE='#081c64'
const LIGHTBLUE='#92c0e2'
const BLUEGREY = '#adc3d1'
export default function Button({label, navigation, page, name, disabled}){
    return(
        <Pressable style={({pressed}) => [{borderRadius: pressed ? 10 : 5,},styles.pressable,{backgroundColor: disabled ? 'lightgray':LIGHTBLUE, borderColor: disabled ? 'lightgray':LIGHTBLUE}]} onPress={()=>navigation.navigate(page, {name: name})} disabled = {disabled} >
            <Text>{label}</Text>
        </Pressable>
    )
    
}

const styles = StyleSheet.create({
    pressable:{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:LIGHTBLUE,
        borderWidth: 10,
        marginHorizontal: 10,
      },
})