import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import Slider from './Slider';
import FlatList1 from './Flat_List';
import FormPage from './Form.js'
const { width, height } = Dimensions.get('window');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CheckBoxComp from './checkbox';
import ProgressEvent from './progressBar';
import SliderRangeExample from './Slidesrange1';
import GenderSelection from './Radio_button';
import MyTabs from './Config/Navigation';
import MainNavigation from './Config/mainNavigation';
function App() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhzvyZJGYDG-EFUHFEqMdZrdUGV5m02p0vA&usqp=CAU',
    'https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg',
    'https://thumbs.dreamstime.com/b/best-house-design-images-latest-beautiful-exterior-home-pictures-new-modern-front-wall-dream-169464313.jpg',
  ];

  return (
   
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <Slider/> */}
        {/* <FlatList1/> */}
        {/* <FormPage/> */}
        {/* <CheckBoxComp />
        <ProgressEvent/> */}
        {/* <SliderRangeExample /> */}
        {/* <GenderSelection/> */}
        {/* <MyTabs/> */}
        <MainNavigation />



      </View>
    </SafeAreaProvider>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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

export default App;
