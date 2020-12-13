import AsyncStorage from '@react-native-community/async-storage';
import {firebase} from '@react-native-firebase/auth';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {Alert} from 'react-native';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNUP_USER,
  NAME_CHANGED,
  LAST_NAME_CHANGED,
  POSTAL_CHANGED,
  PHONE_CHANGED,
  SUBMIT_NUMBER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  ISLOGGEDIN_USER,
  LOGOUT_SUCCESS,
  FB_LOGIN_USER,
  GOOGLE_LOGIN_USER,
  FORGET_PASSWORD,
} from '../actions/types';
export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};
export const lastNameChanged = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text,
  };
};
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const postalChanged = (text) => {
  return {
    type: POSTAL_CHANGED,
    payload: text,
  };
};
export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text,
  };
};

export const signupUser = ({
  first_name,
  email,
  password,
  last_name,
  postal,
  phone,
}) => {
  let user = {
    first_name,
    last_name,
    // accountType:this.state.accountType,
    email,
    postal,
    password,
    phone,
  };
  //   const {navigate} =props
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var userID = firebase.auth().currentUser.uid;
        const db = firebase
          .database()
          .ref(`user/${firebase.auth().currentUser.uid}`)
          .set({
            userID,
            ...user,
          });
        console.log(user);

        dispatch({type: SIGNUP_USER, payload: user});
        //    props.navigation.navigate('Signin')
      })
      .catch((Error) => {
        alert(Error.message);
      });
  };
};
export const loginUser = ({email, password}, navigation) => {
  // console.log(props)

  let user = {
    email,
    password,
  };
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log('data', data);
        if (email === 'admin@gmail.com' && password === 'adminadmin') {
          navigation.navigate('Root', {screen: 'Admin'});
          console.log('Successfully logged in');
        } else {
          AsyncStorage.setItem('userData', JSON.stringify(user)).then(() => {
            console.log('Successfully');
            navigation.navigate('Root', {screen: 'Dashboard'});
          });

          dispatch({type: LOGIN_USER, payload: user});
        }
      })
      .catch((Error) => {
        alert(Error.message);
      });
  };
};

export const facebookLogin = (navigation) => {
  return (dispatch) => {
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
            var userID = firebase.auth().currentUser.uid;

            //  Toast.show({
            //   text: "Sucessfully",
            //   position: "top"
            // });
            console.log('result', result);
            // let userID = result.additionalUserInfo.profile.uid;

            let email = result.additionalUserInfo.profile.email;
            // let name = result.additionalUserInfo.profile.name;
            let first_name = result.additionalUserInfo.profile.first_name;
            let last_name = result.additionalUserInfo.profile.last_name;
            let obj = {
              email,
              first_name,
              last_name,
              userID,
            };
            firebase
              .database()
              .ref(`user/${firebase.auth().currentUser.uid}`)
              .set(obj);
            console.log(obj);
            AsyncStorage.setItem('userData', JSON.stringify(obj)).then(() =>
              console.log('facebook succes'),
            );

            console.log(
              'Successfully Login',
              result.additionalUserInfo.profile,
            );
            dispatch({type: FB_LOGIN_USER, payload: obj});
            navigation.navigate('Auth', {screen: 'PhoneNo'});
          })

          //  .then(

          //    firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(result.name,result.email)
          //  )
          .catch((error) => {
            console.log('Failed', error);
          });
        //       return(dispatch)=>{
        //
        //   }
      })
      .catch((err) => {
        console.log('fail', err);
      });
  };
};
export const googleLogin = (navigation) => {
  //    console.log('obj',obj)
  return async (dispatch) => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      console.log('User Info --> ', userInfo.user.givenName);
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
      );

      await firebase.auth().signInWithCredential(googleCredential);
      var userID = firebase.auth().currentUser.uid;

      // setUserInfo(userInfo);
      // setError(null);
      // setIsLoggedIn(true);
      let email = userInfo.user.email;
      let first_name = userInfo.user.givenName;
      let last_name = userInfo.user.familyName;

      let obj = {
        email,
        first_name,
        last_name,
        userID,
      };
      firebase
        .database()
        .ref(`user/${firebase.auth().currentUser.uid}`)
        .set(obj);
      console.log(obj);
      AsyncStorage.setItem('userData', JSON.stringify(obj));
      navigation.navigate('Auth', {screen: 'PhoneNo'});
      dispatch({type: GOOGLE_LOGIN_USER, payload: obj});

      // console.log(credential)
      // await firebase.auth().signInWithCredential(credential)
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
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        console.log(error);
        //   setError(error);
      }
    }
  };
};

export const phoneNo = ({phone}) => {
  let phoneuser = {
    phone,
  };
  return (dispatch) => {
    firebase
      .database()
      .ref(`user/${firebase.auth().currentUser.uid}`)
      .update(phoneuser);
    dispatch({type: SUBMIT_NUMBER, phoneuser});
  };
};

export const forget_Password = (email) => {
  return (dispatch) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        console.log('email', email);
        alert('Please check your email...');
        dispatch({type: FORGET_PASSWORD, payload: email});
      })
      .catch(function (e) {
        console.log(e);
      });
  };
};

export const logout = (navigation) => {
  return (dispatch) => {
    // dispatch({type: LOGOUT_LOADING});
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          AsyncStorage.removeItem('userData').then(() => {
            navigation.navigate('Auth', {screen: 'Signin'});
          });
          dispatch({type: LOGOUT_SUCCESS});
        });
    } catch (error) {
      //   dispatch({type: LOGOUT_FAILED});
    }
  };
};
