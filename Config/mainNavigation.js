import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainSlide from '../Components/Main_Slide';
import MyTabs from './Navigation';
import CustomAppBar from './CustomBottom';


const Stack = createNativeStackNavigator();

function MainNavigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={MainSlide} options={{
            headerShown:false
          }} />
             <Stack.Screen name="home" component={CustomAppBar} options={{
            headerShown:false
          }} />
          
        </Stack.Navigator>
      
      </NavigationContainer>
    )
}
export default MainNavigation