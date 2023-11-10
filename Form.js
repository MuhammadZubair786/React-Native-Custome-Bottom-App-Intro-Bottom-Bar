import { View, Text, StyleSheet, Button, Card, Title, Paragraph } from "react-native";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { Badge } from 'react-native-paper';




function FormPage() {
    return (
        <View>
            <Text>Form</Text>
            <ActivityIndicator animating={true} color={MD2Colors.yellow500} size={40} />
            <Appbar.Header>
                <Badge
                    visible={true}
                    size={24}
                    style={styles.badge}
                >
                    3
                </Badge>
                <Appbar.Action
                    icon="bell" // Notification icon (you can change it to your preferred icon)
                    onPress={() => {
                        // Handle notification icon press here
                    }}
                />
            </Appbar.Header>

            {/* <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Title" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header> */}
            <Avatar.Icon size={30} style={{ backgroundColor: 'red' }} icon={() => <Icon name="loader" size={20} color={"white"} />} color="red" />
            <Avatar.Image size={100} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghgIebRs8xyJHT4xmSaODbUFzdxZiI_dWiqus4e--&s" }} />
            <Avatar.Text size={100} label="XD" style={{ backgroundColor: "red" }} />
            {/* <Badge size={30} style={{ backgroundColor: 'red', }}>
                <Text style={{ color: 'white' }}>3</Text>
            </Badge> */}

            {/* <View style={{ alignItems: 'center' }}>
                <Badge
                    visible={true} // Set this to true to show the badge
                    size={30}
                    style={{ backgroundColor: 'red', position: 'absolute', top: -10, right: -10 }}
                >
                    <Text style={{ color: 'white' }}>3</Text>
                </Badge>
            </View> */}
            {/* <Card style={styles.card}>

                <Title>Card Title</Title>
                <Paragraph>This is some content inside the card.</Paragraph>

            </Card> */}




        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    badge: {
        backgroundColor: 'red', // Badge background color
        position: 'absolute',
        top: 8,
        left: 12,
    },
});
export default FormPage