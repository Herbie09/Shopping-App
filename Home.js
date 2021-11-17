import React from 'react'
import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Ionicons} from '@expo/vector-icons'

export default function Home(params) {
    const navigation = params.navigation;
    return (
        <View> 
             <View style= {styles.header}>
                <Ionicons name="md-search" size={'3'}/>
                <Ionicons name="md-menu" size={'3'}/>

             </View>
            <View style= {styles.container}>
                <View style={styles.homebox}>
                <TouchableOpacity> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,}}
                    source={require('../assets/OIP (2).jpg')}
                    resizeMode="contain">
                     </ImageBackground>
                         <Text>Box 1 </Text>
                         <Text>$300</Text>
                     </View>
                     </TouchableOpacity> 
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity> 
                     <View style={styles.mybox}> 
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,}}
                    source={require('../assets/colorful-shirt-concept-mock-up_23-2148411332.jpg')}
                    resizeMode="contain">
                     </ImageBackground>
                     <Text>T-Shirt </Text>
                     <Text>$300 </Text>
                     </View>
                     </TouchableOpacity>      
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity> 
                     <View style={styles.mybox}>
                         <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,}}
                    source={{uri:
                    "https://stock.adobe.com/images/e-commerce-add-to-cart-online-shopping-business-technology-internet-concept/214539382"

                    }}>
                     </ImageBackground>
                     <Text>Box 3 </Text>
                     <Text>$300 </Text>
                     </View>
                     </TouchableOpacity> 
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,}}
                    source={{uri:
                    "https://stock.adobe.com/images/e-commerce-add-to-cart-online-shopping-business-technology-internet-concept/214539382"
                    }}>
                     </ImageBackground>
                         <Text>Box 4 </Text>
                         <Text>$300 </Text>
                     </View>
                     </TouchableOpacity> 
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,}}
                    source={{uri:
                    "https://stock.adobe.com/images/e-commerce-add-to-cart-online-shopping-business-technology-internet-concept/214539382"

                    }}>
                     </ImageBackground>
                         <Text>Box 5 </Text>
                         <Text>$300 </Text>
                     </View>
                     </TouchableOpacity> 
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,
                            resize:'contain'}}
                    source={{uri:
                    "https://stock.adobe.com/images/e-commerce-add-to-cart-online-shopping-business-technology-internet-concept/214539382"

                    }}>
                     </ImageBackground>
                         <Text>Box 6 </Text>
                         <Text>$300 </Text>
                     </View>
                     </TouchableOpacity> 
                </View>
            </View>
        </View>
    );
 
}

const styles = StyleSheet.create({
   container:{
     width: '100%',
     height: '85%',
     flexDirection: 'row',
     flexWrap: 'wrap',
   },
    header:{
      width:'100%',
      height: 60,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#fefefe', 
    },
    homebox:{
        padding: 7 ,
        width: '50%',  
        height: 250, 
    },
    mybox:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'white',
    },
  });

