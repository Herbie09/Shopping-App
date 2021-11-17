iimport React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

export default function Login (params){
  const navigation = params.navigation;
    return(
        <View style={styles.sharp}>
            <View style={styles.topp}>
             <Image
                 style={{
                      width: 260,
                      height: 180,
            }}
                 source={require('../assets/shopping pic2.jpg')} />
             <Text style={{fontSize:20, fontWeight:'bold', marginLeft:60}}>Shop With Us</Text>
            </View>
               <TextInput style= {styles.inputbox}
                    placeholder="Email"
                    placeholderTextColor={'grey'}/>

               <TextInput style= {styles.inputbox}
                    placeholder="Password"
                    placeholderTextColor={'grey'}
                    secureTextEntry={true} />
   
            <View>
                 <TouchableOpacity    
                         onPress={() => {navigation.navigate("Home");}}>
                         <Text style= {styles.loginpart}>Login</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.signuptext}>
                 <Text style={{color:'#fff'}}>Don't have an account?</Text>
                 <TouchableOpacity   
                         onPress={() => {navigation.navigate("SignUp");}}>
                         <Text style={{fontWeight:'800', fontSize:16, paddingLeft:5}}>Sign Up</Text>
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
      justifyContent: 'center',
     },
    inputbox: {
      width: 230,
      height: 31,
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 20 ,
      paddingLeft: 12,
      marginVertical: 8,
    },
    loginpart:{
      fontSize: 20,
      fontWeight:'bold',
      borderRadius: 20 ,
      width:150,
      backgroundColor:'white',
      textAlign:'center',
      marginVertical:18,
    },
    signuptext:{
      paddingTop: 40,
      flexDirection: 'row',
    },
    topp:{
      paddingBottom:40,
      justifyContent:'center',
    },
  
  });
