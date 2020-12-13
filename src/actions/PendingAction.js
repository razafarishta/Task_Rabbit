import {firebase} from '@react-native-firebase/auth';
import {CANCEL_ORDER} from './types';

export const cancelOrder = (navigation, orderId) => {
  // console.log(id);
  return async (dispatch) => {
    var userId = firebase.auth().currentUser.uid;

    await firebase
      .database()
      .ref()
      .child(`user/${userId}/carRide/${orderId}`)
      .remove();
    navigation.navigate('Root', {screen: 'Dashboard'});
    dispatch({type: CANCEL_ORDER});
  };
};

export const DeliverycancelOrder = (navigation, deliveryorderId) => {
  // console.log(id);
  return async (dispatch) => {
    var userId = firebase.auth().currentUser.uid;

    await firebase
      .database()
      .ref()
      .child(`user/${userId}/delivery/${deliveryorderId}`)
      .remove();
    navigation.navigate('Root', {screen: 'Dashboard'});
    dispatch({type: CANCEL_ORDER});
  };
};
