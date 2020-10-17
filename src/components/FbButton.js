import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, Toast, Alert, Modal} from 'react-native';
import '@react-native-firebase/database';
import {facebookLogin} from '../actions/AuthActions'
import Feather from 'react-native-vector-icons/Feather' 
// import {firebase} from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
const FbButton = (props) => {
  // console.log('fb', props);

  const onButtonPress = ()=>{
    const {first_name,last_name,email, password, navigation} = props

    props.facebookLogin(navigation)
    // props.navigation.navigate('PhoneNo')
  }

  return (
    <View>

      {/* <Modal visible={moadlopen}>
      <View style={{flex:1}}>
        <MaterialIcons 
          name="close"
          size={24}
          onPress={()=> setModalOpen(false)}
        />
      </View>
      </Modal> */}
      <TouchableOpacity
        //  style={styles.FBbutton}
        style={{
          backgroundColor:'#4267B2',
           width:190,
            height:45,
             alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',

            }}
        onPress={() => onButtonPress(props.first_name, props.last_name, props.email , props.password)}
        >
          <Feather 
            name="facebook"
            size={20}
            style={{paddingRight:10}}
          />
        <Text
        // style={styles.FBbuttonText}
        style={{color:'#fff', fontSize:14, fontWeight:'bold'}}
        >
          
          Login with Facebook
        </Text>
      </TouchableOpacity>
      {/* <LoginButton 
        onPress={() => onButtonPress(props.first_name, props.last_name, props.email , props.password)}
        title="Login"
      /> */}

    </View>
  );
};
export default connect(null, {facebookLogin})(FbButton);
