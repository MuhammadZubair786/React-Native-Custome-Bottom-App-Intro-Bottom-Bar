import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text, IconButton } from 'react-native-paper';

const MyRow = () => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);

    return (
        <View style={styles.row}>
            {/* First Item */}
            <View style={styles.item}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} 
                onPress={()=>setChecked(!checked)}
                />
                <Text>Item 1</Text>
            </View>

            {/* Second Item */}
            <View style={styles.item}>
                <Checkbox status={checked1 ? 'checked' : 'unchecked'} 
                  onPress={()=>setChecked1(!checked1)}
                />
                <Text>Item 2</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        // height:400,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
       
    },
    item: {
        flex: 1, // Each item takes 50% of the available space
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default MyRow;
