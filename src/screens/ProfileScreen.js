import React, {useEffect, useState} from 'react';
import {Image, View, Dimensions, Text, TouchableOpacity} from 'react-native';
const {height, width, fontScale} = Dimensions.get('window');
import '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {logout} from '../actions/AuthActions';
import {connect} from 'react-redux';

const ProfileScreen = (props) => {
  const [name, setname] = useState(null);
  const [last, setlast] = useState(null);
  const [email, setemail] = useState(null);

  useEffect(() => {
    handleName();
  }, []);
  const handleName = () => {
    firebase
      .database()
      .ref()
      .child('user/' + firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        console.log('abc', snapshot.val());
        let response = snapshot.val().first_name;
        let responseLast = snapshot.val().last_name;
        let responseEmail = snapshot.val().email;
        setname(response);
        setlast(responseLast);
        setemail(responseEmail);
      });
  };
  const handleLogout = () => {
    const {navigation, logout} = props;
    logout(navigation);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginTop: '7%',
          //  backgroundColor:'red',
          width: width,
          height: height / 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/person.png')} />
        <Text style={{fontWeight: 'bold', fontSize: 16, color: 'green'}}>
          {name} {last}
        </Text>
      </View>
      <View style={{padding: '5%'}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              padding: 10,
            }}>
            <Text style={{fontSize: 16}}>Account</Text>
            <Text style={{marginLeft: '21%', fontSize: 16, fontWeight: 'bold'}}>
              {email}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16}}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Payment')}>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16}}>Payment</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('OrderHistory')}>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16}}>Order History</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Address')}>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16}}>Addresses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notification')}>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16}}>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16}}>Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <View
            style={{padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16, color: 'green', textAlign: 'center'}}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default connect(null, {logout})(ProfileScreen);
