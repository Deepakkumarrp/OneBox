import { Box } from "@mui/material";
import MailSection from "../Components/MailSection";
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import NoMail from "../Components/NoMail";
import { GET_MAILS, GET_TOKEN } from "../Store/actionType";

function Home() {
  const mails = useSelector(store => store.mails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const token = useSelector(store => store.token);

  const location = useLocation();
  const token = location.search.substring(7);
  localStorage.setItem("token", token);
  if(token){
    dispatch({type: GET_TOKEN, payload: token});
  }

  // useEffect(() => {
  //   const getMails = async () => {
  //     const isLoggedIn = localStorage.getItem("isLoggedIn");
  //     console.log("REDIRECT:", isLoggedIn);
  //     if (!isLoggedIn) {
  //       navigate("/login");
  //       return;
  //     }
  //     const TOKEN = localStorage.getItem("token");
  //     try{
  //       const res = await fetch(
  //         "https://hiring.reachinbox.xyz/api/v1/onebox/list",
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${TOKEN}`,
  //           },
  //         }
  //         );
  //         const mails = await res.json();
  //         console.log(mails.data);
  //         dispatch({type: GET_MAILS , payload: mails.data})
  //       }catch(err){
  //         console.log(err);
  //       }
  //   };
  //   getMails();
  // }),[navigate,dispatch];

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (!tokenFromStorage && token) {
      localStorage.setItem("token", token);
      dispatch({ type: GET_TOKEN, payload: token });
    }
  
    const getMails = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        navigate("/login");
        return;
      }
      const TOKEN = localStorage.getItem("token");
      try {
        const res = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        const mails = await res.json();
        console.log(mails.data);
        dispatch({ type: GET_MAILS, payload: mails.data });
      } catch (err) {
        console.log(err);
      }
    };
  
    getMails();
  }, [token, navigate, dispatch]);


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
          {mails.length > 0 ? <MailSection /> : <NoMail />}
        </Box>
      </Box>
    </>
  );
}

export default Home;
