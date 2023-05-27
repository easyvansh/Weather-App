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



const CurrentWeather = () => {
  const {wrapper,container,feels,temp,highLowWarpper,highLow,bodyWrapper,message} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High : 8'}
          messageTwo={'Low : 6'}
          containerStyles={highLowWarpper}
          messageStyles={highLow}
        />
      </View>
      <RowText
        messageOne={"It's Sunny"}
        messageTwo={weatherType["Clear"].message}
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
  temp: {
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
