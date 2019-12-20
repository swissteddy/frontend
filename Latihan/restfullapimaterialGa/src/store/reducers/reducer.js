import { SimpanPost, ChangeHandler } from "../actions/actionType";
import ReactGA from 'react-ga';

const initialState = {
  items: [],
  title: "",
  body: "",
  userid: 0,
  users: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ChangeHandler:
        ReactGA.event({
          category:'Data',
          action:'Change Data'
        });
      const nama = action.name;
      const isi = action.value;
      return { ...state, [nama]: isi };
    case SimpanPost:
        ReactGA.event({
          category:'SaveData',
          action:'Simpan Data'
        });
      fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: state.title,
          body: state.body,
          userId: state.userid
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
      return { ...state, title: state.title, body: state.body };

    //tambahan code untuk redux thunk /middleware
    case "UserData":
        ReactGA.event({
          category:'UserData',
          action:'User Data'
        });
      const users = action.users;
      return { ...state, users };

    default:
      return state;
  }


}

export default reducer;