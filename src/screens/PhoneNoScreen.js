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
        <View style={{flex:1, padding:10, backgroundColor:'#fff'}}>
            <View style={{flexDirection:'column', paddingTop:10}}>
                <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:fontScale*14}}>
                Enter Your Phone Number :
            </Text>

            <Text style={{color:'#cc0000'}}> *  (Must contain 11 digits)</Text>
            </View>
            <TextInput 
            style={{ borderBottomWidth:1, }}
                placeholder="+92-XXXXXXXXXX"
                onChangeText={(phone)=>{onPhoneChanged(phone)}}
                value={props.phone}
            
            />

            <TouchableOpacity 
            onPress={()=>onButtonPress(props.phone)} 
            style={{backgroundColor:'#1ec31e',
             justifyContent:'center',
              alignItems:'center',
              marginTop:15,
              height:45
              
              }}>
                <Text 
                style={{
                    fontSize:16,
                    color:'#fff'
                }}>
                    Submit</Text>
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