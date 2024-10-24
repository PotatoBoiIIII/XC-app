import {Text, Image, View, TextInput, StyleSheet, SafeAreaView, ImageBackground, Pressable, ScrollView, Switch, Modal, Alert, RefreshControl, FlatList} from 'react-native'
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Athletes} from './Athletes'
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { add } from 'lodash';

const WHITE='#ffffff'
const BLACK='#000000'
const DARKBLUE='#081c64'
const LIGHTBLUE='#92C0E2'
const BLUEGREY = '#adc3d1'
const Stack = createNativeStackNavigator();
const Separator = () => <View style = {styles.separator}/>
const Tab = createBottomTabNavigator();
const DropdownOptions = [
  { label: 'Grade(ascending)', value: 'Grade(ascending)' },
  { label: 'Grade(descending)', value: 'Grade(descending)' },
  { label: 'First Name', value: 'First Name' },
  { label: 'Last Name', value: 'Last Name' },
  { label: 'Injury Status', value: 'Injury Status'},
];

type AthleteProps= {name: String, grade: Number, isInjured: boolean, Gender: String}

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
              <Switch  value={click} onValueChange={setClick} trackColor={{true : "lightblue" , false : "gray"}}/>
              <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View>
              <Pressable onPress={() => navigation.navigate('RefreshText', {name:'Refresh'})}>
                  <Text style={styles.forgetText}>Forgot Password?</Text>
              </Pressable>
          </View>
      </View>

      <View style={styles.buttonView}>
          <Pressable style={styles.button} disabled = {false} onPress={() => navigation.navigate('Home', {name:'Home'})}>
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

const HomeScreen = ()=>{
    return (
      <Tab.Navigator>
        <Tab.Screen name = "Account" component = {Account}/>
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name = "Athletes" component = {AthletesScreen}/>
      </Tab.Navigator>
    );
  }
const Account = ({navigation})=>{
  let {name, grade, isInjured} = Athletes[0]
  const [injured, changeInjured] = useState(isInjured)
  const [modalVisible, setModalVisible] = useState(false)
  return(
    <View style = {styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style = {[styles.container, {backgroundColor:'white'}]}>
            <Text style = {styles.buttonText}>Are you sure?</Text>
            <Pressable style = {styles.button} onPress = {()=> {setModalVisible(!modalVisible), changeInjured(!injured), Athletes[0].isInjured=!injured}}>
              <Text>Yes</Text>
            </Pressable>
            <Separator/>
            <Pressable style = {styles.button} onPress = {()=> setModalVisible(!modalVisible)}>
              <Text>No</Text>
            </Pressable>
          </View> 
        </Modal>
      <Text style = {styles.buttonText}>
        Welcome {name}
      </Text>
      <Text style = {styles.buttonText}>
        You are currently <Text style = {{backgroundColor: injured? 'red': 'green', borderRadius:4}}>{injured? '':' not'} injured </Text>
      </Text>
      <Text style = {styles.buttonText}>
        Did you {injured? 'recover':'get injured'}?
      </Text>
      <Pressable style = {styles.button} onPress={()=>{setModalVisible(!modalVisible)}}>
        <Text>Yes</Text>
      </Pressable>
    </View>
  )
}



const AthletesScreen = ()=>{
  let index=0
  const AthleteStatus=({name, grade, isInjured}: AthleteProps)=>{
    index+=1

    return(
        <View style = {{flexDirection:'row', justifyContent: 'space-evenly', margin:0, borderRightWidth:3, borderLeftWidth:3, borderTopWidth:3, padding:5, borderColor:LIGHTBLUE, width: 350}}>
            <Text>{String(index)}. </Text>
            <Text style = {{flex:1}}>{name}</Text>     
            <Text style = {{flex:1/3, marginHorizontal:5, backgroundColor: isInjured? 'red': 'green', borderRadius:3, borderWidth:3, borderColor: isInjured? 'red': 'green'}}>
              {isInjured? 'Injured': 'Healthy'}    
                    
            </Text>
            <Text style = {{flex:1}}>grade: {String(grade)}</Text>
        </View>
    )
  }
  const [refreshing, setRefreshing] = React.useState(false);
  const [value, setValue] = useState<string | undefined>(); ;
  const [isFocus, setIsFocus] = useState(false);
  const [Gender, changeGender]  = useState('Boy')

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <View>
            
          </View>
        );
      }
      return null;
    };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if(value=='First Name'){
    Athletes.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })); 
  }
  else if(value=="Grade(ascending)"){
    Athletes.sort((a,b)=> {return a.grade-b.grade})
  }
  else if(value=='Grade(descending)'){
    Athletes.sort((a,b)=> {return b.grade-a.grade})
  }
  else if(value=='Injury Status'){
    Athletes.sort((a,b)=>{return Number(b.isInjured)-Number(a.isInjured)})
  }
  else if(value =="Last Name"){
    Athletes.sort((a, b) => a.name.substring(a.name.indexOf(' ')).localeCompare(b.name.substring(b.name.indexOf(' ')), undefined, { sensitivity: 'base' })); 
  }
  
  return(
    <View style = {styles.container}>
      <View style = {{flexDirection:'row', flex:1/10, paddingHorizontal:20, alignItems:'center', borderBottomWidth :1, justifyContent:'center', shadowColor: '#171717', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,}}>

        {renderLabel()}
        <Dropdown
          style = {{width:200, backgroundColor:'lightgrey', margin:10, borderWidth:5, borderColor:'lightgrey', borderRadius:5}}
          data={DropdownOptions}
          placeholder={!isFocus ? 'Sort by' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          } } labelField={'label'} valueField={'label'}       >

        </Dropdown>
        <Pressable style = {{backgroundColor: Gender=='Boy'? LIGHTBLUE:'grey',  borderColor:Gender=='Boy'? LIGHTBLUE:'grey', borderTopLeftRadius: 5, borderBottomLeftRadius:5, borderWidth:5}} onPress={()=>{index=0,changeGender('Boy')}} disabled = {Gender=="Boy"}>
          <Text>Boys</Text>
        </Pressable>
        <Pressable style = {{backgroundColor: Gender=='Girl'? LIGHTBLUE:'grey', borderColor:Gender=='Girl'? LIGHTBLUE:'grey', borderTopRightRadius: 5, borderBottomRightRadius:5, borderWidth:5 }} onPress={()=>{index=0, changeGender('Girl')}} disabled = {Gender=="Girl"}>
          <Text>Girls</Text>
        </Pressable>
       </View>
      <View style = {styles.container}>
    <FlatList
    style = {{flex:1}}
    data = {Athletes.filter((athlete)=>{return athlete.gender==Gender})}
    renderItem={({item}) => <AthleteStatus name={item.name} grade={item.grade} isInjured={item.isInjured} Gender={item.gender}/>}
    keyExtractor={item => item.name}
    refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
    </FlatList>
    
    </View>
    </View>
  )
  
  
}

const CalendarScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState('')
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [info, setInfo] = useState('')
  const [duration, setDuration] = useState('')
  const [selected, setSelected] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [open, setOpen]=useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    setDate(date)
    hideDatePicker();
  };

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("A date has been picked: ", time);
    setTime(String(time.toLocaleTimeString([], {timeStyle:'short'})))
    hideTimePicker();
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return(
    <ScrollView
    contentContainerStyle={styles.scrollView}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
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
          <View style = {[styles.container,{backgroundColor:'white'}]}>
            
            <InputText placeHolder="event name" value={name} setValue={setname} spaces={true}/>
            <Pressable  style = {{borderColor: LIGHTBLUE, borderWidth:3, borderRadius:5, margin:6}} onPress={()=> showTimePicker()}><Text>Set Time: {time}</Text></Pressable>
            <DateTimePickerModal isVisible={isTimePickerVisible} mode = 'time' onConfirm={handleTimeConfirm} onCancel={hideTimePicker}></DateTimePickerModal>
            <Pressable style = {{borderColor: LIGHTBLUE, borderWidth:3, borderRadius:5, margin:6}} onPress={()=> showDatePicker()}><Text>Set Date: {String(date.toDateString())}</Text></Pressable>
            <DateTimePickerModal isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}></DateTimePickerModal>
            
      
            <InputText placeHolder="Duration" value={duration} setValue={setDuration} spaces={true}/>
            
            <TextInput placeholder = "Info" style = {styles.input} value = {info} onChangeText = {setInfo} placeholderTextColor={BLUEGREY} multiline = {true}/>
            <View style = {[styles.buttonView, {flexDirection:'row', alignItems:'center', justifyContent:'space-evenly',}]}>
            <Pressable onPress={()=> {agendaItems.push({title:String(date), data:[{ hour: time, duration:String(duration), title:String(name), info:String(info)}]}), setModalVisible(!modalVisible), setDate(new Date()), setname(''), setTime(''), setInfo(''), setDuration('')}} style={styles.button} disabled = {name==""||time==""||duration=="" ? true:false}>
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
        style={{backgroundColor:LIGHTBLUE, borderWidth:10, borderColor:LIGHTBLUE}}
        onPress={() => setModalVisible(true)}>
        <Text>Add Event</Text>
      </Pressable>
        <AgendaInfiniteListScreen/>
      </View>
      </ScrollView>
    
    

    
  ) 

};

const TermsScreen  = ({navigation, route} )=> {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch= ()=> setIsEnabled(previousState=>!previousState)
  return(
    <View style = {styles.container}>
      <View style = {styles.view}>
        
        <View style = {[styles.container, {flex:6}]}>
          <ScrollView style = {{borderWidth:3, borderColor:LIGHTBLUE, padding: 30, flex:6}}>
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
          <Button label = "Continue" navigation = {navigation} page = "Home" name = "Home" disabled = {!isEnabled} />
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
          options={{title: 'Welcome to RAFA!', headerStyle: {backgroundColor: LIGHTBLUE}, }}
        />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{headerStyle:{backgroundColor:LIGHTBLUE}}}/>
        <Stack.Screen name = "Sign Up" component = {SignUpScreen} options={{headerStyle:{backgroundColor:LIGHTBLUE}}}/>
        <Stack.Screen name = "Terms and Agreement" component = {TermsScreen} options={{headerStyle:{backgroundColor:LIGHTBLUE}}}/>
        <Stack.Screen name = "Home" component = {HomeScreen} options = {{headerStyle:{backgroundColor:LIGHTBLUE}}}/>
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
    marginVertical:12,
    borderWidth:3, 
    borderRadius:5,
    borderColor:LIGHTBLUE, 
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
    borderColor: LIGHTBLUE,
    flex:1,
    padding: 10,
    margin:0,
    width:'100%'
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
})
