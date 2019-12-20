import {ChangeHandler, SimpanPost, UserData} from './actionType'
export function changeHandler(name, value){
    return{
        type:ChangeHandler,
        name,
        value

    };
}
export function simpanPost(){
    return{
        type:SimpanPost,
    };
}

//tambahan code untuk redux thunk /middleware
export const userData = (users) => {
    return {
        type : UserData,
        users
    }
};

export const fetchUsers = () => {
    return dispatch => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(json => {
            dispatch(userData(json))
        })
        .catch(error => {
            throw(error);
        });
    }
}