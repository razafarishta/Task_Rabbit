import {
  DROPOFF_ADDRESS,
  INSTRUCTIONS,
  RESTURANT_NAME,
  ITEM_QUANTITY,
  ITEM_NAME,
  FOOD,
} from '../actions/types';

const INITIAL_STATE = {
  food: null,
  resturant: '',
  item: '',
  quantity: '',
  dropoff: '',
  instruction: '',
  // response: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log('food Actions', action);
  switch (action.type) {
    case RESTURANT_NAME:
      return {
        ...state,
        resturant: action.payload,
      };
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

    case INSTRUCTIONS:
      return {
        ...state,
        instruction: action.payload,
      };
    case FOOD:
      return {
        ...state,
        // response: 'Your ffod delivery requeust is pending',
        food: action.payload,
        resturant: '',
        item: '',
        quantity: '',
        dropoff: '',
        instruction: '',
      };
    default:
      return state;
  }
};
