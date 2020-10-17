import{
    PICKUP_ADDRESS,
    DROPOFF_ADDRESS,
    DATE,
    TIME,
    INSTRUCTIONS,
    DELIVERY,

} from '../actions/types'

const INITIAL_STATE ={
    pickup:'',
    dropoff:'',
    date:'',
    time:'',
    passenger:'',
    instruction:'',
    delivery:null,
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
                    // case NO_OF_PASSENGER:
                    //     return{
                    //         ...state,
                    //         passenger: action.payload
                    //     }
                        case INSTRUCTIONS:
                            return{
                                ...state,
                                instruction: action.payload
                            }
                            case DELIVERY:
                                return{
                                    ...state,
                                    response: 'Your goods delivery requeust is pending',
                                    delivery:action.payload
                                }
                                default:
                                    return state
    }
}