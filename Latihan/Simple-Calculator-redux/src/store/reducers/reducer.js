const initialState = {
    submit: false,
    hasil: 0,
    angka1: 0,
    angka2: 0,
    operator: " ",

};
function reducer(state = initialState, action) {
    switch (action.type) {
        
        case 'ChangeHandler':
            const nama = action.name;
            const isi = action.value;
            return { ...state, [nama]: isi };
        case 'SubmitHandler':
            const angka1 = parseInt(state.angka1)
            const angka2 = parseInt(state.angka2)
            const operator = state.operator
            let hasil = 0

            if (operator === "+") {
                hasil = angka1 + angka2
            } else if (operator === "-") {
                hasil = angka1 - angka2
            } else if (operator === "*") {
                hasil = angka1 * angka2
            } else if (operator === "/") {
                hasil = angka1 / angka2
            }

            console.log(angka1, "angka1");
            console.log(angka2, "angka2");
            console.log(operator, "operator");
            console.log(hasil, "hasil");

            return { ...state, hasil: hasil, submit: true };
        case 'BackHandler':
            return { ...state, submit: false };
        default:
            return state;
    }
}

export default reducer;