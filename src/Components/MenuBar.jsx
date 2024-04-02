import React, { useContext } from "react";
import { Box } from "@mui/material";
// import { ThemeContext } from "../App";

import menubarLogo from "../assets/menubarLOGO.png";
import logoDarkMode from "../assets/logoDarkMode.png";
import menubarHOME from "../assets/menubarHOME.png";
import menubarEmail from "../assets/menubarEmail.png";
import menubarEmailAcc from "../assets/menubarEmailAcc.png";
import menubarsendemail from "../assets/menubarsendemail.png";
import menubarMENU from "../assets/menubarMENU.png";
import menubarAllEmail from "../assets/menubarALLEMAIL.png";
import menubarBarChart from "../assets/menubarBARCHART.png";
import { useDispatch, useSelector } from "react-redux";
// redux import useD useSelector

function MenuBar() {
//   const { theme , setTheme} = useContext(ThemeContext);
const theme = useSelector((state) => state.darkMode);
const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          bgcolor: theme ? "#101113" : "#FAFAFA", //theme
        //   bgcolor: "#101113",
          display: "flex",
          position: "fixed",
          flexDirection: "column",
          borderRight: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
        //   borderRight: `1px solid #343a40`,
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          width: "56px",
        }}
      >
        <img
            onClick={() => dispatch({ type: "MAILS" })}
          src={theme ? menubarLogo : logoDarkMode}
          alt="ONEBOX"
          width="26px"
          className="m-8 mt-6"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <img src={menubarHOME} alt="HOME" width="26px" height="18px" />
          <img src={menubarEmail} alt="Email" width="26px" />
          <img src={menubarEmailAcc} alt="EmailAccounts" width="26px" />
          <img src={menubarsendemail} alt="SEND" width="26px" />
          <img src={menubarMENU} alt="MENU" width="26px" />
          <img src={menubarAllEmail} alt="All-Email" width="26px" />
          <img src={menubarBarChart} alt="Bar-Chart" width="26px" />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "3px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "green",
            color: "white",
          }}
        >
          {"DK"}
        </Box>
      </Box>
    </>
  );
}

export default MenuBar;
