import React from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

export default function App (){
    return(
        <View style={styles.sharp}>
           <Image
             style={{
               width: 200,
               height: 100,
               marginBottom:20,
               borderRadius: 20,
          }}
            source= { {uri:"https://www.google.com/search?q=pictures+of+sofa&sxsrf=AOaemvLMASScc9-XtmqueQKvbEE120FOgg:1635635074895&tbm=isch&source=iu&ictx=1&fir=mZPQ8vmLxX10lM%252CqrnzbGR8zhfyvM%252C_%253BN_TfKL4W_QmqwM%252CqrnzbGR8zhfyvM%252C_%253B1a7LtdB2mfdWmM%252CBSP5jergeRFuXM%252C_%253B4J9Cl7yKar11PM%252CBSP5jergeRFuXM%252C_%253BfIu3L4KAkMHY5M%252CjP8Cw4hk7uTpvM%252C_%253BftBsSD7fZ61K6M%252CBSP5jergeRFuXM%252C_%253BC0-hiiYs7M9hJM%252C_0xxiFUMEADKyM%252C_%253BMwfPGRLdJ-LIIM%252Cd-fV0_2eTNkScM%252C_%253BZuTkaFjaPVDmBM%252CBSP5jergeRFuXM%252C_%253BjTkAxzBMSbf1BM%252CBSP5jergeRFuXM%252C_%253BOF1xlWT4lHC4QM%252Ccku5k3x5WM_ubM%252C_%253BWxtcrtt5ATbc-M%252CBSP5jergeRFuXM%252C_&vet=1&usg=AI4_-kSw6fMC5ABsWDfUaSBfjo0wCETjkw&sa=X&ved=2ahUKEwjJx_u8n_PzAhVN8BQKHTg0AzQQ9QF6BAgCEAE#imgrc=OF1xlWT4lHC4QM"}}
          />
          <Text>Herbie's Shopping App</Text>
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
             <Text style= {styles.loginpart}>Login</Text>
          </TouchableOpacity>
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
     justifyContent: 'center',
     alignItems: 'center',
     fontSize: 14,
    },
  });