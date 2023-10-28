import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { Button } from "@mui/material";

function Footer() {
  const [checked, setChecked] = useState({
    col1: true,
    col2: true,
    col3: true,
    col4: true,
    col5: true,
  });

  const handleCheckboxChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleScrollUp = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const Divider = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1"
      height="18"
      viewBox="0 0 1 18"
      fill="none"
    >
      <path d="M0.5 0.75V17.25" stroke="white" />
    </svg>
  );

  return (
    <Box>
      <Box sx={{ bgcolor: "#202C45" }}>
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "80px",
            }}
          >
            <Grid item>
              <Box
                sx={{
                  marginTop: "80px",
                  marginBottom: "70px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#FFFFFF", fontWeight: "700" }}
                >
                  LOGO
                </Typography>
                <Typography variant="p" sx={{ color: "#FFFFFF" }}>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipisicing elit, <br />
                  sed do eiusmod tempor <br />
                  incididunt ut labore et dolore <br />
                  magna aliqua. <br />
                </Typography>
                <Box sx={{ display: "flex", gap: "20px" }}>
                <a href="https://www.facebook.com" target="_blank">
                <FacebookRoundedIcon
                  sx={{
                    color: "white",
                    bgcolor: "#2D8EFF",
                    borderRadius: "100%",
                    height: "50px",
                    width: "50px",
                    padding: "10px",
                  }}
                />
              </a>
              
              <a href="https://www.instagram.com" target="_blank">
                <InstagramIcon
                  sx={{
                    color: "white",
                    bgcolor: "#2D8EFF",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    padding: "10px",
                  }}
                />
              </a>
              
              <a href="https://www.youtube.com" target="_blank">
                <YouTubeIcon
                  sx={{
                    color: "white",
                    bgcolor: "#2D8EFF",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    padding: "10px",
                  }}
                />
              </a>
              
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  marginTop: "80px",
                  marginBottom: "70px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "400" }}
                >
                  Courses
                </Typography>
                <Typography variant="p" sx={{ color: "white" }}>
                  HTML & CSS
                </Typography>
                <Typography variant="p" sx={{ color: "white" }}>
                  Java
                </Typography>
                <Typography variant="p" sx={{ color: "white" }}>
                  Python
                </Typography>
                <Typography variant="p" sx={{ color: "white" }}>
                  Power Point
                </Typography>
                <Typography variant="p" sx={{ color: "white" }}>
                  MS-Office
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  marginTop: "80px",
                  marginBottom: "70px",
                  display: "flex",
                  marginBottom: "70px",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "400" }}
                >
                  Usefull Links
                </Typography>
                <FormControl component="fieldset">
                  <FormGroup
                    row
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <FormControlLabel
                      sx={{ color: "#fff" }}
                      control={
                        <Checkbox
                          checked={checked.col1}
                          onChange={handleCheckboxChange}
                          name="col1"
                        />
                      }
                      label="About Us"
                    />
                    <FormControlLabel
                      sx={{ color: "#fff" }}
                      control={
                        <Checkbox
                          checked={checked.col2}
                          onChange={handleCheckboxChange}
                          name="col2"
                        />
                      }
                      label="Blog"
                    />
                    <FormControlLabel
                      sx={{ color: "#fff" }}
                      control={
                        <Checkbox
                          checked={checked.col3}
                          onChange={handleCheckboxChange}
                          name="col3"
                        />
                      }
                      label="Video"
                    />
                    <FormControlLabel
                      sx={{ color: "#fff" }}
                      control={
                        <Checkbox
                          checked={checked.col4}
                          onChange={handleCheckboxChange}
                          name="col4"
                        />
                      }
                      label="Courses"
                    />
                    <FormControlLabel
                      sx={{ color: "#fff" }}
                      control={
                        <Checkbox
                          checked={checked.col5}
                          onChange={handleCheckboxChange}
                          name="col5"
                        />
                      }
                      label="Student"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box
                sx={{
                  marginTop: "80px",
                  marginBottom: "70px",
                  display: "flex",
                  bgcolor: "#2D8EFF",
                  gap: "15px",
                  alignItems: "center",
                  padding: "95px",
                }}
              >
                <Box>
                  <CallRoundedIcon
                    sx={{
                      color: "#2D8EFF",
                      bgcolor: "#fff",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      padding: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    For More Details{" "}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    +91 9998888524
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Grid item>
          <Box sx={{ bgcolor: "#243C58" }}>
            <Container>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "400",
                      marginTop: "20px",
                      marginBottom: "20px",
                      color: "#fff",
                    }}
                  >
                    FAQ
                  </Typography>
                  <Divider />
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "400",
                      marginTop: "20px",
                      marginBottom: "20px",
                      color: "#fff",
                    }}
                  >
                    Help Desk
                  </Typography>
                  <Divider />
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "400",
                      marginTop: "20px",
                      marginBottom: "20px",
                      color: "#fff",
                    }}
                  >
                    Login
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>
                    © 2023 All Rights Reserved. Created with ❤️ by
                    OwnTechnologies
                  </Typography>
                </Box>

                <Button onClick={handleScrollUp}>

                  <ExpandLessRoundedIcon
                    sx={{
                      color:"#202C45",  
                      bgcolor: "#2D8EFF",
                      borderRadius: "50%",
                      padding: "100",
                      height: "40px",
                      width: "40px",
                      marginBottom: "5px"
                    }}
                  />
                </Button>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
