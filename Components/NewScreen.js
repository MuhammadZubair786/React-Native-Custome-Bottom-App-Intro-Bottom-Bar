import React from 'react';
import { FlatList, View, Text, StyleSheet,Image } from 'react-native';

const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  { key: '3', text: 'Item 3' },
  { key: '4', text: 'Item 4' },
  { key: '5', text: 'Item 5' },
  { key: '6', text: 'Item 6' },
  { key: '7', text: 'Item 7' },
  { key: '8', text: 'Item 8' },
  // Add more data items as needed
];

const MyComponent = () => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhzvyZJGYDG-EFUHFEqMdZrdUGV5m02p0vA&usqp=CAU',}} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 100,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  image: {
    width: 100,
    padding:20,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default MyComponent;
