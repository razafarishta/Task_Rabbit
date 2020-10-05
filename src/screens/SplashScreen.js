import AsyncStorage from '@react-native-community/async-storage';
import {firebase} from '@react-native-firebase/database';
import React, {useEffect} from 'react';
import {BackHandler, Image} from 'react-native';
import SplashImage from '../assets/splash.png';
import {connect} from 'react-redux';
const SplashScreen = (props) => {
  const { user } = props
  const saveData = async () => {
    const user = await AsyncStorage.getItem('userData');
    const convertData = JSON.parse(user);
    console.log('convert',convertData);
    // if (convertData) {
    //   props.navigation.navigate('Root',{screen:'Dashboard'});
    // } else {
    //   props.navigation.navigate('Auth', {screen: 'Signin'});
    // }

    // if(convertData){
    //     props.navigation.navigate('Dashboard')
    //   }else{
    //     props.navigation.navigate('Signin')
    //   }
      setTimeout(()=>{
        console.log('convert',convertData)
    if (convertData) {
        props.navigation.navigate('Root',{screen:'Dashboard'});
      } else {
        props.navigation.navigate('Auth', {screen: 'Signin'});
      }
    }, 1200)
  };

  useEffect(() => {
    saveData();
    // configureGoogleSign();
  }, []);
  return (
    <Image
      source={SplashImage}
      style={{width: '90%', height: '100%', alignSelf: 'center'}}
    />
  );
};

const mapStateToProps = ({auth}) => {
  const {user} = auth;
  return {
    user
  }
}

export default connect(mapStateToProps)(SplashScreen);
