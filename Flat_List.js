import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 1' },
  { id: '5', text: 'Item 2' },
  { id: '6', text: 'Item 3' },
  { id: '7', text: 'Item 1' },
  { id: '8', text: 'Item 2' },
  { id: '9', text: 'Item 3' },
  { id: '10', text: 'Item 1' },
  { id: '11', text: 'Item 2' },
  { id: '12', text: 'Item 3' },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const MyFlatList = () => {
  return (
    <View style={styles.container}>
        <View style={{margin:20}}>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:30}}>List DATA</Text>
            
        </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop:20,
    padding: 16,
    marginHorizontal:20,
    backgroundColor:"green",
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
  },
});

export default MyFlatList;
