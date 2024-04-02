import { CHANGE_THEME, GET_MAILS, GET_THREAD, GET_TOKEN, LOGIN } from "./actionType";

const initialState = {
  isLoggedIn: false,
  token:'',
  darkMode: true,
  mails: [],
  thread: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAILS:
      return { ...state, mails: action.payload };
    case GET_TOKEN:
      return {...state,token:action.payload};
    case LOGIN:
      console.log(action);
      return { ...state, isLoggedIn: action.payload};
    case CHANGE_THEME:
      return { ...state, darkMode: !state.darkMode };
    case GET_THREAD:
      return {...state, thread: action.payload};

    default:
      return state;
  }
};

export default reducer;