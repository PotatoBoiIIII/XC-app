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


const LoginForm = ({navigation}) =>{
  const [click,setClick] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] =  useState("");
return (
  <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
      autoCapitalize='none' />
          <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
      autoCapitalize='none'/>
      </View>
      <View style={styles.rememberView}>
          <View style={styles.switch}>
              <Switch  value={click} onValueChange={setClick} trackColor={{true : "lightblue" , false : "gray"}} navigation/>
              <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View>
              <Pressable onPress={() => navigation.navigate('Calendar', {name:'Calendar'})}>
                  <Text style={styles.forgetText}>Forgot Password?</Text>
              </Pressable>
          </View>
      </View>

      <View style={styles.buttonView}>
          <Pressable style={styles.button} disabled = {false} onPress={() => navigation.navigate('Calendar', {name: 'Calendar'})}>
              <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View>
        <Text style={styles.footerText}>Don't Have Account?
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'white',
          }]} onPress={()=> navigation.navigate('Sign Up', {name:'Sign Up'})}>
            <Text style={styles.signup}>  Sign up </Text>
        </Pressable>
        </Text>
      </View>
      
  </SafeAreaView>
)
}
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
const CalendarScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [info, setInfo] = useState('')
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
    <View style = {[styles.container] }>
        

        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style = {[styles.container,{backgroundColor:'white', width:'50%'}]}>
            
            <InputText placeHolder="event name" value={name} setValue={setname} spaces={true}/>
            <InputText placeHolder="Time" value={time} setValue={setTime} spaces={true}/>
            <InputText placeHolder="Date: MM/DD/YYYY" value={date} setValue={setDate} spaces={true}/>
            <InputText placeHolder="Duration" value={duration} setValue={setDuration} spaces={true}/>
            <InputText placeHolder="Info" value={info} setValue={setInfo} spaces={true}/>
            <View style = {[styles.buttonView, {flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',}]}>
            <Pressable onPress={()=> agendaItems.push({title:date, data:[{hour:String(time), duration:String(duration), title:String(name), info:String(info)}]}) && setModalVisible(!modalVisible)} style={styles.button} disabled = {name==""||time==""||date==""||duration=="" ? true:false}>
              <Text style = {styles.buttonText}>
                add event
              </Text>
            </Pressable>
            <Pressable onPress={()=>setModalVisible(!modalVisible)} style = {styles.button}>
              <Text style = {styles.buttonText}>
                Exit
              </Text>
            </Pressable>
            </View>
            
          </View>
        </View>
      </Modal>
      <Pressable
        style={{backgroundColor:'lightblue', borderWidth:10, borderColor:'lightblue'}}
        onPress={() => setModalVisible(true)}>
        <Text>Add Event</Text>
      </Pressable>
        <AgendaInfiniteListScreen/>
      </View>
    
    

    
  ) 

};

const TermsScreen  = ({navigation, route} )=> {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch= ()=> setIsEnabled(previousState=>!previousState)
  return(
    <View style = {styles.container}>
      <View style = {styles.view}>
        
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
        <View style = {[styles.container, {flexDirection:'row'}]}>
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
          name="loginForm"
          component={LoginForm}
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
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "blue"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "blue",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center",
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "blue"
  },
  button : {
    backgroundColor : "lightblue",
    height : 45,
    borderColor : "lightblue",
    borderWidth  : 5,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "black"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "blue",
    fontSize : 13
  },
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
})
