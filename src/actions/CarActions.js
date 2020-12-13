import {firebase} from '@react-native-firebase/auth';
import {
  DATE,
  DROPOFF_ADDRESS,
  PICKUP_ADDRESS,
  TIME,
  CAR,
  NO_OF_PASSENGER,
  INSTRUCTIONS,
} from './types';
import '@react-native-firebase/database';

export const pickupChanged = (text) => {
  return {
    type: PICKUP_ADDRESS,
    payload: text,
  };
};

export const dropoffChanged = (text) => {
  return {
    type: DROPOFF_ADDRESS,
    payload: text,
  };
};

export const dateChanged = (text) => {
  return {
    type: DATE,
    payload: text,
  };
};

export const timeChanged = (text) => {
  return {
    type: TIME,
    payload: text,
  };
};
export const passengerChanged = (text) => {
  return {
    type: NO_OF_PASSENGER,
    payload: text,
  };
};
export const instructionChanged = (text) => {
  return {
    type: INSTRUCTIONS,
    payload: text,
  };
};
export const carRide = (
  {pickup, dropoff, date, time, passenger, instruction, response, userID},
  navigation,
) => {
  var userID = firebase.auth().currentUser.uid;

  let car = {
    userID,
    pickup,
    dropoff,
    date,
    time,
    passenger,
    instruction,
    response,
    // userID: firebase.auth.currentUser.uid,
  };
  return (dispatch) => {
    // var userID = firebase.auth().currentUser.uid;
    firebase.database().ref(`carRide/`).push(car);
    console.log(car);
    navigation.navigate('Root', {screen: 'Pending'});
    dispatch({type: CAR, car});
    // console.log(car);
  };
};

export const carRideData = () => {
  return (dispatch) => {
    try {
      firebase
        .database()
        .ref()
        .child(`carRide/`)
        .on('value', (snapshot) => {
          const data = snapshot.val();
        });
    } catch (error) {}
  };
};
