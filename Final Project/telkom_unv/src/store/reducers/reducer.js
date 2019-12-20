import { SimpanPost,SimpanKontak, ChangeHandler } from "../actions/actionType";

const initialState = {
  // items: [],
  // _id: 0,
  namaMahasiswa: "",
  emailMahasiswa: "",
  passwordMahasiswa: "",
  alamatMahasiswa: "",
  genderMahasiswa: "",
  users: [],

  // idJurusan:"",

  // userjurusan:[],

  namaPengirim: "",
  emailPengirim: "",
  pesanPengirim: "",
  kontak:[],

};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ChangeHandler:
      const nama = action.name;
      const isi = action.value;
      console.log(nama+isi);

      return { ...state, [nama]: isi };
    case SimpanPost:
        let nama2 = state.namaMahasiswa
      fetch("http://kampustelkom.herokuapp.com/api/mahasiswa", {
        method: "POST",
        body: JSON.stringify({
          namaMahasiswa: nama2,
          emailMahasiswa: state.emailMahasiswa,
          passwordMahasiswa: state.passwordMahasiswa,
          alamatMahasiswa: state.alamatMahasiswa,
          genderMahasiswa: state.genderMahasiswa,
          // idJurusan: state.idJurusan,
          // userId: state._userid
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
      return { ...state, namaMahasiswa: state.namaMahasiwa,
        emailMahasiswa: state.emailMahasiswa,
        passwordMahasiswa: state.passwordMahasiswa,
        alamatMahasiswa: state.alamatMahasiswa,
        genderMahasiswa: state.genderMahasiswa,
        idJurusan: state.idJurusan};

        case SimpanKontak:
        console.log("test");  
        fetch("http://kampustelkom.herokuapp.com/api/kontak", {
            method: "POST",
            body: JSON.stringify({
              namaPengirim: state.namaPengirim,
              emailPengirim: state.emailPengirim,
              pesanPengirim: state.pesanPengirim
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then(response => response.json())
            .then(json => console.log(json));
          return { ...state, namaPengirim: state.namaPengirim,
            emailPengirim: state.emailPengirim,
            pesanPengirim: state.pesanPengirim };
    default:
      return state;
  }
}
export default reducer;