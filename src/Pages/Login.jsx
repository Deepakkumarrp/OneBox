import { Box, Button, Typography } from "@mui/material";
import React from "react";
import googleLogo from "../assets/googlelogo.png";
import reachInboxLogo from "../assets/reachInboxLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/actions";
import { LOGIN } from "../Store/actionType";

function Login() {
  const theme = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
      }}
    >
      <Box
        as="header"
        sx={{
          border: "1px solid #25262B",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
          bgcolor: theme ? "black" : "white",
        }}
      >
        <img src={reachInboxLogo} alt={"reachInboxLogo"} height={"24px"} />
      </Box>
      <Box
        sx={{
          flex: "1",
          padding: ["80px", "100px", "120px"],
          bgcolor: theme ? "black" : "white",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: ["90%", "80%", "460px"],
            color: "#C1C2C5",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "17px",
            border: "1px solid #343A40",
            height: "auto",
            minHeight: "300px", 
            padding: "20px", 
          }}
        >
          <Typography color={"#FFFFFF"} fontSize={"20px"}>
            Create a new account
          </Typography>

          <Box
            sx={{
              width: "380px",
              height: "48px",
              border: "1px solid #707172",
              borderRadius: "5px",
              display: "flex",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={googleLogo} alt="Google Logo" />
            <Link
              onClick={() => {
                localStorage.setItem("isLoggedIn", true);
                dispatch({ type: LOGIN, payload: true });
              }}
              // to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/"
                to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://one-box-brown.vercel.app/"
            >
              Sign Up with Google
            </Link>
          </Box>
          <Button
            style={{
              background:
                "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              color: "white",
              textTransform: "none",
              width: "195px",
              height: "48px",
              padding: "13px 35px",
              gap: "10px",
              fontSize: "14px",
            }}
            variant="contained"
          >
            Create an Account
          </Button>

          <Box
            sx={{
              display: "flex",
              gap: "1",
              color: "#909296",
            }}
          >
            <Typography>Already have an account? </Typography>
            <Typography color={"#C1C2C5"}>
              <Link to="/">&nbsp;Sign In</Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        as="footer"
        sx={{
          bgcolor: theme ? "#121212" : "white",
          border: "1px solid #25262B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography
          as="footer"
          sx={{
            textAlign: "center",
            color: "#5C5F66",
            height: "32px",
          }}
        >
          © 2023 Reachinbox. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
