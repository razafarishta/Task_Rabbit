import React, { useState } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { Switch } from 'react-native-paper'; 
import { LogBox } from 'react-native'
// YellowBox.ignoreWarnings([
//     'Require cycle:'
//   ])
LogBox.ignoreAllLogs()

const { height, width, fontScale } = Dimensions.get('window');

const NotficationScreen = ()=>{
    const[isSwitchOn, setIsSwitchOn]= useState(false)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return(
    <View style={{flex:1, padding:10}}>
        <View style={{ width:width, height:40, flexDirection:'row',borderBottomWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Delivery Push Notifications</Text>
            <View style={{}}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{paddingLeft:'28%'}}/>
            </View>
        </View>

        <View style={{ width:width, height:40, flexDirection:'row', borderBottomWidth:1}}>
            <Text style={{fontWeight:'bold', fontSize:16, paddingTop:5}}>Delivery SMS Notifications</Text>
            <View style={{}}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{paddingLeft:'28%'}}/>
            </View>
        </View>

        <View style={{ width:width, height:40, flexDirection:'row', }}>
            <Text style={{fontWeight:'bold', fontSize:16, paddingTop:5}}>Promotional Push Notifications</Text>
            <View style={{}}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{paddingLeft:'19%'}}/>
            </View>
        </View>
    </View>
    )
}
export default NotficationScreen;