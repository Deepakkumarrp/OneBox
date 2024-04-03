import { Box, Typography } from "@mui/material";
import menubarsendemail from "../assets/menubarsendemail.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function MailInboxCard({ mail }) {
  const theme = useSelector((state) => state.darkMode);
  const navigate = useNavigate();

  // bgcolor: theme ? "#202022" : "#FAFAFA",
  // color: theme ? "#FAFAFA" : "#000000",
  // const col = "#626fe6";
  const col = theme ? "#626fe6" : "#E6d162";

  const secCol = "#323440";

  function handleClick(id){
    // navigate(`/${id}`)
    console.log(id);
  }
  return (
    <>
      <Box
        sx={{
          borderBottom: `1px solid ${theme ? "#203137" : "transparent"}`,
          paddingY: "15px",
        }}
        onClick={() => handleClick(mail.threadId)}
      >
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              textAlign: "left",

              color: theme ? "#FAFAFA" : "#000000",
            }}
          >
            {mail.fromEmail.slice(0, 15)}..
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "left",
              // color: "#585858",
              color: theme ? "#FAFAFA" : "#000000",
            }}
          >
            {mail.sentAt.slice(0, 10)}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            paddingY: "5px",
            textAlign: "left",
            color: theme ? "#E1E0E0" : "#000000",

            // color: "#",
          }}
        >
          {mail.subject.slice(0,30)}{mail?.subject?.length > 30 ? '...': ''}
        </Typography>
        <Box sx={{ display: "flex", paddingY: "5px", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingX: "10px",
              height: "20px",
              padding: "3px 8px",
              gap: "3px",
              borderRadius: "17px",
              bgcolor: theme ? "#222426" : "#F0F0F0",
              color: theme ? "#FFFFFF" : "#637381",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                margin: "3px",
                borderRadius: "50%",
                bgcolor: mail.col,
              }}
            ></Box>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                opacity: 0.5,
                position: "absolute",
                borderRadius: "50%",
                bgcolor: secCol,
              }}
            ></Box>
            <Typography
              sx={{
                textWrap: "nowrap",
                color: col,
                fontSize: "9px",
                paddingY: "8px",
                fontWeight: 400,
              }}
            >
              {mail.isRead ? 'Read' : 'UnRead'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "20px",
              padding: "3px 8px",
              gap: "3px",
              borderRadius: "17px",

              bgcolor: theme ? "#222426" : "#F0F0F0",
              color: theme ? "#FFFFFF" : "#637381",
            }}
          >
            <img
              style={{ width: "15px", height: "15px" }}
              src={menubarsendemail}
              alt="menubarsendemail"
            />
            <Typography
              sx={{
                fontSize: "10px",
                textWrap: "nowrap",
              }}
            >
              Campaign Name
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailInboxCard;
