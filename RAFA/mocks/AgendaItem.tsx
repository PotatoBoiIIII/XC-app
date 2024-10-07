import isEmpty from 'lodash/isEmpty';
import React, {useCallback, useState} from 'react';
import {StyleSheet, Alert, View, Text, TouchableOpacity, Button, Modal, Pressable} from 'react-native';
import testIDs from '../assets/testIDs';
const WHITE='#ffffff'
const BLACK='#000000'
const DARKBLUE='#081c64'
const LIGHTBLUE='#92c0e2'
const BLUEGREY = '#adc3d1'

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const {item} = props;

  const buttonPressed =() => {
    
    <View>
    </View>
  };

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
       
        <View style = {{backgroundColor:'white',flex:1, alignItems:'center', justifyContent:'center'}}>
        
          <Text style = {{borderWidth:1, borderColor:'bl', margin:10, borderRadius:5, padding:10}}>
            {item.info==null ? "no info":item.info}
          </Text>
          <Pressable style = {{backgroundColor:LIGHTBLUE, borderWidth:10, borderColor:LIGHTBLUE, borderRadius:5}} onPress={()=> setModalVisible(!modalVisible)}>
          <Text>
            Exit
          </Text>
        </Pressable>
        </View>
  
       

        </Modal>
  
    <TouchableOpacity onPress={itemPressed} style={styles.item} testID={testIDs.agenda.ITEM}>
      <View>
        <Text style={styles.itemHourText}>{item.hour}</Text>
        <Text style={styles.itemDurationText}>{item.duration}</Text>
      </View>
      <Text style={styles.itemTitleText}>{item.title}</Text>
      <View style={styles.itemButtonContainer}>
        <Button color={BLUEGREY} title={'Info'} onPress={()=>setModalVisible(!modalVisible)}/>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default React.memo(AgendaItem);


const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row'
  },
  itemHourText: {
    color: BLACK
  },
  itemDurationText: {
    color: BLUEGREY,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: BLACK,
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14
  }
});
