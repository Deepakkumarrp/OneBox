import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Button } from "@mui/material";
import dropDown from "../assets/arrow_drop_down.png";
import flash_on from "../assets/flash_on.png";
import remove_red_eye from "../assets/remove_red_eye.png";
import link from "../assets/link.png";
import imageAttachment from "../assets/imageAttachment.png";
import emoji from "../assets/emoji.png";
import person_remove from "../assets/person_remove.png";
import unfold_more from "../assets/unfold_more.png";
import { useSelector } from "react-redux";
function MailEditor({ setReply }) {
  const mailBody = {
    toName: "Mitrajit",
    to: "chandra.rupam@gmail.com",
    from: "mitrajit2022@gmail.com",
    fromName: "Mitrajit",
    subject: "Optimize Your Recruitment Efforts with Expert Support",
    body: "<p>Hello how are you</p>",
    references: [
      "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
      "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
      "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
      "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>",
    ],
    inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>",
  };
  const handleReply = async () => {
    const tok = localStorage.getItem("token");
    const res = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tok}`,
        },
        body: JSON.Stringify(mailBody),
      }
    );
    const mails = await res.json();
  };
  const theme = useSelector((state) => state.darkMode);
  return (
    <>
      {/* <Box className="flex flex-col">MailEditor</Box> */}
      <Box
        sx={{
          position: "fixed",
          top: "85px",
          margin: "auto",
          left: "350px",
          width: "752px",
          zIndex: 5,

          height: "534px",
          color: "white",
          gap: "0px",
          border: "1px solid black",
          borderImageSource:
            "linear-gradient(180deg, #4A5055 0%, #2A2F32 100%)",
        }}
      >
        {/* <Box sx={ {width: Fixed (752px)px;
height: Fixed (38px)px;
padding: 20px 32px 20px 32px;
gap: 10px;
border-radius: 8px 8px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
 background: #23272C;
 border: 1px solid #41464B}}  >Reply</Box> */}
        <Box
          className="flex justify-between items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",
            borderRadius: "8px 8px 0px 0px",
            // borderBottom: "1px solid #41464B",
            borderBottom: `1px solid ${theme ? "#41464B" : "#E8E8E8"}`,
            // background: "#23272C",
            color: theme ? "#FAFAFA" : "black",
            bgcolor: theme ? "#23272C" : "#ECEFF3",
          }}
        >
          <Typography> Reply</Typography>
          <CloseIcon onClick={() => setReply(false)} />
          {/* <Typography onClick={() => setReply(false)}>X</Typography> */}
        </Box>

        <Box
          className="flex   items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",

            // borderBottom: "1px solid #41464B",
            borderBottom: `1px solid ${theme ? "#41464B" : "#E8E8E8"}`,

            color: theme ? "#FAFAFA" : "black",
            bgcolor: theme ? "#141517" : "#F9F9F9",
          }}
        >
          <Typography>To : </Typography>
          <Typography>jeanne@icloud.com</Typography>
        </Box>
        <Box
          className="flex   items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",

            // borderBottom: "1px solid #41464B",
            borderBottom: `1px solid ${theme ? "#41464B" : "#E8E8E8"}`,

            color: theme ? "#FAFAFA" : "black",
            bgcolor: theme ? "#141517" : "#F9F9F9",
          }}
        >
          <Typography>From : </Typography>
          <Typography>peter@reachinbox.com</Typography>
        </Box>
        <Box
          className="flex   items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "20px 32px",
            gap: "10px",

            borderBottom: `1px solid ${theme ? "#41464B" : "#E8E8E8"}`,
            color: theme ? "#FAFAFA" : "black",
            bgcolor: theme ? "#141517" : "#F9F9F9",
          }}
        >
          <Typography>Subject : </Typography>
          <Typography>Warmup Welcome</Typography>
        </Box>
        <Box
          className="flex "
          sx={{
            width: "752px",
            height: "325px",
            padding: "20px 32px",
            gap: "10px",

            borderBottom: `1px solid ${theme ? "#41464B" : "#E8E8E8"}`,
            // borderBottom: "1px solid #41464B",
            color: theme ? "#FAFAFA" : "black",
            bgcolor: theme ? "#141517" : "#F9F9F9",
          }}
        >
          Hi Jeanne,
        </Box>
        <Box
          className="flex gap-8 items-center"
          sx={{
            width: "752px",
            height: "38px",
            padding: "30px 32px",
            gap: "10px",
            borderRadius: "0px 0px 8px 8px",
            borderBottom: `1px solid ${theme ? "#41464B" : "#E8E8E8"}`,

            color: theme ? "#FAFAFA" : "black",
            bgcolor: theme ? "#141517" : "#ECEFF3",
          }}
        >
          <Button
            sx={{
              width: "114px",
              height: "40px",
              gap: "16px",
            }}
            style={{
              background:
                "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              color: "white",
            }}
            onClick={() => handleReply}
            variant="contained"
          >
            <Typography>Send</Typography>
            <img src={dropDown} alt="dropDown" />
          </Button>
          <Box className="flex w-24 items-center">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              src={flash_on}
              alt="flash_on"
            />
            <Typography>Variables</Typography>
          </Box>
          <Box className="flex gap-4 items-center ">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              src={remove_red_eye}
              alt="remove_red_eye"
            />
            <Typography>Preview Email</Typography>
          </Box>
          <Box
            className="relative flex gap-4"
            sx={{
              borderRadius: "0px 0px 8px 8px",
            }}
          >
            <Typography>A:</Typography>
            <Box>
              <img src={link} alt="link" />
            </Box>
            <Box>
              <img src={imageAttachment} alt="imageAttachment" />
            </Box>
            <Box>
              <img src={emoji} alt="emoji" />
            </Box>
            <Box>
              <img src={person_remove} alt="person_remove" />
            </Box>
            <Box
              sx={{
                borderRadius: "0px 0px 8px 8px",
              }}
            >
              <img src={unfold_more} alt="unfold_more" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailEditor;
