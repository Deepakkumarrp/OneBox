import { Box, Input, Typography, Button } from "@mui/material";
import MailInboxCard from "./MailInboxCard";
import ReplayIcon from "@mui/icons-material/Replay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
function InboxMenu() {
  const theme = useSelector((state) => state.darkMode);
  var mails = [
    {
      fromEmail: "Beata@gmail.com",
      status: "Interested",
      subject: "I've tried a lot and .",
      sentAt: "Mar 7",
      col: "#57E0A6",
      secCol: "#2D3833",
    },
    {
      fromEmail: "Sanya@gmail.com",
      status: "Closed",
      subject: "I've tried a lot and .",
      sentAt: "Mar 7",
      // col: "#626fe6",
      col: theme ? "#626fe6" : "#E6d162",

      secCol: "#323440",
    },
    {
      fromEmail: "William@gmail.com",
      subject: "Payment not going through",
      status: "Interested",
      sentAt: "Mar 7",
      col: "#57E0A6",
      secCol: "#2D3833",
    },
    {
      fromEmail: "johnson@gmail.com",
      status: "Meeting Booked",
      subject: "Could you tell me more about it",
      sentAt: "Mar 7",
      col: "#9c62e6",
      secCol: "#352f3c",
    },
    {
      fromEmail: "Sanya@gmail.com",
      status: "Meeting Completed",
      subject: "Hi, I am Interested",
      sentAt: "18:30",
      col: theme ? "#E6D162" : "#c7b34b",

      secCol: "#444234",
    },
  ];
  return (
    <Box
      sx={{
        width: "278px",
        padding: "10px",
        bgcolor: theme ? "#000000" : "#FAFAFA",
        color: theme ? "#FAFAFA" : "#000000",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "27.24px",
            textAlign: "left",
            color: "#4285F4",
          }}
        >
          All Inbox(s)
          <KeyboardArrowDownIcon />
        </Typography>
        <Box
          className="flex justify-center items-center"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "4px",
            bgcolor: theme ? "#25262B" : "#ffffff",
          }}
        >
          <ReplayIcon />
        </Box>
      </Box>
      <Box sx={{ marginY: "15px" }}>
        <strong>25/25</strong> Inbox selected
      </Box>
      <Box
        className="flex items-center"
        sx={{
          width: "100%",

          height: "28px",

          bgcolor: theme ? "#23272C" : "#f4f6f8",
          padding: "4px 6px",
          gap: "4px",
          borderRadius: "4px",
          border: "1px solid transparent",
        }}
      >
        <SearchIcon
          sx={{
            color: theme ? "#FFFFFF" : "#ADBAC7",
            opacity: theme ? 0.2 : 1,
          }}
        />
        <Typography sx={{ color: theme ? "#FFFFFF" : "#ADBAC7" }}>
          Search
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          paddingBottom: "15px",

          borderBottom: `1px solid ${theme ? "#203137" : "transparent"}`,
          justifyContent: "space-between",
        }}
      >
        <Box className="flex items-center gap-2">
          <Typography
            sx={{
              width: "34px",
              height: "26px",
              padding: "3px 8px",
              gap: "8px",
              color: "#5C7CFA",
              borderRadius: "17px  ",

              bgcolor: theme ? "#222426" : "#ECECEC",
            }}
          >
            26
          </Typography>
          <Typography>New Replies</Typography>
        </Box>
        <Typography>Newest</Typography>
        <KeyboardArrowDownIcon />
      </Box>

      <Box>
        {mails.map((mail) => (
          <MailInboxCard mail={mail} />
        ))}
      </Box>
    </Box>
  );
}

export default InboxMenu;
