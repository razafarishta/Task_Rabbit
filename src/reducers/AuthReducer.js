import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  PHONE_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  LOGIN_USER,
  POSTAL_CHANGED,
  LAST_NAME_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  ISLOGGEDIN_USER,
  LOGOUT_SUCCESS,SUBMIT_NUMBER, FB_LOGIN_USER, GOOGLE_LOGIN_USER, FORGET_PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  postal: '',
  phone:'',
  user: null,
  error: '',
  loading: false,
  isLoggedIn: false,
  obj:null
  // isAuthenticated:false
};
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case NAME_CHANGED:
      return {...state, first_name: action.payload};
    case LAST_NAME_CHANGED:
      return {...state, last_name: action.payload};
    case POSTAL_CHANGED:
      return {...state, postal: action.payload};
      case PHONE_CHANGED:
        return{...state, phone: action.payload}
        case SUBMIT_NUMBER:
          return{...state, phoneuser: action.payload, phone:''}
    case SIGNUP_USER:
      return {...state, loading: true, user: action.payload};
    case SIGNUP_USER_SUCCESS:
      return {...state, loading: false, user: action.payload};
    case SIGNUP_USER_FAIL:
      return {...state, email: '', password: ''};
    case LOGIN_USER:
      return {...state, user: action.payload};
      case FORGET_PASSWORD:
        return{...state, email:action.payload}
      case FB_LOGIN_USER:
        return{...state, obj: action.payload}
        case GOOGLE_LOGIN_USER:
          return{...state, obj: action.payload}
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
