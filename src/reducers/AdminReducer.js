import { SHOW_ORDER_DATA } from '../actions/types'

const INITIAL_STATE ={
    allData:[],
    order:null
}

export default (state= INITIAL_STATE, action)=>{
    console.log(action)
    switch(action.type){
        case SHOW_ORDER_DATA:
            return{...state, allData:action.payload}
            default:
                return state
            // case NEW_ORDER:
            //     return{
            //         ...state,
            //         order:action.payload
            //     }

    }
}