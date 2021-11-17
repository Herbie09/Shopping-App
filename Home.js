import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Ionicons} from '@expo/vector-icons'

export default function Home(params) {
    const navigation = params.navigation;
    return (
        <View> 
             <View style= {styles.header}>
                    <Ionicons name="md-menu" size={'20'} style={{flex:'Top'}}/>
                      <View style={{paddingRight: 10}}>
                         <Ionicons name="md-search" size={'3'} />
                      </View>
                       <View style={{paddingLeft: 10}}>
                          <Ionicons name="md-cart" size={'100'}/>
                       </View>
             </View> 
            <View style= {styles.container}>
                <View style={styles.homebox}>
                <TouchableOpacity
                          onPress={() => {navigation.navigate("ProductDetails");}}  > 
                     <View style={styles.mybox}>
                     <Image
                          style={{
                            width: '80%',
                            height: 200,}}
                    source={require('../assets/images2.jpg')}
                  
                    >
                     </Image>
                         <Text>Two Seater Sofa </Text>
                         <Text>$2,200</Text>
                     </View>
                </TouchableOpacity> 
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("ProductDetails");}}
                > 
                     <View style={styles.mybox}> 
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,}}
                    source={require('../assets/images5.jpg')}
                    resizeMode="contain"
                    >
                     </ImageBackground>
                     <Text>T-Shirt </Text>
                     <Text>$1,100 </Text>
                     </View>
                     </TouchableOpacity>      
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("ProductDetails");}}> 
                     <View style={styles.mybox}>
                         <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,
                            resizeMode:'contain',
                          }}
                
                      source={require('../assets/images6.jpg')}>
                     </ImageBackground>
                     <Text> Jordan Air </Text>
                     <Text>$1,500 </Text>
                     </View>
                     </TouchableOpacity> 
                </View>

                <View style={styles.homebox}>
                <TouchableOpacity
                  onPress={() => {navigation.navigate("ProductDetails");}}> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,backgroundColor:'lightgreen'}}
                    source={require('../assets/images1.jpg')}
                      resizeMode="contain"
                    >
                     </ImageBackground>
                         <Text>Hoodie </Text>
                         <Text>$1,200 </Text>
                     </View>
                     </TouchableOpacity> 
                </View>

                 <View style={styles.homebox}>
                <TouchableOpacity
                onPress={() => {navigation.navigate("ProductDetails");}}> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,
                            backgroundColor:'#bc8f8f',
                          }}
                    source={require('../assets/images3.jpg')}>
                     </ImageBackground>
                         <Text>Headset</Text>
                         <Text>$1,300 </Text>
                     </View>
                     </TouchableOpacity> 
                </View> 

                <View style={styles.homebox}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate("ProductDetails");}}> 
                     <View style={styles.mybox}>
                     <ImageBackground
                          style={{
                            width: '100%',
                            height: 200,
                            backgroundColor:'#008080'}}
                    source={require('../assets/images4.jpg')}>
                     </ImageBackground>
                         <Text>School Bag </Text>
                         <Text>$1000 </Text>
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
        height:50,
        justifyContent: 'space-between',
    //   alignItems:'center',
       backgroundColor:'darkorange', 
       alignItems: "center",
       flexDirection: "row",
       paddingHorizontal: 15,
       paddingTop: 10,
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
        backgroundColor:'#fff',
    },
  });


