import isEmpty from 'lodash/isEmpty';
import React, {useCallback, useState} from 'react';
import {StyleSheet, Alert, View, Text, TouchableOpacity, Button, Modal, Pressable} from 'react-native';
import testIDs from '../assets/testIDs';


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
       
        <View style = {{backgroundColor:'white',flex:1, alignItems:'center'}}>
        
          <Text>
            {item.info}
          </Text>
          <Pressable style = {{backgroundColor:'lightblue', width:30}} onPress={()=> setModalVisible(!modalVisible)}>
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
        <Button color={'grey'} title={'Info'} onPress={()=>setModalVisible(!modalVisible)}/>
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
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: 'black',
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
