import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native'
import { Feather } from '@expo/vector-icons'

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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color : 'pink',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default UpcomingWeather
