import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    NAME_CHANGED,
    SIGNUP_USER,
    SIGNUP_USER_FAIL,
    SIGNUP_USER_SUCCESS,
    LOGIN_USER,
    POSTAL_CHANGED,
    LAST_NAME_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
    email:'',
    password:'',
    name:'',
    last:'',
    postal:'',
    user: null,
    error:'', 
    loading: false,
    isLoggedIn:false
    // isAuthenticated:false
};
export default (state = INITIAL_STATE, action) =>{
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED:
            return{...state,email:action.payload}
            case PASSWORD_CHANGED:
                return{...state, password:action.payload}
                case NAME_CHANGED:
                return{...state, name:action.payload}
                case LAST_NAME_CHANGED:
                return{...state, last:action.payload}
                case POSTAL_CHANGED:
                return{...state, postal:action.payload}
                case SIGNUP_USER:
                    return{...state, loading:true}
                    case SIGNUP_USER_SUCCESS:
                        return{...state, loading:false, user:action.payload}
                        case SIGNUP_USER_FAIL:
                            return{...state, email:'',password:''}
                            // case LOGIN_USER:
                            //     return{...state}
                            //     case 
                            case LOGIN_USER:
                                return{...state, isLoggedIn:true, user:action.payload}
                                // case LOGIN_USER_SUCCESS:
                                //     return{...state, isLoggedIn:true, user:action.payload}
                            default:
                                return state
    }
}
