const initialState = {
    angka1: 0,
    angka2: 0,
    hasil: 0,
    type: "lingkaran"
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "Update":
            const nama = action.name;
            const isi = action.value;
            return { ...state, [nama]: isi };
        case "Calculate":
            let k_angka1 = parseInt(state.angka1);
            let k_angka2 = parseInt(state.angka2);
            let hasil = 0;

            switch (state.type) {
                case "lingkaran":
                    hasil = (22 / 7) * k_angka1;
                    break;
                case "persegi":
                    hasil = k_angka1 * k_angka1;
                    break;
                default:
                    hasil = k_angka1 * k_angka2;
                    break;
            }
            return { ...state, hasil };
        case "SwitchTab":
            const nama2 = action.name;
            const isi2 = action.value;
            return { ...state, [nama2]: isi2 };
        default:
            return state;
    }
}

export default reducer;
