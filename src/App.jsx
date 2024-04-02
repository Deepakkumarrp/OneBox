// import { createContext, useState } from 'react'
// import './App.css'
// import { BrowserRouter } from 'react-router-dom'
// import MainRoute from './MainRoute/MainRoute'

// export const ThemeContext = createContext();
// function App() {
//   const [ theme , setTheme ] = useState(true);
//   return (
//     <>
//      <BrowserRouter>
//       <ThemeContext.Provider value={{theme,setTheme}}>
//         <MainRoute />
//       </ThemeContext.Provider>
//      </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";
import { Provider } from "react-redux";
import store from "./Store/Store";
import NavBar from "./Components/NavBar";
import { Paper, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "dark",
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper>
          <Provider store={store}>
            <BrowserRouter>
              <MainRoute />
            </BrowserRouter>
          </Provider>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
