const initialState = {
    angka1: 0,
    angka2:0,
    hasil:0,
    rumus:1,
    submit:false,
};

function reducer(state = initialState, action){
    switch (action.type){
        case 'UpdateHandler':
            const nama = action.name;
            const isi = action.value;
            return { ...state,[nama]: isi};
        case 'ButtonHandler':
            const xrumus = action.rumus;
            const xangka = action.angka;
            return { ...state,[rumus]:angka};
        case ''
    }
}