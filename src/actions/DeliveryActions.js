import {firebase} from '@react-native-firebase/auth';
import {DELIVERY} from './types';
import '@react-native-firebase/database';

export const goodDelivery = (
  {pickup, dropoff, date, time, instruction, response},
  navigation,
) => {
  var userID = firebase.auth().currentUser.uid;

  let delivery = {
    userID,
    pickup,
    dropoff,
    date,
    // time,,
    instruction,
    response,
  };
  return (dispatch) => {
    firebase
      .database()
      .ref(`delivery/`)

      .push(delivery);
    console.log(delivery);
    navigation.navigate('Root', {screen: 'Pending'});

    dispatch({type: DELIVERY, payload: delivery});
  };
};
