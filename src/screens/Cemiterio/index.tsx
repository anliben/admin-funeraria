import * as React from 'react';
import { StyleSheet,SafeAreaView , TouchableOpacity, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import { Card, Icon,Image, ListItem } from 'react-native-elements';
import Cemiterio from '../../../constants/Cemiterio';
import CemiterioItem from '../../components/CemiterioItem';



export default function CemiterioScreen({navigation}) {

      
  const renderItem = ({item}) => (
    <CemiterioItem data={item} />
  );

  const adicionar =()=>{
    navigation.navigate('adicionarCemiterio')
  }
  const atualizar =()=>{
    navigation.navigate('atualizarCemiterio')
  }

  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.row}>
      <Card containerStyle={styles.cardStyle}>
          <TouchableOpacity onPress={adicionar}>
            <Icon
              name='add'
              color='#00aced' />
          <Card.Title>Adicionar</Card.Title>
        </TouchableOpacity>
        </Card>

        <Card containerStyle={styles.cardStyle}>
          <TouchableOpacity onPress={atualizar}>
            <Icon
              name='update'
              color='#00aced' />
          <Card.Title>Atualizar</Card.Title>
        </TouchableOpacity>
        </Card>
        
      </View>
      
      <View style={styles.items}>
      <FlatList
       style={ styles.promotionsList }
        data={Cemiterio}
        renderItem={({item}) =>(<CemiterioItem data={item}/> )}
        keyExtractor={item => item.nome}
      />
        </View>
        

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'wrap',
    direction: 'inherit'
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  items:{
    flex: 2,
    paddingBottom: 0
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
  promotionsList: {
    minHeight: '90%',
    maxHeight: '90%',
    backgroundColor: '#ffffff'
  },
  
});