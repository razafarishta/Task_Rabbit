import React from 'react';
import { TextInput, TouchableOpacity, View,Dimensions,Text} from 'react-native';
import {connect} from 'react-redux';
import {phoneChanged, phoneNo} from '../actions/AuthActions'

const { height, width, fontScale } = Dimensions.get('window');



const PhoneNoScreen =(props)=>{
    
    const onPhoneChanged = (text)=>{
        props.phoneChanged(text)
    }
    const onButtonPress =()=>{
        const {phone}=props
        props.phoneNo({phone})
        props.navigation.navigate('Dashboard')
    }
    
    return(
        <View style={{flex:1, padding:10}}>
            <View style={{width:width, flexDirection:'column'}}>
            <Text>
                Enter Your Phone Number
            </Text>

            <TextInput 
            style={{width: width/0.9 , borderBottomWidth:1, }}
                onChangeText={(phone)=>{onPhoneChanged(phone)}}
                value={props.phone}
            
            />

            <TouchableOpacity 
            onPress={()=>onButtonPress(props.phone)} 
            style={{backgroundColor:'green'}}>
                <Text>Submit</Text>
            </TouchableOpacity>
</View>
        </View>

    )
    }
const mapStateToProps = ({auth})=>{
    const {phone}= auth
    return{
        phone
    }
} 
export default connect(mapStateToProps,{phoneChanged, phoneNo})(PhoneNoScreen);