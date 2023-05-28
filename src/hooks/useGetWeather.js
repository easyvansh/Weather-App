import React,{ useState,useEffect } from 'react';
import * as Location from 'expo-location';
import { API_KEY } from '@env';

export const useGetWeather = () =>{
  const [loading,setLoading] = useState(true)
  const [location,setLocation] = useState(null)
  const [error,useError] = useState(null)
  const [lat ,setLat] = useState([])
  const [lon ,setLon] = useState([])
  const [weather,setWeather] = useState([])

  const fetchWeatherData = async () => {
    try{
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      const data = await res.json()
      setWeather(data)
    } catch(error){
      setError('Could Not Fetch Weather Data')
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted'){
        setError('permission to access location is denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  },[lat,lon])

  
  return [loading,error,weather]
}