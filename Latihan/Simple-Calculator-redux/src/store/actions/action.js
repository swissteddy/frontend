import{BackHandler, ChangeHandler, SubmitHandler} from "./actionTypes";

export function changeHandler (name, value) {
    return {
        type: ChangeHandler,
        name,
        value
    };
}

export function submitHandler(){
    return {
        type: SubmitHandler,   
    };
}
export function backHandler(){
    return{
        type: BackHandler,
    };
}