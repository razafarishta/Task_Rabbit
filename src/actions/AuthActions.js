import AsyncStorage from '@react-native-community/async-storage'
import { firebase } from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGNUP_USER,
    NAME_CHANGED,
    LAST_NAME_CHANGED,
    POSTAL_CHANGED,
    SIGNUP_USER_SUCCESS, 
    SIGNUP_USER_FAIL, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
     LOGIN_USER, ISLOGGEDIN_USER,
     LOGOUT_SUCCESS
    } 
    from '../actions/types'
    export const nameChanged = (text)=>{
        return{
            type:NAME_CHANGED,
            payload:text
        }
    }
    export const lastNameChanged = (text)=>{
        return{
            type:LAST_NAME_CHANGED,
            payload:text
        }
    }
    export const emailChanged = (text)=>{
        return{
            type:EMAIL_CHANGED,
            payload:text
        }
    }

    export const passwordChanged = (text)=>{
        return{
            type: PASSWORD_CHANGED,
            payload:text
        }
    }
    
    export const postalChanged = (text)=>{
        return{
            type:POSTAL_CHANGED,
            payload:text
        }
    }
 
    export const signupUser = ({first_name,email, password ,last_name, postal})=>{
        let user = {
            first_name,
            last_name,
            // accountType:this.state.accountType,
            email,
            postal,
            password
          }
        //   const {navigate} =props
        return (dispatch)=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                const db= firebase.database().ref(`user/${firebase.auth().currentUser.uid}`)
                .set(
                    user
                )
                console.log(user)

                dispatch({type:SIGNUP_USER, user})
            //    props.navigation.navigate('Signin')
            })
            .catch(
                (Error)=> {alert(Error.message)}
            )
        }
    }
    export const loginUser=({email, password})=>{
       let user ={
           email, password
       } 
       return(dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            AsyncStorage.setItem('userData', JSON.stringify(user)).then(() => {
                console.log('Successfully')
            })
           
            dispatch({type:LOGIN_USER, user})
           
        })
        .catch((Error)=> {alert(Error.message)})
       }
    
    }

    export const logout =(navigation)=>{
        return (dispatch) => {
            // dispatch({type: LOGOUT_LOADING});
            try {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  AsyncStorage.removeItem('userData').then(() => {
                    navigation.navigate('Auth', {screen:'Signin'});
                  });
                  dispatch({type: LOGOUT_SUCCESS});
                });
            } catch (error) {
            //   dispatch({type: LOGOUT_FAILED});
            }
          };
    }
    // export const loggedIn = (isLoggedIn)=>{
    //     return{
    //         type:ISLOGGEDIN_USER,
    //         payload:isLoggedIn
    //     }

    // }
    // export const loginUserSuccess=(props)=>{
    //     return(dispatch)=>{
           
    //             dispatch({type:LOGIN_USER_SUCCESS})
    //             console.log(LOGIN_USER_SUCCESS)
    //             navigate('Dashboard')
         
    //     }
    // }
