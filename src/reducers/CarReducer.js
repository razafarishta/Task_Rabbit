import{
    PICKUP_ADDRESS,
    DROPOFF_ADDRESS,
    DATE,
    TIME,
    NO_OF_PASSENGER,
    INSTRUCTIONS,
    CAR,

} from '../actions/types'

const INITIAL_STATE ={
    pickup:'',
    dropoff:'',
    date:'',
    time:'',
    passenger:'',
    instruction:'',
    car:null,
    response:''
}

export default(state=INITIAL_STATE, action)=>{
    console.log('carActions',action)
    switch(action.type){
        case PICKUP_ADDRESS:
            return{
                ...state,
                pickup: action.payload
            }
            case DROPOFF_ADDRESS:
                return{
                    ...state,
                    dropoff: action.payload
                }
                case DATE:
                    return{
                        ...state,
                        date: action.payload
                    }
                    case TIME:
                    return{
                        ...state,
                        time: action.payload
                    }
                    case NO_OF_PASSENGER:
                        return{
                            ...state,
                            passenger: action.payload
                        }
                        case INSTRUCTIONS:
                            return{
                                ...state,
                                instruction: action.payload
                            }
                            case CAR:
                                return{
                                    ...state,
                                    response:'YOUR CAR BOOKING IS PENDING',
                                    // response: action.payload,
                                    car:action.payload
                                }
                                default:
                                    return state
    }
}