import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Slider from '../Slider';
import MyFlatList from '../Flat_List';
import AIICON from 'react-native-vector-icons/AntDesign'
import CustomHeader from './CustomHeder';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
        // <NavigationContainer>
            <Tab.Navigator

                screenOptions={{
                    // tabBarStyle:{position:"absolute",bottom:20}
                    tabBarActiveBackgroundColor: "orange",
                    header: () => <CustomHeader />,
                }}
            >
                <Tab.Screen name="Home"
                    options={{

                        tabBarLabelStyle: { color: "blue", fontFamily: 'Lobster-Regular' },
                        tabBarIcon: () => <AIICON name="home" color="red" size={30} />
                    }}
                    component={Slider} />
                <Tab.Screen name="Settings"
                    options={{
                        tabBarIcon: () => <AIICON name="setting" color="red" size={30} />
                    }}
                    component={MyFlatList} />
            </Tab.Navigator>
        // </NavigationContainer>

    );
}

export default MyTabs