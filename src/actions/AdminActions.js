import {SHOW_ORDER_DATA} from './types';
import {firebase} from '@react-native-firebase/auth';

export const orderData = () => {
  return (dispatch) => {
    var userId = firebase.auth().currentUser.uid;

    firebase
      .database()
      .ref()
      .child(`user/${userId}/carRide`)
      .on('value', (snapshot) => {
        console.log('snapshot', snapshot.val());
        const data = snapshot.val();
        console.log(data);
        const TemArr = [];
        for (let key in data) {
          TemArr.push({
            userId: key,
            // userId:data[key].userId,
            pickup: data[key].pickup,
            dropoff: data[key].dropoff,
            passenger: data[key].passenger,
            instruction: data[key].instruction,
          });
        }
        dispatch({type: SHOW_ORDER_DATA, payload: TemArr});
      });
  };
};
