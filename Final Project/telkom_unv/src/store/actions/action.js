import {ChangeHandler, SimpanPost, SimpanKontak, UserData, KontakData, UserJurusan} from './actionType'
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
export function simpanKontak(){
    return{
        type:SimpanKontak,
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
        fetch("http://kampustelkom.herokuapp.com/api/mahasiswa")
        .then(response => response.json())
        .then(json => {
            dispatch(userData(json))
        })
        .catch(error => {
            throw(error);
        });
    }
}

export const dataKontak = (userkontak) => {
    return {
        type : KontakData,
        userkontak
    }
};

export const fetchKontak = () => {
    return dispatch => {
        fetch("http://kampustelkom.herokuapp.com/api/kontak")
        .then(response => response.json())
        .then(json => {
            dispatch(dataKontak(json))
        })
        .catch(error => {
            throw(error);
        });
    }
}

export const dataJurusan = (userjurusan) => {
    return {
        type : UserJurusan,
        userjurusan
    }
};

export const fetchJurusan = () => {
    return dispatch => {
        fetch("http://kampustelkom.herokuapp.com/api/jurusan")
        .then(response => response.json())
        .then(json => {
            dispatch(dataJurusan(json))
        })
        .catch(error => {
            throw(error);
        });
    }
}