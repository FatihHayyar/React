export const COUNTER_INCREMENT="COUNTER_INCREMENT";
export const COUNTER_DECCREMENT="COUNTER_DECCREMENT";
export const COUNTER_RESET="COUNTER_RESET";

export const increment = ()=>{
    return {
        type: COUNTER_INCREMENT
    }
}
export const deccrement = ()=>
    ({
        type: COUNTER_DECCREMENT
    });
    export const reset = ()=>
    ({
        type: COUNTER_RESET
    });
