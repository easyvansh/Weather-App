import React from 'react';
import {View,Text, SafeAreaView,Platform,StyleSheet, StatusBar,Button} from 'react-native';
import {Feather} from '@expo/vector-icons';

const CurrentWeather = () => {
  return(<SafeAreaView style = {styles.wrapper}>
    <View style = {styles.container}>
      <Feather name ="sun" size = {100} color = 'black'/>
      <Text style = {styles.temp}>6</Text>
      <Text style = {styles.feels}>Feels like 5</Text>
    <View style = {styles.highLowWarpper}>
      <Text style = {styles.highLow}>High : 8</Text>
      <Text style = {styles.highLow}>Low : 6</Text>
      </View>
    </View>
      <View style = {styles.bodyWrapper}>
        <Text style ={styles.description} >It's Sunny</Text>
        <Text style = {styles.message}>It's Perfect T-Shirt Weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    wrapper: {
      backgroundColor:"pink",
      flex :1
        },
    container: {
    justifyContent:'center',
    flex:1,
    alignItems : 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  temp:{
    color : 'black',
    fontSize :48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLowWarpper:{
    flexDirection:'row'
  },
  highLow:{
    color:'black',
    fontSize : 20
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:20
  }
}
  )

export default CurrentWeather;