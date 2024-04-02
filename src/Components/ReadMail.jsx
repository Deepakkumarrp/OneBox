import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageMail from "./MessageMail";
// import expand from "../assets/expandButton.png";
import expand from "../assets/expandButton2.png";
import replyIcon from "../assets/reply.png";
import arrow_dropDown from "../assets/arrow_dropDown.png";
import MailEditor from "./MailEditor";
import {  useState } from "react";
import DeleteMail from "./DeleteMail";
import {  useSelector } from "react-redux";
function ReadMail() {
  const [reply, setReply] = useState(false);
  const [deletemail, setDeleteMail] = useState(false);
  const [readAll, setReadAll] = useState(false);

  const theme = useSelector((state) => state.darkMode);
  
  const message = {
    subject: "New Product Launch",
    time: "20 june 2022 : 9:16AM",
    to: "to : lennon.j@mail.com",
    from: "from : jeanne@icloud.com cc : lennon.j@mail.com",
    cc: "to : lennon.j@mail.com",
    intro: "Hi {FIRST_NAME} ",
    message:
      "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
  };
  // function handleKeyDown(event) {
  //   if (event.key === "r") {
  //     setReply(!reply);
  //     console.log("r key pressed");
  //   } else if (event.key === "d") {
  //     console.log("d key pressed");
  //   }
  // }

  function handleKeyDown(event) {
    if (event.key === "r") {
      setReply(!reply);
    } else if (event.key === "d") {
      console.log("aslkdnfskjd");
      setDeleteMail(!deletemail);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return (
    <>
      <Box >
        <Box
          sx={{
            width: "700px",
            height: "70px",
            top: "69px",
            left: "363px",
            padding: "0px 8px 0px 17px",
            gap: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "7px 7px 0px 0px",
            border: "0px solid transparent",

            bgcolor: theme ? "#000000" : "#FAFAFA",
            color: theme ? "#FAFAFA" : "#000000",
          }}
        >
          <Box
            sx={{
              width: "422px",
              height: "46px",
            }}
          >
            <Typography>Orlando</Typography>
            <Typography sx={{ color: theme ? "#666666" : "#000000" }}>
              Orlando@gmail.com
            </Typography>
          </Box>

          <Box
            className="flex gap-2   items-center"
            sx={{
              padding: "6px 8px",
              borderRadius: "4px",
              border: `1px solid ${!theme ? "#DFE3E8" : "transparent"}`,
              bgcolor: theme ? "#1f1f1f" : "#FFFFFF",
              color: theme ? "#FFFFFF" : "#000000",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                margin: "3px",
                borderRadius: "50%",
                bgcolor: "#444234",
              }}
            ></Box>
            <Box
              sx={{
                width: "16px",
                bgcolor: "#e6d162",
                height: "16px",
                opacity: 0.5,
                position: "absolute",
                borderRadius: "50%",
              }}
            ></Box>
            <Typography sx={{ width: "180px" }}>Meeting Completed</Typography>
            <KeyboardArrowDownIcon />
          </Box>
          <Box
            className="flex gap-2   items-center"
            sx={{
              padding: "6px 12px",
              borderRadius: "4px",
              border: `1px solid ${!theme ? "#DFE3E8" : "transparent"}`,
              bgcolor: theme ? "#1f1f1f" : "#FFFFFF",
              color: theme ? "#FFFFFF" : "#000000",
            }}
          >
            <Typography>Move</Typography>
            <KeyboardArrowDownIcon />
          </Box>
          {/* <KeyboardArrowDownIcon /> */}
          <Box
            className="flex justify-center items-center"
            sx={{
              width: "36px",
              height: "36px",
              borderRadius: "4px",
              padding: "6px 12px",
              border: `1px solid ${!theme ? "#DFE3E8" : "transparent"}`,
              bgcolor: theme ? "#1f1f1f" : "FFFFFF",
              color: theme ? "#FFFFFF" : "#000000",
            }}
          >
            <MoreHorizIcon />
          </Box>
          {/* <Box>Three Dots</Box> */}
        </Box>
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            position: "relative",
            height: "1px",
            borderBottom: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
          }}
        ></Box>
        {!readAll ? (
          <Box
            sx={{ bgcolor: theme ? "#000000" : "#F4F6F8", paddingX: "20px" }}
          >
            <Typography
              sx={{
                position: "relative",
                zIndex: "1",
                width: "fit-content",
                bgcolor: theme ? "#171819" : "#EEF1F4",
                paddingX: "10px",
                margin: "auto",
              }}
            >
              TODAY
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                margin: "auto",
                zIndex: "0",
                position: "relative",
                top: "-15px",
                border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`,
              }}
            ></Box>
            <MessageMail message={message} />

            <Box
              className="flex items-center gap-2 my-4 mx-auto"
              sx={{
                padding: "5px 30px",
                position: "relative",
                zIndex: "1",
                width: "fit-content",
                border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`,
                bgcolor: theme ? "#171819" : "#EEF1F4",
              }}
              onClick={() => setReadAll(true)}
            >
              <img style={{ height: "15px" }} src={expand} alt="expand" />
              <Typography
                sx={{
                  position: "relative",
                  zIndex: "1",
                  paddingX: "10px",
                  margin: "auto",
                  width: "fit-content",
                }}
              >
                View all 4 replies
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                margin: "auto",
                zIndex: "0",
                position: "relative",
                top: "-35px",
                border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`,
              }}
            ></Box>
          </Box>
        ) : (
          <Box
            sx={{ bgcolor: theme ? "#000000" : "#F4F6F8", paddingX: "20px" }}
          >
            <Typography
              sx={{
                position: "relative",
                zIndex: "1",
                width: "fit-content",
                bgcolor: theme ? "#171819" : "#EEF1F4",
                paddingX: "10px",
                margin: "10px auto 0 auto ",
              }}
            >
              21 Feb
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                margin: "auto",
                zIndex: "0",
                position: "relative",
                top: "-15px",
                border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`,
              }}
            ></Box>
            <MessageMail message={message} />
            <Typography
              sx={{
                position: "relative",
                zIndex: "1",
                width: "fit-content",
                bgcolor: theme ? "#171819" : "#EEF1F4",
                paddingX: "10px",
                margin: "auto",
              }}
            >
              Yesterday
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                margin: "auto",
                zIndex: "0",
                position: "relative",
                top: "-15px",
                border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`,
              }}
            ></Box>
            {/* <Typography>Yesterday</Typography> */}
            <MessageMail message={message} />
            {/* <Typography>TODAY</Typography> */}

            <Typography
              sx={{
                position: "relative",
                zIndex: "1",
                width: "fit-content",
                bgcolor: theme ? "#171819" : "#EEF1F4",
                paddingX: "10px",
                margin: "auto",
              }}
              onClick={() => setReadAll(false)}
            >
              Today
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                margin: "auto",
                zIndex: "0",
                position: "relative",
                top: "-15px",
                border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`,
              }}
            ></Box>
            <MessageMail message={message} />
          </Box>
        )}
        <Button
          style={{
            position: "relative",
            top: "140px",
            background:
              "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
            color: "white",
          }}
          sx={{ left: "25px" }}
          onClick={() => setReply(true)}
          variant="contained"
        >
          <img src={replyIcon} alt="replyIcon" />
          Reply
        </Button>
        {/* <Button onClick={() => setDeleteMail(true)}>DELETE</Button> */}

        {reply && <MailEditor setReply={setReply} />}
        {deletemail && <DeleteMail setDeleteMail={setDeleteMail} />}
      </Box>
    </>
  );
}

export default ReadMail;
