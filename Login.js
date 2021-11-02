import React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

export default function App (){
    return(
        <View style={styles.sharp}>
             <View style={styles.topp}>
             <Image
                 style={{
                 width: 200,
                 height: 100,
            }}
                 source={require('../assets/download.jpg')} />
               <Text>Herbie's Shopping App</Text>
             </View>
               <TextInput style= {styles.inputbox}
                    placeholder="Email"
                    placeholderTextColor={'grey'}/>

               <TextInput style= {styles.inputbox}
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    secureTextEntry={true} />
   

          <TouchableOpacity>
             <Text style= {styles.loginpart}>Login</Text>
          </TouchableOpacity>

            <View style={styles.signuptext}>
                 <Text style={{color:'#fff'}}>Don't have an account?</Text>
                 <Text>SignUp</Text>
            </View>
        </View>
    );   
}

const styles = StyleSheet.create({
    sharp: {
      flex: 1,
      backgroundColor:'purple',
      alignItems: 'center',
      justifyContent: 'center',
     },
    inputbox: {
      width: 200,
      height: 25,
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 20 ,
      paddingLeft: 10,
      marginVertical: 8,
    },
    loginpart:{
      fontSize: 14,
    },
    signuptext:{
      paddingTop: 40,
      flexDirection: 'row',
    },
    topp:{
      paddingBottom:40,
    },
  
  });
