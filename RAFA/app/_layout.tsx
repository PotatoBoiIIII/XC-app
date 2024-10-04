//import { Stack } from "expo-router";
import {Text, Image, View, TextInput, StyleSheet, SafeAreaView, ImageBackground, Pressable, ScrollView, Switch, Modal, Alert, RefreshControl} from 'react-native'
import {useState} from 'react'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Button from './Button'
import InputText from './InputText'
import {Calendar} from 'react-native-calendars'
import AgendaInfiniteListScreen from './Agenda';
import {agendaItems} from '../mocks/agendaItems'
import {dates} from '../mocks/agendaItems'

const Stack = createNativeStackNavigator();
const Separator = () => <View style = {styles.separator}/>

const SignUpScreen = ({navigation, route}) =>{
  const[blank, onChangeEmail] = React.useState('')
  const[blank2, onChangeUsername] = React.useState('')
  const[blank3, onChangePassword] = React.useState('')
  
  return (
    <View style = {styles.container}>
      <View style = {styles.view}> 
        <InputText placeHolder = "Email" value = {blank} setValue={onChangeEmail} spaces={false}/>
        <InputText placeHolder = "Username" value = {blank2} setValue={onChangeUsername} spaces={false}/>
        <InputText placeHolder="Password" value = {blank3} setValue = {onChangePassword} spaces={false}/>
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
        <InputText placeHolder="Username" value = {blank} setValue={onChangeUsername} spaces={false}/>
        <InputText placeHolder="Password" value = {blank2} setValue = {onChangePassword} spaces={false}/>
      <View style = {styles.viewRow}>
        <Button label="Login" navigation={navigation} page='Calendar' name="calendar" disabled={blank==""||blank2==""}/>
          <Separator/>
        <Button label="Sign Up" navigation={navigation} page='Sign Up' name="Sign Up" disabled={undefined}/>
      </View>
      
      </View>
    </View>
    
  );
};
const CalendarScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [selected, setSelected] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return(
    //<View style = {[styles.container, {flexDirection:'row'}]}>
    <View style = {[styles.container, {flex:1}] }>
        

        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.container, {backgroundColor: 'white'}]}>
          <View>
            
            <InputText placeHolder="event name" value={name} setValue={setname} spaces={true}/>
            <InputText placeHolder="Time" value={time} setValue={setTime} spaces={true}/>
            <InputText placeHolder="Date: MM/DD/YYYY" value={date} setValue={setDate} spaces={true}/>
            <InputText placeHolder="Duration" value={duration} setValue={setDuration} spaces={true}/>
            <Pressable onPress={()=> agendaItems.push({title:date, data:[{hour:String(time), duration:String(duration), title:String(name)}]}) && setModalVisible(!modalVisible)} style = {{backgroundColor:'lightblue', borderWidth:10, borderColor:'lightblue'}}>
              <Text>
                add event
              </Text>
            </Pressable>
            
          </View>
        </View>
      </Modal>
      <Pressable
        style={{backgroundColor:'lightblue', borderWidth:10, borderColor:'lightblue'}}
        onPress={() => setModalVisible(true)}>
        <Text>Add Event</Text>
      </Pressable>
        <AgendaInfiniteListScreen/>
     
        
        
        {/* <ScrollView contentContainerStyle = {{flex:1}}
      refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          
      }>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>


        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>

        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>


        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>
        <Text>refresg</Text>

      </ScrollView>  */}
      </View>
    
    

    
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
          <Button label = "Continue" navigation = {navigation} page = "Calendar" name = "calendar" disabled = {!isEnabled} />
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
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{headerStyle:{backgroundColor:'lightblue'}}}/>
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
