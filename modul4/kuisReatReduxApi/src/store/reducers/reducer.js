import { SimpanPost, ChangeHandler } from "../actions/actionType";

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
      const nama = action.name;
      const isi = action.value;
      return { ...state, [nama]: isi };
    case SimpanPost:
      fetch("http://dummy.restapiexample.com/api/v1/create", {
        method: "POST",
        body: JSON.stringify({
          employee_salary: state.title,
          employee_age: state.body,
          id: state.userid
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
      const users = action.users;
      return { ...state, users };

    default:
      return state;
  }


}

export default reducer;