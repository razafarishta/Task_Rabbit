import { firebase } from "@react-native-firebase/auth"
import { DELIVERY } from "./types"
import "@react-native-firebase/database";


// export const pickupChanged =(text)=>{
//     return{
//         type: PICKUP_ADDRESS,
//         payload: text
//     }
// } 

// export const dropoffChanged =(text)=>{
//     return{
//         type: DROPOFF_ADDRESS,
//         payload: text
//     }
// } 

// export const dateChanged =(text)=>{
//     return{
//         type: DATE,
//         payload: text
//     }
// } 

// export const timeChanged =(text)=>{
//     return{
//         type: TIME,
//         payload: text
//     }
// } 
// export const passengerChanged =(text)=>{
//     return{
//         type: NO_OF_PASSENGER,
//         payload: text
//     }
// } 
// export const instructionChanged =(text)=>{
//     return{
//         type: INSTRUCTIONS,
//         payload: text
//     }
// } 
export const goodDelivery = ({ pickup,dropoff,date,time,instruction, response})=>{
    let delivery= {
        pickup,
        dropoff,
        date,
        // time,,
        instruction,
        response

    }
    return(dispatch) =>{
     firebase.database().ref().child(`user/${firebase.auth().currentUser.uid}/delivery/`)
     .push(delivery)
     console.log(delivery)
     dispatch({type:DELIVERY, payload: delivery})
    }
}