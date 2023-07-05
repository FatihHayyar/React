import { COUNTER_DECCREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./actions"
import { counterInitialState } from "./initialState"

export const counterReducer =(state=counterInitialState,action)=>{
if(action.type===COUNTER_INCREMENT){
    return{
        ...state,
        counter: state.counter + 1
    }
}else if(action.type===COUNTER_DECCREMENT){
    return{
        ...state,
        counter: state.counter - 1
    }
}else if(action.type===COUNTER_RESET){
    return{
        ...state,
        counter:0
    }
}else{
    return state;

    
}
}