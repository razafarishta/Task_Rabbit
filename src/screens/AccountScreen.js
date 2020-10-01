import React,{useState, useEffect} from 'react';
import { Text, View, Dimensions } from 'react-native';
import "@react-native-firebase/database";
import { firebase } from '@react-native-firebase/auth';
const { height, width, fontScale } = Dimensions.get('window');

const AccountScreen = ()=>{

    const[name, setname] =useState(null)
  const[last, setlast] =useState(null)
  const[email, setemail] =useState(null)


  useEffect(()=>{handleName()},[])
  const handleName=()=>{
    firebase.database().ref().child('user/' + firebase.auth().currentUser.uid).on('value', (snapshot) => {
      console.log("abc",snapshot.val())
      let response = snapshot.val().name
      let responseLast = snapshot.val().last
      let responseEmail = snapshot.val().email
      setname(response)
      setlast(responseLast)
      setemail(responseEmail)


    })
  }



    return(
        <View style={{flex:1, padding:15}}>
            
            <View style={{
                flexDirection:'row',
                // padding:10,
                paddingTop:15,

                backgroundColor:'#fff'
                
               
            }}>
            <Text style={{fontWeight:'bold', fontSize:16}}>First Name</Text>
        <Text style={{paddingLeft:width/3.3, fontSize:16}}>{name} </Text>
            </View>

            <View style={{
                flexDirection:'row',
                // padding:5,
                paddingTop:15,

                borderBottomWidth:1,
                backgroundColor:'#fff'
            }}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Last Name</Text>
            <Text style={{paddingLeft:width/3.3,fontSize:16}}>{last}</Text>
            </View>

            <View style={{
                flexDirection:'row',
                // padding:5,
                paddingTop:10,

                backgroundColor:'#fff'

            }}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Phone Number</Text>
            <Text style={{paddingLeft:width/4.5,fontSize:16}}>name</Text>
            </View>

            <View style={{
                flexDirection:'row',
                paddingTop:15,
            
                backgroundColor:'#fff'



            }}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Email</Text>
        <Text style={{paddingLeft:width/2.5,fontSize:16}}>{email}</Text>
            </View>

            <View style={{
                flexDirection:'row',
                paddingTop:15,
            
            }}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Change your password</Text>
            </View>
            
        </View>
    )
}
export default AccountScreen;