import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Button}from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';


  const Stack = createStackNavigator();
  export default function App() {
  return (
    <View style= {{flex:1}}>
      {/* <StatusBar 
        backgroundColor='grey'
        barStyle= 'light-content'
      /> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: true ,  }}>
             <Stack.Screen name="Login" component={Login} />
             <Stack.Screen name="SignUp" component={SignUp}/>
         </Stack.Navigator>
      </NavigationContainer>
     
       {/* <Stack.Screen
           name="Login"
           component={Login}
           options={{ title: 'Overview' }}
        /> */}
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
