import { Box, Typography } from "@mui/material";
import mail from "../assets/email.png";
import sent from "../assets/sent.png";
import drafts from "../assets/drafts.png";
import { useSelector } from "react-redux";
function MailStatusSummary({ step, index }) {
  const theme = useSelector((state) => state.darkMode);
  return (
    <>
      <Box
        className="flex gap-4 items-center "
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box
          className="flex items-center justify-center rounded-full w-8 h-8  "
          sx={{
            // border: `1px solid ${theme ? "#23272c" : "#E9EBEE"}`,

            bgcolor: theme ? "#23272c" : "#EEF1F4",
          }}
        >
          <img src={mail} alt="mail" />
        </Box>

        <Box>
          <Typography>Step {index + 1} : Email</Typography>
          <Box className="flex items-center gap-2">
            <img
              style={{ width: "18px", height: "18px" }}
              src={step.status == "Sent" ? sent : drafts}
              alt="sent"
            />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                textAlign: "left",
                color: theme ? "#B9B9B9" : "#636781",
              }}
            >
              {step.status}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme ? "#B9B9B9" : "#636781",

                fontWeight: 600,
                textAlign: "left",
              }}
            >
              {step.date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailStatusSummary;
