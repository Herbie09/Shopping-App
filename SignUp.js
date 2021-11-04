import React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, Image, Button} from "react-native";

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
            </View>
            <Text style={styles.hka}>Herbie's Shopping App</Text>   
               <TextInput style= {styles.inputbox}
                    placeholder="First Name"
                    placeholderTextColor={'grey'}/>

               <TextInput style= {styles.inputbox}
                    placeholder="Last Name"
                    placeholderTextColor={'grey'}
                   />
                <TextInput style= {styles.inputbox}
                    placeholder="Email"
                    placeholderTextColor={'grey'}
                   />
                <TextInput style= {styles.inputbox}
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    secureTextEntry={true} />
                   />        
                <TextInput style= {styles.inputbox}
                    placeholder="Contact"
                    placeholderTextColor={'grey'}
                   />
          <TouchableOpacity>
             <Text style={styles.signuppart}> Sign Up</Text>
          </TouchableOpacity>

            <View style={styles.signintext}>
                 <Text style={{color:'#fff'}}>Do you have an account?</Text>
                 <Text style={{fontWeight:'800', fontSize:16}}>Sign In</Text>
            </View>
        </View>
    );   
}

const styles = StyleSheet.create({
    sharp: {
      flex: 1,
      backgroundColor:'purple',
      alignItems: 'center',
      // justifyContent: 'center',
     },
    inputbox: {
      width: 230,
      height: 30,
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 20 ,
      paddingLeft: 12,
      marginVertical: 8,
    },
    signuppart:{
      fontSize: 16,
      fontWeight:'bold',
      borderRadius: 20 ,
      width:150,
      backgroundColor:'rgba(255,255,255,0.3)',
      textAlign:'center',
      marginVertical:16,
    },
    signintext:{
      paddingTop: 40,
      flexDirection: 'row',
    },
    hka:{
      paddingTop:80,
      paddingBottom:180, 
      fontSize:30,
      fontFamily:'sans-serif',
    },
  });
