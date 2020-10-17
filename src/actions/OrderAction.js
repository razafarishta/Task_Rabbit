import {firebase} from '@react-native-firebase/auth';
import {Order_History} from './types';

export const OrderHistory = (userId) => {
  return (dispatch) => {
    // const {uid} =firebase.auth.currentUser.uid
    // const {userId} = firebase.auth().currentUser.uid;
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref()
      .child(`user/${userId}/carRide`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        const data = snapshot.val();
        const TemArr = [];
        for (let key in data) {
          TemArr.push({
            orderId: key,
            dropoff: data[key].dropoff,
            pickup: data[key].pickup,
            instruction: data[key].instruction,
            passenger: data[key].passenger,
          });
        }
        dispatch({type: Order_History, payload: TemArr});
      });
  };
};

export const DeliveryOrderHistory = (userId) => {
  return (dispatch) => {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref()
      .child(`user/${userId}/delivery`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        const data = snapshot.val();
        const TemArr = [];
        for (let key in data) {
          TemArr.push({
            orderId: key,
            dropoff: data[key].dropoff,
            pickup: data[key].pickup,
            instruction: data[key].instruction,
          });
        }
        dispatch({type: Order_History, payload: TemArr});
      });
  };
};
