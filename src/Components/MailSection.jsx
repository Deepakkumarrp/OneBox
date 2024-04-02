import noMailIllustration from "../assets/noMailIllustration.png";
import { Box } from "@mui/material";
import NoMail from "./NoMail";
import InboxMenu from "./InboxMenu";
import MailSummary from "./MailSummary";
import ReadMail from "./ReadMail";
import { useState } from "react";
import { useSelector } from "react-redux";
function MailSection() {
  const [mails, setMails] = useState(true);
  const theme = useSelector((state) => state.darkMode);
  return (
    <>
      {mails ? (
        <Box
          sx={{
            display: "flex",
            // gap: "20px",
            height: "1100px",
            bgcolor: theme ? "#000000" : "#FAFAFA",
            color: theme ? "#FAFAFA" : "#000000",
          }}
        >
          <InboxMenu />
          <Box
            sx={{
              height: "100%",
              width: "1px",
              borderRight: `1px solid ${!theme ? "#DFE3E8" : "#262A2F"}`,
            }}
          ></Box>
          <ReadMail />

          <MailSummary />
        </Box>
      ) : (
        <NoMail />
      )}
    </>
  );
}

export default MailSection;
