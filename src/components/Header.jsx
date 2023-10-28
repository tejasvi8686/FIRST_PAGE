import React from "react";
import { Toolbar, Typography, Box, SvgIcon } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Container from "@mui/material/Container";

const Separator = () => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    width="1"
    height="17"
    viewBox="0 0 1 17"
    fill="none"
  >
    <path d="M0.5 0.375V16.875" stroke="white" />
  </SvgIcon>
);

const Header = () => {
  return (
    <React.Fragment>
      <Box position="static" >
        <Box sx={{bgcolor:"#2D8EFF"}}>
          <Container>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

              }}
            >
              <Box sx={{ display: "flex", alignItems: "center",color: "#fff" }}>
                <Typography variant="p">FAQ</Typography>
                <Separator />
                <Typography variant="p">Help Desk</Typography>
                <Separator />
                <Typography variant="p">Login</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <a href="https://www.facebook.com" target="_blank">
                  <FacebookIcon sx={{ color: "#fff" }} />
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <YouTubeIcon sx={{ color: "#fff" }} />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <InstagramIcon sx={{ color: "#fff" }} />
                </a>
              </Box>
            </Toolbar>
          </Container>{" "}
        </Box>

        <Box  sx={{ background: "#FFF" }}>
          <Container>
            <Toolbar
              sx={{
                height: "80px",
                display: "flex",
                justifyContent: "end",
                gap: "10px",
    
              }}
            >
              <Box sx={{ color: "black", display: "flex", gap: "10px" }}>
                <Box>
                <PhoneIcon fontSize="large" height="60px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#AAA8A8",
                    }}
                  >
                    CALL US TODAY{" "}
                  </Typography>
                  <Typography variant="caption">+91 9999888877</Typography>
                </Box>
              </Box>

              <Box sx={{ color: "black", display: "flex", gap: "10px" }}>
                <Box>
                  <AccessTimeOutlinedIcon fontSize="large" height="60px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#AAA8A8",
                    }}
                  >
                    WE ARE OPEN!
                  </Typography>
                  <Typography variant="caption">Mon-Fri 8:00-16:00</Typography>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </Box>


      </Box>
    </React.Fragment>
  );
};

export default Header;
