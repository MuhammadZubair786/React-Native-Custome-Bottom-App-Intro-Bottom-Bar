import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <View style={styles.iconContainer}>
          <Appbar.Action
            icon="bell" // Notification icon (you can change it to your preferred icon)
            size={40}
            onPress={() => {
              // Handle notification icon press here
            }}
          />
          <Badge
            visible={true}
            size={24}
            style={styles.badge}
          >
            3
          </Badge>
        </View>
      </Appbar.Header>

      {/* Your app content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'red',
    top:-20,
    left: -40, // Adjust the margin to control the spacing between the badge and icon
  },
});

export default App;
