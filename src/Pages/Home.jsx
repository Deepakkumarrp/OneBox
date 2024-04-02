// import React from 'react'
// import MenuBar from '../Components/MenuBar'
// import TopBar from '../Components/TopBar'
// import { Box } from '@mui/material'

// function Home() {
//   return (
//     <>
//       {/* <MenuBar />
//       <TopBar /> */}

//       <Box sx={{ display: "flex", border:"1px solid red"}}>
//         <MenuBar />

//         <Box
//           sx={{
//             border: "2px solid green",
//             display: "flex",
//             position: "relative",
//             left: "56px",
//             flexDirection: "column",
//             width: "95.5%",
//           }}
//         >
//           <TopBar />
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default Home

import { Box } from "@mui/material";
import MailSection from "../Components/MailSection";
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import NoMail from "../Components/NoMail";

function Home() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const mails = useSelector((state) => state.mails);
  const navigate = useNavigate();

  useEffect(() => {
    const getMails = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      console.log("REDIRECT:", isLoggedIn);
      if (!isLoggedIn) {
        navigate("/login");
        return;
      }
      const tok = localStorage.getItem("token");
      const res = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        }
      );
      const mails = await res.json();
    };
    getMails();
  }),
    [];
  const location = useLocation();
  const token = location.search.substring(7);
  localStorage.setItem("token", token);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MenuBar />

        <Box
          sx={{
            display: "flex",
            position: "relative",
            left: "56px",
            flexDirection: "column",
            width: "95.5%",
          }}
        >
          <TopBar />
          {mails ? <MailSection /> : <NoMail />}
        </Box>
      </Box>
    </>
  );
}

export default Home;
