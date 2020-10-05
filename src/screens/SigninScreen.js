import { firebase } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, TextInput,Dimensions, StyleSheet,Image, Alert} from 'react-native';
import database from '@react-native-firebase/database';
// import Logo from '../assets'
import {emailChanged, passwordChanged,loginUser} from '../actions/AuthActions'
import {WEB_CLIENT_ID} from '../utils/keys'
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import {LoginButton, AccessToken} from 'react-native-fbsdk'
import { connect } from 'react-redux';
import FbButton from '../components/FbButton'
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
const { height, width, fontScale } = Dimensions.get('window');
// console.log(width, height)
const SigninScreen =(props)=>{
console.log(props)
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  // const saveDataa = async()=>{
  //   const saveData = await AsyncStorage.setItem(
  //        'user',
  //        JSON.stringify({email, password})
  //     )
  // }
  useEffect(() =>{
    // saveDataa()
 
    configureGoogleSign();
  }, [])

  

  const configureGoogleSign = () =>{
    GoogleSignin.configure({
      webClientId: "158637660260-netmu2sctk944p3j6smq64urglrjk5pf.apps.googleusercontent.com",
      offlineAccess:false,
    })
  }

  const signIn= async ()=>{
    try {
      await GoogleSignin.hasPlayServices();
      // const [accessToken, idToken] =await GoogleSignin.signIn()
      // const credential = firebase.auth.GoogleAuthProvider.credential(
      //   idToken,
      //   accessToken
      // )
      // console.log(credential)
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo)
      // const googleCredential = auth.GoogleAuthProvider.credential(userInfo);
      // return auth().signInWithCredential(googleCredential)
      setUserInfo(userInfo);
      setError(null);
      setIsLoggedIn(true);
      console.log(credential)
      await firebase.auth().signInWithCredential(credential)
      // return auth().signInWithCredential(googleCredential)

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
        Alert.alert('Process Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
        Alert.alert('Process in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
        Alert.alert('Play services are not available');
      } 
      else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        console.log(error)
        setError(error);
      }
    }
  }

  const signOut = async()=>{
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString());
    }
  }

  const getCurrentUserInfo = async()=>{
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // when user hasn't signed in yet
        Alert.alert('Please Sign in');
        setIsLoggedIn(false);
      } else {
        Alert.alert('Something else went wrong... ', error.toString());
        setIsLoggedIn(false);
      }
    }
  }
    const onEmailChange=(text)=>{
      props.emailChanged(text)
  }
 const onPasswordChange=(text)=>{
      props.passwordChanged(text)
  }
  const onButtonPress = ()=>{
    console.log(props)
      const {email, password}= props
      // if (email) {
        
      // }
      props.loginUser({email, password}) 
      // props.loginUserSuccess({isLoggedIn})
      
      // props.navigation.replace('Dashboard')
      console.log(email, password)
  }
    
        return (
          <View style={styles.container}>

          <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
            <View style={{marginTop:"20%", flexDirection:'column',alignItems:'center', width:'100%'}}>
              <Image source={require('../assets/rabbit2.png')}
                style={{width:'80%',height:50}}
              />
          
               <Text style={{alignItems:"center"}}>
                Do away with to-do
              </Text>
              
            </View>

            <View style={{marginTop:'2%', padding:'10%'}}>
              <TextInput 
                placeholder="Email"
                style={{borderBottomWidth:0.5}}
                onChangeText={(email)=>{onEmailChange(email)}}
                value={props.email}
                autoCapitalize = 'none'

              />
              
              <TextInput 
                placeholder="Password"
                style={{borderBottomWidth:0.5}}
                onChangeText={(password) => {onPasswordChange(password)}}
                value={props.password}
                secureTextEntry={true}
                autoCapitalize = 'none'
              />
              <Button 
                title="Log in"
                buttonStyle={{backgroundColor:'#1ec31e', height:50, marginTop:'5%'}}
                onPress={()=>onButtonPress(props.email, props.password, props.isLoggedIn)}
              />
              <View style={{flexDirection:'row', padding:'5%',justifyContent:'center'}}>
              <Text>Forgot Your password? </Text>
              <Text style={{color:'#1ec31e'}}> Reset it</Text>
              </View>
              {/* <Image source={require('../assets/Lock.png')} style={{width:10, height:20,marginLeft:100, alignSelf:'flex-end'}}/> */}

            </View>
           
          <View style={{flexDirection:'column', alignItems:'center', marginTop:'20%'}}>
            <FbButton {...props}/>
            <Text>
              Signed up with Facebook or Google?
            </Text>
            <Text style={{color:'#1ec31e'}}>
              Tap here to create a password
            </Text>
          </View>

           </ScrollView>
        </View>
          );
        }
      
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
        // backgroundColor: '#90EE90'
    },
    loggedinMessage:{
      textAlign:'center',
      padding:5
    },
    signInButton: {
      width: 200,
      height: 50,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:width/5.3,
      marginTop:10,
      // backgroundColor:'red'
    },

    userInfoContainer: {
      marginVertical: 20
    },
    profileImageContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    profileImage: {
      width: 100,
      height: 100
    },
    displayTitle: {
      fontSize: 22,
      color: '#010101'
    }
})
const mapStateToProps = ({auth}) =>{
  const{email, password, isLoggedIn} = auth
  return{
    email, password,isLoggedIn
  }
}

export default connect(mapStateToProps, {emailChanged,passwordChanged, loginUser})(SigninScreen);



