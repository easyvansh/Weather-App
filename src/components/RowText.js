import React from 'react';
import {View,Text} from 'react-native'

const RowText = (props) =>{
    const {messageOne,messageTwo,containerStyles,messageStyles} = props;
    return(
    <View style = {containerStyles}>
      <Text style = {messageStyles}>{messageOne}</Text>
      <Text style = {messageStyles}>{messageTwo}</Text>
      </View>
    )
}


export default RowText;