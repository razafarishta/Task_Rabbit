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
  {pickup, dropoff, date, time, passenger, instruction, response},
  navigation,
) => {
  let car = {
    pickup,
    dropoff,
    date,
    time,
    passenger,
    instruction,
    response,
  };
  return (dispatch) => {
    firebase
      .database()
      .ref()
      .child(`user/${firebase.auth().currentUser.uid}/carRide/`)
      .push(car);
    console.log(car);
    navigation.navigate('Root', {screen: 'Pending'});
    dispatch({type: CAR, car});
  };
};
