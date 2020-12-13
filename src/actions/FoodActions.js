import {
  DROPOFF_ADDRESS,
  FOOD,
  INSTRUCTIONS,
  ITEM_NAME,
  ITEM_QUANTITY,
  RESTURANT_NAME,
} from './types';
import {firebase} from '@react-native-firebase/auth';
import '@react-native-firebase/database';

export const resturantChanged = (text) => {
  return {
    type: RESTURANT_NAME,
    payload: text,
  };
};

export const itemChanged = (text) => {
  return {
    type: ITEM_NAME,
    payload: text,
  };
};

export const quantityChanged = (text) => {
  return {
    type: ITEM_QUANTITY,
    payload: text,
  };
};

export const dropoffChanged = (text) => {
  return {
    type: DROPOFF_ADDRESS,
    payload: text,
  };
};
export const instructionChanged = (text) => {
  return {
    type: INSTRUCTIONS,
    payload: text,
  };
};

export const foodDelivery = (
  {resturant, item, quantity, dropoff, instruction, response},
  navigation,
) => {
  var userID = firebase.auth().currentUser.uid;

  let food = {
    userID,
    resturant,
    item,
    quantity,
    dropoff,
    instruction,
    response,
  };
  return (dispatch) => {
    firebase.database().ref(`FoodDelivery/`).push(food);
    console.log(food);
    navigation.navigate('Root', {screen: 'Pending'});

    dispatch({type: FOOD, payload: food});
  };
};
