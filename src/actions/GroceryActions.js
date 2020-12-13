import {firebase} from '@react-native-firebase/auth';
import {GROCERY} from './types';
import '@react-native-firebase/database';

export const groceryDelivery = (
  {item, quantity, dropoff, date, time, instruction, response},
  navigation,
) => {
  var userID = firebase.auth().currentUser.uid;

  let grocery = {
    userID,
    item,
    quantity,
    dropoff,
    date,
    // time,,
    instruction,

    response,
  };
  return (dispatch) => {
    firebase.database().ref(`grocery/`).push(grocery);
    console.log(grocery);
    navigation.navigate('Root', {screen: 'Pending'});

    dispatch({type: GROCERY, payload: grocery});
  };
};
