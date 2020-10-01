import AsyncStorage from '@react-native-community/async-storage';
import { firebase } from '@react-native-firebase/database';
import React, { useEffect } from 'react';
import { BackHandler, Image } from 'react-native';
import SplashImage from '../assets/splash.png'
const SplashScreen= (props)=>{
// TimeConsumingTask= async()=>{
//     var task, result
//     try{
//         result = await helper
//     }
// }
// useEffect(()=>{
//     setTimeout(()=>{
//         props.navigation.navigate('Signin')
//     }, 1200)
//     BackHandler.addEventListener('hardwareBackPress', function () {return true})
    
// }, [])


useEffect(() =>{
    
    const user = AsyncStorage.getItem('user');
    const convertData = JSON.parse(user);
  
    console.log(saveData)
setTimeout(()=>{
    if(convertData){
      props.navigation.navigate('Dashboard')
    }else{
      props.navigation.navigate('Signin')
    }
}, 1200)
BackHandler.addEventListener('hardwareBackPress', function () {return true})
    // configureGoogleSign();
  }, [])
return(
    <Image source={SplashImage} style={{width:"90%",height:"100%", alignSelf:'center'}} />
)
}

export default SplashScreen;