import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Home(params) {
    const navigation = params.navigation;
    return (
        <View>
             <View style= {styles.header}>
                  <Text>Header Component</Text>
             </View>
            <View style= {styles.container}>
                <View style={styles.homebox}>
                     <View style={styles.mybox}>
                         <Text>Box 1 </Text>
                     </View>
                </View>
                <View style={styles.homebox}>
                     <View style={styles.mybox}>
                         <Text>Box 2 </Text>
                     </View>
                </View>
                <View style={styles.homebox}>
                     <View style={styles.mybox}>
                         <Image 
                            style={{
                                width: '48',
                                height: '170',
                      }}
                         source={require('../assets/download.jpg')}>
                         {/* <T>Box 3 </T ext> */}
                         </Image>
                     </View>
                </View>
                <View style={styles.homebox}>
                     <View style={styles.mybox}>
                         <Text>Box 4 </Text>
                     </View>
                </View>
                <View style={styles.homebox}>
                     <View style={styles.mybox}>
                         <Text>Box 5 </Text>
                     </View>
                </View>
                <View style={styles.homebox}>
                     <View style={styles.mybox}>
                         <Text>Box 6 </Text>
                     </View>
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
        height: '180%'
    },
    mybox:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'red',
    },
  });
