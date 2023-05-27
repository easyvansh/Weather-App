import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  FlatList,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'


// Declaring a variable data list for the flatlist component
const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: {
      main: 'Rain'
    }
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 28.55,
      temp_min: 17.55
    },
    weather: {
      main: 'Clouds'
    }
  },
  {
    dt_txt: '2023-02-18 19:00:00',
    main: {
      temp_max: 18.55,
      temp_min: 7.55
    },
    weather: {
      main: 'Clear'
    }
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const {container ,image,text} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source = {require('../../assets/upcoming-background.jpg')} style = {image}>
      <Text style = {text}>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalBlue',
    marginTop : StatusBar.currentHeight || 0 ,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  text:{
    fontSize:20,
    padding:2
    
  },
  image:{
    flex:1
  }
})

export default UpcomingWeather
