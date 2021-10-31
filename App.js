import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Screens/Login';


export default function App() {
  return (
   <View style={styles.container}>
      <StatusBar 
        backgroundColor='grey'
        barStyle= 'light-content'
      />
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
