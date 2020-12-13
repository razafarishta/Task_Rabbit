import {
  Order_History,
  DELIVERY_ORDER_HISTORY,
  FOOD_ORDER_HISTORY,
  GROCERY_ORDER_HISTORY,
} from '../actions/types';

const INITIAL_STATE = {
  orderr: [],
  delivery: [],
  food: [],
  grocery: [],
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

    case GROCERY_ORDER_HISTORY:
      return {
        ...state,
        grocery: action.payload,
      };
    default:
      return state;
  }
};
