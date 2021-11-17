import React, { Component } from 'react';
import { Text, View, Ionicons, Image, TouchableOpacity} from 'react-native';

export default function ProductDetails(params){
    const navigation=params.navigation;
    return(
        <View style= {styles.container}>
            <View style={style.details}>
                <Ionicons name="arrow-backoutline"  onPress={() => navigation.goback()} size={25}/>
                <Text style={{fontsize:'14', backgroundColor:'#fff', fontWeight:'Bold'}}>Product Details</Text>
                <View style={{justifyContent:"space-between", flexDirection:'row'}}>
                  <View style={{paddingLeft:6}}>
                    <Ionicons name='ios-cart-outline' backgroundColor="white" size={25} />
                  </View>  
                </View>
            </View>

            <View>
                <Image
                  style={{
                      width:300,
                      height: 250,
                  }}
                  source={require('../assets/images2.jpg')}
                />

           {/* <View style= {{paddingTop: 11, paddingBottom:12, paddingLeft: 17}}>
                <Text></Text>
            </View> */}
            
            </View>
        </View>

    );
}
 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'#fff',
     },
     details:{
         paddingBottom:'11',
         paddingTop:'16',
         paddingHorizontal:'16',
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'row',
         backgroundColor:'#f5f5f5',
     },
 });