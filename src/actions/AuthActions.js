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
     LOGIN_USER
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
 
    export const signupUser = ({name,email, password ,last, postal})=>{
        let user = {
            name,
            last,
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
        .then(dispatch({type:LOGIN_USER, user}))
        // console.log(user)
        
        
        .catch((Error)=> {alert(Error.message)})
       }
       
    }
    // export const loginUserSuccess=(props)=>{
    //     return(dispatch)=>{
           
    //             dispatch({type:LOGIN_USER_SUCCESS})
    //             console.log(LOGIN_USER_SUCCESS)
    //             navigate('Dashboard')
         
    //     }
    // }
