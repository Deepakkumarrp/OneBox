import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box
      // margin={"50px auto"}
      // display={"flex"}
      // justifyContent={"space-around"}
      >
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
      </Box>
    </>
  );
}

export default NavBar;
