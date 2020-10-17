import {firebase} from '@react-native-firebase/auth';
import {CANCEL_ORDER} from './types';

export const cancelOrder = (navigation) => {
  return async (dispatch) => {
    var userId = firebase.auth().currentUser.uid;
    await firebase.database().ref().child(`user/${userId}/carRide/`).remove();
    navigation.navigate('Root', {screen: 'Dashboard'});
    dispatch({type: CANCEL_ORDER, payload: cancel});
  };
};
