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
                 source={{uri:
                   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.theone.com%2Fimages%2Fthumbs%2F0020560_kingston-sofa-2-white_870.jpeg&imgrefurl=https%3A%2F%2Fwww.theone.com%2Fkingston-sofa-2-white-2&tbnid=FbaMPTXYu9EWgM&vet=10CEAQMyiBAWoXChMIyJuF0P_68wIVAAAAAB0AAAAAEAI..i&docid=FP-KXJccqDegiM&w=870&h=870&q=sofa&ved=0CEAQMyiBAWoXChMIyJuF0P_68wIVAAAAAB0AAAAAEAI"
                 }} />
             <Text style={{fontSize:20, fontWeight:'bold'}}>Herbie's Shopping App</Text>
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
                 <TouchableOpacity><Text style={{fontWeight:'800', fontSize:16}}>Sign Up</Text></TouchableOpacity>
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
      backgroundColor:'rgba(255,255,255,0.3)',
      textAlign:'center',
      marginVertical:18,
    },
    signuptext:{
      paddingTop: 40,
      flexDirection: 'row',
    },
    topp:{
      paddingBottom:40,
    },
  
  });
