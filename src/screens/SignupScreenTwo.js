import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux'
import {
    emailChanged,
    passwordChanged,
    nameChanged,
    lastNameChanged,
    postalChanged,
    signupUser,
} 
from '../actions/AuthActions'

const { height, width, fontScale } = Dimensions.get('window');


const SignupScreenTwo =(props)=>{
    // const [postal, setpostal] = useState()
    // const [last, setlast] = useState()
    
const onEmailChange=(text)=>{
    props.emailChanged(text)
}
const onPasswordChange=(text)=>{
    props.passwordChanged(text)
}
const onNameChange = (text)=>{
    props.nameChanged(text)
}
const onLastNameChange = (text)=>{
    props.lastNameChanged(text)
}
const onPostalChange = (text)=>{
    props.postalChanged(text)
}
const onButtonPress = ()=>{
    const {name,last,email, postal, password } = props
    props.signupUser({name, last,email,postal ,password}) 
    props.navigation.navigate('Signin')

}
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={{flexDirection:'row', width:'100%'}}>
            <TextInput
                placeholder="First Name"
                style={{width: width/2.1 , borderBottomWidth:1,marginRight:8,}}
                onChangeText={(name) => {onNameChange(name)}}
                value={props.name}
            />
            <TextInput 
                placeholder="Last Name"
                style={{width: width/2 , borderBottomWidth:1 , marginRight:8}}
                onChangeText={(last) => {onLastNameChange(last)}}
                value={props.last}
            />
            </View>
            <View style={{justifyContent:'center'}}>
            <TextInput 
                placeholder="Email"
                style={{width: width/0.9 , borderBottomWidth:1, }}
                onChangeText={(email)=>{onEmailChange(email)}}
                  value={props.email}
            />
            </View>
    <View style={{flexDirection:'row',}}>
            <TextInput
                placeholder="Password"
                style={{width: width/2 , borderBottomWidth:1,marginRight:10}}
                secureTextEntry={true}
                  autoCapitalize = 'none'
                  onChangeText={(password) => {onPasswordChange(password)}}
                  value={props.password}
            />
            <TextInput 
                placeholder="Postal Code"
                style={{width: width/2 , borderBottomWidth:1}}
                value={props.postal}
                onChangeText={(postal) => {onPostalChange(postal)}}
                keyboardType={"numeric"}
            />
            </View>

            <View
                style={{
                    marginTop:'40%',
                    // backgroundColor:'red',
                   textAlign:'center',
                    justifyContent:'center',
                    
                    
                }}
            >
                <Text style={{textAlign:'center',}}>
                    By signing up, you agree to our 
                </Text>
                <View style={{justifyContent:'center', flexDirection:'row'}}>
                <Text style={{textAlign:'center', color:'#1ec31e',paddingBottom:'2%'}}>Terms of  Service </Text>
                    <Text style={{paddingBottom:'2%'}}>, and</Text>
                    <Text style={{color:'#1ec31e', paddingBottom:'2%'}}> Privacy Policy.</Text>
                </View>

                <Button 
                     title="Sign Up"
                     buttonStyle={{backgroundColor:'#1ec31e', height:50}}
                     onPress={()=>onButtonPress(props.name, props.email, props.password, props.last, props.postal)}
                />

            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:10
    }

})
const mapStateToProps = ({auth})=>{
    const {name,email,password, last, postal}= auth
    return{
        name,
        last,
        email,
        postal,
        password
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged, nameChanged,lastNameChanged,postalChanged, signupUser})(SignupScreenTwo)