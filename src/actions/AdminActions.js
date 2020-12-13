import {SHOW_ORDER_DATA} from './types';
import {firebase} from '@react-native-firebase/auth';

export const orderData = (orderId) => {
  return (dispatch) => {
    // const userId = firebase.auth().uid;

    firebase
      .database()
      .ref(`carRide/`)
      .on('value', (snapshot) => {
        console.log('snapshot', snapshot.val());
        const data = snapshot.val();
        console.log('carData', data);
        const TemArr = [];
        for (let key in data) {
          TemArr.push({
            orderId: key,
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

export const deliveryOrder = () => {
  return (dispatch) => {
    firebase
      .database()
      .ref(`delivery/`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        console.log('deliveryData', data);
        const DelArr = [];
        for (let key in data) {
          DelArr.push({
            orderId: key,
            // userId:data[key].userId,
            pickup: data[key].pickup,
            dropoff: data[key].dropoff,
            passenger: data[key].passenger,
            instruction: data[key].instruction,
          });
        }
        dispatch({type: SHOW_ORDER_DATA, payload: DelArr});
      });
  };
};
