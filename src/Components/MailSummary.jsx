import { Box, Typography } from "@mui/material";
import MailStatusSummary from "./MailStatusSummary";
import { useSelector } from "react-redux";

function MailSummary() {
  const theme = useSelector((store) => store.darkMode);
  const steps = [
    { status: "Sent", date: "3rd,Feb" },
    { status: "Opened", date: "5th,Feb" },
    { status: "Opened", date: "5th,Feb" },
    { status: "Sent", date: "7th,Feb" },
    { status: "Opened", date: "8th,Feb" },
    { status: "Opened", date: "9th,Feb" },
    { status: "Opened", date: "11th,Feb" },
    { status: "Opened", date: "12th,Feb" },
  ];
  return (
    <>
      <Box
        sx={{
          width: "1px",
          height: "100%",
          borderLeft: `1px solid ${theme ? "#343a40" : "#D8D8D8"}`,
        }}
      ></Box>
      {/* border: `1px solid ${theme ? "#1f1f1f" : "#E1e3e4"}`, */}
      <Box
        sx={{
          marginLeft: "5px",
        }}
        className="flex  flex-col w-56"
      >
        <Box className="flex flex-col   gap-2">
          <Box
            className="flex items-center"
            sx={{
              height: "36px",
              marginY: "15px",
              padding: "8px 12px",
              gap: "16px",
              borderRadius: "8px",
              bgcolor: theme ? "#454F5B" : "#E1e3e4",
            }}
          >
            Lead Details
          </Box>
          <Box
            sx={{
              padding: "8px 12px",
            }}
            className="flex justify-between"
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "14.52px",
                textWrap: "nowrap",
                textAlign: "left",

                color: theme ? "#FFFFFF" : "#637381",
              }}
            >
              Name
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16.94px",
                textAlign: "left",
                color: theme ? "#B9B9B9" : "#000000",
                textWrap: "wrap",
              }}
            >
              Orlando
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 12px",
            }}
            className="flex justify-between"
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                textWrap: "nowrap",
                lineHeight: "14.52px",
                textAlign: "left",
                color: theme ? "#FFFFFF" : "#637381",
              }}
            >
              Contact No
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16.94px",
                textAlign: "right",
                color: theme ? "#B9B9B9" : "#000000",
                textWrap: "wrap",
              }}
            >
              +54-9062827869
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 12px",
            }}
            className="flex justify-between"
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "14.52px",
                textWrap: "nowrap",
                textAlign: "left",
                color: theme ? "#FFFFFF" : "#637381",
              }}
            >
              Email ID
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16.94px",
                textAlign: "right",
                color: theme ? "#B9B9B9" : "#000000",
                textWrap: "wrap",
              }}
            >
              Orlando@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 12px",
            }}
            className="flex justify-between gap-4"
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "14.52px",
                textAlign: "left",

                color: theme ? "#FFFFFF" : "#637381",
                textWrap: "nowrap",
              }}
            >
              Linked In
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16.94px",
                textAlign: "right",
                color: theme ? "#B9B9B9" : "#000000",
                textWrap: "wrap",
              }}
            >
              linkedin.com/in/ timvadde/
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 12px",
            }}
            className="flex justify-between"
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "14.52px",
                textAlign: "left",
                color: theme ? "#FFFFFF" : "#637381",
              }}
            >
              Company Name
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16.94px",
                textAlign: "right",
                color: theme ? "#B9B9B9" : "#000000",
              }}
            >
              Reachinbox
            </Typography>
          </Box>
        </Box>

        <Box className="flex  flex-col gap-5">
          <Box
            className="flex items-center"
            sx={{
              height: "36px",
              marginY: "15px",
              padding: "8px 12px",
              gap: "16px",
              borderRadius: "8px",
              bgcolor: theme ? "#454F5B" : "#E1e3e4",
            }}
          >
            Activities
          </Box>
          <Typography
            className="pl-5"
            sx={{
              width: " 154.87px",
              height: "20px",
              top: "14px",
              left: "20.33px",
              gap: "10px",
              opacity: "0px",
            }}
          >
            Campaign Name
          </Typography>
          <Box className="flex gap-2  pl-5 items-center ">
            <Typography
              sx={{
                fontWeight: 600,
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              8
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                textAlign: "left",
                fontSize: "14px",
              }}
              variant="span"
            >
              Days
            </Typography>
            <Typography>|</Typography>
            <Typography
              sx={{
                fontWeight: 600,
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              9
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                textAlign: "left",
                fontSize: "14px",
              }}
              variant="span"
            >
              Days in Sequence
            </Typography>
          </Box>
          <Box
            style={{ zIndex: 1 }}
            sx={{ height: "250px", position: "relative" }}
          >
            <Box
              style={{ zIndex: 0 }}
              sx={{
                // border: "1px solid #23272c",
                border: `1px solid ${theme ? "#23272c" : "#E9EBEE"}`,
                // state
                height: "520px",
                left: "35px",
                top: "20px",
                width: "1px",
                position: "absolute",
              }}
            ></Box>
            <Box className="flex pl-5  flex-col gap-8">
              {steps.map((step, index) => (
                <MailStatusSummary step={step} index={index} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MailSummary;
