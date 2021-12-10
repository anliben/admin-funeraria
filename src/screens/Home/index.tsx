import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import { Card, Icon,Image, ListItem } from 'react-native-elements';


export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {

  const cemiterioNav = () =>{
    navigation.navigate('CemiterioScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <Card containerStyle={styles.cardStyle}>
         <TouchableOpacity onPress={cemiterioNav }>
           <Icon
            name='info'
            color='#00aced' />
         <Card.Title>Cemitério</Card.Title>
      </TouchableOpacity>
       </Card>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardStyle:{
    width: '40%',
    height: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
