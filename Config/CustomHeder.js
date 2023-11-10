import AIICON from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <AIICON name="menu-unfold" color="red" size={30} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Your Title</Text>
                <Text style={styles.titleText2}>Your Title 123</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 80,
    },
    titleContainer: {
        flex: 1, // This makes the title take up the available space
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally,

    },
    titleText: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'red',
        fontFamily: 'Agbalumo-Regular'
    },
    titleText2: {
        fontSize: 28,
        // fontWeight: 'bold',
        color: 'red',
        fontFamily: 'Lobster-Regular'
    },
});

export default CustomHeader;
