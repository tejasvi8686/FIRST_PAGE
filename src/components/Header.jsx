import React from "react";
import { AppBar, Toolbar, Typography, Box, SvgIcon } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Call from "../Assets/call.png";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const PRODUCTS = [
  {
    id: "1",
    label: "Home",
  },
  {
    id: "2",
    label: "Course",
  },
  {
    id: "3",
    label: "Videos",
  },
  {
    id: "4",
    label: "Contact Us",
  },
  {
    id: "5",
    label: "About Us",
  },
  {
    id: "6",
    label: "Test Series",
  },
  {
    id: "7",
    label: "Study Material",
  },
  {
    id: "8",
    label: "Student Login",
  },
  {
    id: "9",
    label: "Blog",
  },
];

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
      <AppBar position="staic">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "1",
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
            <Typography variant="p" sx={{ marginRight: 1 }}>
              FAQ
            </Typography>
            <Separator />
            <Typography variant="p" sx={{ marginRight: 1 }}>
              Help Desk
            </Typography>
            <Separator />
            <Typography variant="p" sx={{ marginLeft: 1 }}>
              Login
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginRight: 2 }}>
            <FacebookIcon sx={{ marginRight: 3 }} />
            <YouTubeIcon sx={{ marginRight: 3 }} />
            <InstagramIcon sx={{ marginRight: 3 }} />
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            background: "#FFF",
            height: "80px",
            display: "flex",
            justifyContent: "end",
            gap: "10px",
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Box sx={{ color: "black", display: "flex", gap: "10px" }}>
            <Box>
              <img
                src={Call}
                style={{
                  width: "30px",
                  marginTop: "5px",
                }}
              />
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
        <Toolbar
          sx={{
            background: "#202C45",
            height: "87px",
            width: "auto",
          }}
        >
          <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              {PRODUCTS.map((product) => (
                <Button
                  key={product.id}
                  size="large"
                  sx={{
                    bgcolor: "#24497D",
                    borderRadius: "20px",
                    color: "#fff",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                >
                  {product.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  bgcolor: "#2D8EFF",
                  color: "#fff",
                  "&:hover": { bgcolor: "#fff", color: "#202C45" },
                }}
              >
                NEW BATCH
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
