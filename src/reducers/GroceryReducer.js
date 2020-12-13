import {
  DROPOFF_ADDRESS,
  ITEM_NAME,
  ITEM_QUANTITY,
  DATE,
  TIME,
  INSTRUCTIONS,
  GROCERY,
} from '../actions/types';

const INITIAL_STATE = {
  item: '',
  quantity: '',
  dropoff: '',
  date: '',
  time: '',
  instruction: '',
  grocery: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log('DeliveryActions', action);
  switch (action.type) {
    case ITEM_NAME:
      return {
        ...state,
        item: action.payload,
      };
    case ITEM_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case DROPOFF_ADDRESS:
      return {
        ...state,
        dropoff: action.payload,
      };
    case DATE:
      return {
        ...state,
        date: action.payload,
      };
    case TIME:
      return {
        ...state,
        time: action.payload,
      };
    // case NO_OF_PASSENGER:
    //     return{
    //         ...state,
    //         passenger: action.payload
    //     }
    case INSTRUCTIONS:
      return {
        ...state,
        instruction: action.payload,
      };
    case GROCERY:
      return {
        ...state,
        item: '',
        quantity: '',
        dropoff: '',
        instruction: '',
        grocery: action.payload,
      };
    default:
      return state;
  }
};
