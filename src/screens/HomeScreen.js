import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React from 'react'
import Testing from './Testing';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title,image }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  

const HomeScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
  return (
    <View style ={{top:21,margin:22}}>
    <Text style={{fontSize:23,fontWeight:'bold'}}>Reading Now</Text>
    <View style={{top:19}}>
      <Text style={{fontSize:17,fontWeight:'bold'}}>Want To Read</Text>
      <Text>Books you would like to read</Text>
    </View>
    {/* FlatList section Render books  */}
    <View style={{top:21}}>
    <FlatList
      horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Testing')}>
        <Text style={{top:32}}>
            Tesst Button
        </Text>
      </TouchableOpacity>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})