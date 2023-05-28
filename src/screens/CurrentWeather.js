import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Button
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    feels,
    tempStyles,
    highLowWarpper,
    highLow,
    bodyWrapper,
    message
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp} °C</Text>
        <Text style={feels}>{`Feels Like : ${feels_like} °`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={` Low: ${temp_min}° `}
          containerStyles={highLowWarpper}
          messageStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLowWarpper: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 20
  }
})

export default CurrentWeather
