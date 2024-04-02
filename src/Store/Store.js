import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
  darkMode: true,
  mails: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAILS":
      return { ...state, mails: !state.mails };
    case "LOGIN":
      console.log(action);
      return { ...state, isLoggedIn: action.payload };
    case "THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
