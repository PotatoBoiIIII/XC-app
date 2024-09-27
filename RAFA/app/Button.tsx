import {Pressable, Text, View, StyleSheet} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function Button({label, navigation, page, name}){
    return(
        <Pressable style={({pressed}) => [{borderRadius: pressed ? 10 : 5,},styles.pressable,]} onPress={()=>navigation.navigate(page, {name: name})} >
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
        backgroundColor:'lightblue'
      },
})