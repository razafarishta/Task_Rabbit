import React from 'react';
import {View, Text, ScrollView,Dimensions, StyleSheet, TextInput, Image} from 'react-native'
// import firebase from 'react-native-firebase';
// import database, {firebase} from '@react-native-firebase/database';
import "@react-native-firebase/database";
import {Button} from 'react-native-elements'
import FbButton from '../components/FbButton';
const { height } = Dimensions.get('window');

const SignupScreen =(props)=>{
  
   
    
        return (
            <View style={styles.container}>

            <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
            
              <View style={{marginTop:"30%", flexDirection:'column',alignItems:'center', width:'100%'}}>
              <Image source={require('../assets/rabbit2.png')}
                style={{width:'80%',height:50}}
              />
          </View>
                <View style={{justifyContent:'center',marginTop:height/3,flexDirection:'column'}}>

                <Button 
                  title="Sign up with Email"
                  buttonStyle={{backgroundColor:'#1ec31e', height:50}}
                  onPress={()=>props.navigation.navigate('SignUpp')}

                />
                <View style={{flexDirection:'row', justifyContent:'center', paddingTop:'5%'}}>
                <Text style={{fontSize:16}}>Already have an account?</Text>
                <Text 
                style={{fontSize:16, color:'#1ec31e', paddingLeft:'2%'}} 
                onPress={() => props.navigation.navigate("Signin")}>
                  Log in
                  </Text>
                </View>
                </View>
          
            </ScrollView>
          </View>
          );
    

}
const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:'#fff',
       padding:10
    }
})

export default SignupScreen;