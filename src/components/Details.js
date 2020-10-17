import {View, Text,Dimensions,TextInput } from 'react-native';
import React from 'react';
import Input from './Input';
const { height, width, fontScale } = Dimensions.get('window');

const Details =({instructionplaceholder, passengerlabel, instructionlabel, passengerplaceholder})=>{
    return(
    <View style={{padding:'5%'}}>
        <View style={{flexDirection:'row', paddingTop:5}}>
            <Text style={{paddingTop:'3%', fontSize:14, fontWeight:'bold', color:'green'}}>{passengerlabel}</Text>
            <TextInput 
                placeholder={passengerplaceholder}
                style={{backgroundColor:'#fff',borderRadius:10, height:40 }}
            />
          
            </View>
            <View style={{flexDirection:'row',paddingTop:'5%'}}>
                <Text style={{paddingTop:'4%', fontSize:14, fontWeight:'bold', color:'green'}}>{instructionlabel}</Text>
            <TextInput 
                placeholder={instructionplaceholder}
                style={{ width:width/1.5, backgroundColor:'#fff', borderRadius:10, height:40}}
            />
            </View>
            </View>
    )
}
export default Details;