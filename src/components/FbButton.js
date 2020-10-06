import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, Toast, Alert, Modal} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
const FbButton = (props) => {
  console.log('fb', props);
  const [state, setState] = useState({
    userInfo: {},
  });
  let logoutWithFacebook = () => {
    LoginManager.logOut();
    setState({userInfo: {}});
  };

  let getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          setState({userInfo: user}); //isLoggedIn=true
          console.log('result:', user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  // loginWithFacebook = () => {
  //   // Attempt a login using the Facebook login dialog asking for default permissions.
  //   LoginManager.logInWithPermissions(['public_profile']).then(
  //     login => {
  //       if (login.isCancelled) {
  //         console.log('Login cancelled');
  //       } else {
  //         AccessToken.getCurrentAccessToken().then(data => {
  //           console.log(data)
  //           const accessToken = data.accessToken.toString();
  //           this.getInfoFromToken(accessToken);
  //           // this.setState({isLoggedIn:true})
  //         });
  //       }
  //     },
  //     error => {
  //       console.log('Login fail with error: ' + error);
  //     },
  //   );
  // };

  let loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        }

        return AccessToken.getCurrentAccessToken();
      })
      .then((data) => {
        console.log(data);
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            //  Toast.show({
            //   text: "Sucessfully",
            //   position: "top"
            // });
            let email = result.additionalUserInfo.profile.email;
            // let name = result.additionalUserInfo.profile.name;
            let first_name = result.additionalUserInfo.profile.first_name;
            let last_name = result.additionalUserInfo.profile.last_name;
            let obj = {
              email,
              first_name,
              last_name,
            };
            firebase
              .database()
              .ref(`user/${firebase.auth().currentUser.uid}`)
              .set(obj);
            console.log(obj)
            AsyncStorage.setItem('userData', JSON.stringify(obj)).then(() =>
              console.log('facebook succes'),
            );

            console.log(
              'Successfully Login',
              result.additionalUserInfo.profile,
            );
            props.navigation.navigate('Auth', {screen: 'PhoneNo'});
          })
          //  .then(

          //    firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(result.name,result.email)
          //  )
          .catch((error) => {
            console.log('Failed', error);
          });
      })
      .catch((err) => {
        console.log('fail', err);
      });
  };
  // 
  const onFBButtonPress = () => {
    loginWithFacebook();
  };
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
        onPress={() => loginWithFacebook()}
        title="Continue with Facebook">
        <Text
        // style={styles.FBbuttonText}
        >
          Continue with Facebook
        </Text>
      </TouchableOpacity>

    </View>
  );
};
export default FbButton;
