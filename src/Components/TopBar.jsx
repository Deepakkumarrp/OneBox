import { Typography, Box } from "@mui/material";
import lightMode from "../assets/lightMode.png";
import darkMode from "../assets/darkmode.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CHANGE_THEME } from "../Store/actionType";

function TopBar() {
  const theme = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();
  useEffect(() => {
    const slider =
      document.getElementById("outerbox1") ||
      document.getElementById("insidecircle1");
    slider.addEventListener("click", () => {
      const circle = document.getElementById("insidecircle1");
      if (getComputedStyle(circle).left == "5px") {
        circle.style.left = "50%";
        // slider.style.backgroundColor = "#1877F2";
      } else {
        circle.style.left = "5px";
        // slider.style.backgroundColor = "rgb(179, 171, 171)";
      }
    });
  }, []);
  const handleDarkMode = () => {
    dispatch({ type: CHANGE_THEME });
  };
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#343A40",
          // backgroundColor: "#343A40",
          // backgroundColor:{theme ? "#343A40" : "#000000"},
          bgcolor: theme ? "#202022" : "#FAFAFA",
          display: "flex",
          color: "white",
          borderBottom: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
          padding: "10px 20px",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        <Typography
          sx={{
            bgcolor: theme ? "#202022" : "#FAFAFA",
            color: theme ? "#FAFAFA" : "#000000",
          }}
        >
          OneBox
        </Typography>
        {/* background-color: #7e7d7e; background-color: #222428; */}
        <Box className="flex items-center gap-5">
          <Box
            id="outerbox1"
            sx={{
              bgcolor: theme ? "#222428" : "#E9EAEC",
              border: `1px solid  ${theme ? "#33383F" : "#e5e7e9"}`,
            }}
            onClick={handleDarkMode}
          >
            <img
              style={{ position: "absolute", top: "7px", left: "30px" }}
              src={lightMode}
              alt="lightMode"
            />
            <img
              style={{ position: "absolute", top: "7px", left: "10px" }}
              src={darkMode}
              alt="darkMode"
            />
            <Box sx={{ bgcolor: "#7E7d7E" }} id="insidecircle1"></Box>
          </Box>
          <Box className="flex">
            <Typography sx={{ color: theme ? "#FAFAFA" : "#000000" }}>
              Tim's WorkSpace
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: theme ? "white" : "black" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TopBar;
