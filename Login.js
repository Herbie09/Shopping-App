import React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, Image, Button} from "react-native";

export default function SignUp (params){
  const navigation = params.navigation;

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
         <Text style={styles.hka}>Welcome!!</Text>   
               <TextInput style= {styles.inputbox}
                    placeholder="First Name"
                    placeholderTextColor={'grey'}/>

               <TextInput style= {styles.inputbox}
                    placeholder="Last Name"
                    placeholderTextColor={'grey'}
                   />
               <TextInput style= {styles.inputbox}
                    placeholder="Contact"
                    placeholderTextColor={'grey'}
                   />
                <TextInput style= {styles.inputbox}
                    placeholder="Email"
                    placeholderTextColor={'grey'}
                   />
                <TextInput style= {styles.inputbox}
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    secureTextEntry={true}
                   />
      
          <TouchableOpacity>
             <Text style={styles.signuppart}> Create Account</Text>
          </TouchableOpacity>

            <View style={styles.signintext}>
                 <Text style={{color:'#fff'}}>Do you have an account?</Text>
                <TouchableOpacity 
                     onPress={() => {navigation.navigate("Login");}}>
                     <Text style={{fontWeight:'800', fontSize:16 , paddingLeft:5}}>Sign In</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );   
}

const styles = StyleSheet.create({
    sharp: {
      flex: 1,
      backgroundColor:'cyan',
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
      // backgroundColor:'rgba(255,255,255,0.3)',
      backgroundColor: 'white',
      textAlign:'center',
      marginVertical:16,
    },
    signintext:{
      paddingTop: 40,
      flexDirection: 'row',
      fontSize: 16,
    },
    hka:{
      paddingTop:20,
      paddingBottom:50, 
      fontSize:30,
      fontFamily:'sans-serif',
    },
  });
