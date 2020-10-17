import React from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';
import Input from '../components/Input';
// import { TextInput } from 'react-native-paper';
import {emailChanged, forget_Password} from '../actions/AuthActions'
import { connect } from 'react-redux';
const ForgetPassword = (props)=>{
    const onEmailChange=(text)=>{
        props.emailChanged(text)
    }
    const onButtonPress = ()=>{
        const {email}= props
        props.forget_Password(email)
    }

return(
    <View>
   <Input 
    placeholder="Email"
    label="Email : "
    onChangeText={(email)=>{onEmailChange(email)}}
    value={props.email}
    autoCapitalize= 'none'
   />

   <TouchableOpacity
    onPress={()=> onButtonPress()}
   >
       <Text>Submit</Text>
   </TouchableOpacity>
   </View>
)
}
const mapStateToProps = ({auth})=>{
    const{email} = auth
    return{
      email
    }
}
export default connect(mapStateToProps, {emailChanged, forget_Password})(ForgetPassword)