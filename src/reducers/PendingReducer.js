import { CANCEL_ORDER } from "../actions/types"


const INITIAL_STATE ={
    cancel = null
}
  
export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case CANCEL_ORDER :
            return{
                ...state,
                cancel: action.payload
            }
            default:
                return state
    }
}

