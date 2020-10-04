import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Toast, Alert} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import "@react-native-firebase/database";
import { firebase } from '@react-native-firebase/auth';
export default class FbButton extends Component {
  state = {
    userInfo: {},
    // isLoggedIn: false
  };   //isLoggedIn: false

  logoutWithFacebook = () => {
    LoginManager.logOut();
    this.setState({userInfo: {}});
  };

  getInfoFromToken = token => {
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
          this.setState({userInfo: user});  //isLoggedIn=true
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

 loginWithFacebook=()=>{
  LoginManager.logInWithPermissions(["public_profile", "email"])
  .then(result => {
    if (result.isCancelled) {
      console.log("Login was cancelled");
    }
    
    return AccessToken.getCurrentAccessToken();
    
  })
  .then(data => {
    console.log(data)
    const credential = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken
    );
   firebase
    .auth()
    .signInWithCredential(credential)
    .then(result => {
    //  Toast.show({
    //   text: "Sucessfully",
    //   position: "top"
    // });
    Alert.alert('login Success')
   console.log("Successfully Login", result);
 })
  .catch(error => {
   console.log("Failed", error);
     });
  })
  .catch(err => {
    console.log("fail", err);
  }); 
 }
// loggedin = ()=>{
//     if(this.state.isLoggedIn === true){
//         this.navigation.navigate('Dashboard')
//     }
//     else null
// }
  state = {userInfo: {}};

  renderFBButton=()=> {
    return (
       <TouchableOpacity
        //  style={styles.FBbutton}
         onPress={()=>this.onFBButtonPress()}
         title="Continue with Facebook"
       >
         <Text
          // style={styles.FBbuttonText}
          >
            Continue with Facebook
         </Text>
       </TouchableOpacity>
     );
   }
 onFBButtonPress = () => {
    this.loginWithFacebook();
 }
  render() {
    //   const navigation =this.props
    // const isLogin = this.state.userInfo.name;
    // const buttonText = isLogin ? 'Logout With Facebook' : 'Login From Facebook';
    // const onPressButton = isLogin
    //   ? this.logoutWithFacebook
    //   : this.loginWithFacebook;
    // return (
    //   <View>
    //     <TouchableOpacity
    //       onPress={onPressButton}
    //       style={{
    //         backgroundColor: 'blue',
    //         padding: 10,
    //         margin:10,
    //         width:195,
    //         marginRight:5,
    //         // alignItems: 'center',
    //         alignSelf:'center',
    //         // textAlign:'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text style={{textAlign:'center'}}>{buttonText}</Text>
    //     </TouchableOpacity>
    //     {/* {this.loggedin()} */}
    //     {this.state.userInfo.name && (
          
    //       <Text style={{fontSize: 16, marginVertical: 16}}>
    //         Logged in As {this.state.userInfo.name}
    //       </Text>
    //     )}
    //     {/* {this.state.isLoggedIn === true ? (this.props.navigation.navigate('Dashboard')) : null} */}
    //   </View>
    return(
    <View>
      {this.renderFBButton()}
    </View>
    );
  }
}