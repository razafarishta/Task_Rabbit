import {
  Order_History,
  DELIVERY_ORDER_HISTORY,
  FOOD_ORDER_HISTORY,
} from '../actions/types';

const INITIAL_STATE = {
  orderr: null,
  delivery: null,
  food: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log('OrderActions', action);
  switch (action.type) {
    case Order_History:
      return {
        ...state,
        orderr: action.payload,
      };
    case DELIVERY_ORDER_HISTORY:
      return {
        ...state,
        delivery: action.payload,
      };
    case FOOD_ORDER_HISTORY:
      return {
        ...state,
        food: action.payload,
      };
    default:
      return state;
  }
};
