import {UpdateHandler, BackHandler, ButtonHandler, PersegiHandler, PersegiPanjangHandler, LingkaranHandler} from "./actionTypes";

export function UpdateHandler (name, value) {
    return {
        type :UpdateHandler,
        name,
        value
    };
}

export function BackHandler(){
    return{
        type: BackHandler,
    };
}
export function ButtonHandler(){
    return{
        type:ButtonHandler,
        rumus,
        angka
    };
}

export function PersegiHandler(){
    return{
        type:PersegiHandler,
    };
}

export function PersegiPanjangHandler(){
    return{
        type:PersegiPanjangHandler,
    };
}
export function LingkaranHandler(){
    return{
        type:LingkaranHandler,
    };
}