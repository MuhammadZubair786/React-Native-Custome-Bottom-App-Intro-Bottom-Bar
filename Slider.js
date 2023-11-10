import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

function Slider() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhzvyZJGYDG-EFUHFEqMdZrdUGV5m02p0vA&usqp=CAU',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJX7iGz9Zx7w2XkptdJ_kajrtZUlKDl_gRg&usqp=CAU",
    "https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg"
  ];

  return (
    <View style={styles.container}>
       <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)',   width: '100%', paddingHorizontal: 16 }}>
        <Text>TEST</Text>
        <Text>TEST</Text>
        <Text>TEST</Text>
        <Text>TEST</Text>
      </View>
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ))}
      </Swiper>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: height, // Full height
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
    flex: 1,
  },
  dotStyle: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDotStyle: {
    backgroundColor: '#007AFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

export default Slider;
