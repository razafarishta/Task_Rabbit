import {combineReducers} from 'redux';
import AuthReducer from '../reducers/AuthReducer';
import CarReducer from '../reducers/CarReducer';
import DeliveryReducer from '../reducers/DeliveryReducer';
import FoodReducer from '../reducers/FoodReducer';

import AdminReducer from '../reducers/AdminReducer';
import OrderReducer from '../reducers/OrderReducer';

// import FoodReducer from '../reducers/FoodReducer';

export default combineReducers({
  auth: AuthReducer,
  admin: AdminReducer,
  car: CarReducer,
  food: FoodReducer,
  delivery: DeliveryReducer,
  order: OrderReducer,
  // Delivery: DeliveryReducer
});
