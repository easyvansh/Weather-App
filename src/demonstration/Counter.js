import React ,{useState,useEffect} from 'react';
import {View ,Text,Button ,StyleSheet} from 'react-native';


const Counter = () => {
    const [count ,setCount] = useState(0)
    const [newCount,setNewCount] = useState(0)
    const {container,title} = styles
    
    useEffect(() => {
        console.log(`COUNT CHNAGED`)
    },[count])

    return (
        <View style ={container} >
            <Text style ={title}>{`Count: ${count}`}</Text>
            <Button color = {'red'} title = {'Increase the count'} 
            onPress={() => {
                setCount(count + 1)}} />
            <Button color = {'green'} title = {'Decrease the count'}
            onPress={() => {
                setCount(count - 1)}} />
            <Button color = {'red'} title = {'Increase the count'} 
            onPress={() => {
                setNewCount(count + 1)}} />
            <Button color = {'green'} title = {'Decrease the count'}
            onPress={() => {
                setNewCount(count - 1)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'orange'
    },
    title:{
        alignSelf: 'center',
        fontSize:25,
        marginTop : 25

    }

})

export default Counter;