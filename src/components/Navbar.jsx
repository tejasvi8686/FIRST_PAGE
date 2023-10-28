import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
    const PAGES = [
    "Home",
    "Courses",
    "Videos",
    "Contact Us",
    "About Us",
    "Test Series",
    "Study Material",
    "Blog",
  ];
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [value, setValue] = useState();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ bgcolor: "#202C45" }}>
        <Container>
          <Toolbar>
            {isMatch ? (
              <Box>
                <Typography></Typography>
                <DrawerComp />
              </Box>
            ) : (
              <Box>
                <Tabs
                  textColor="white"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >

                {
                  PAGES.map((page, index)=>(
                    <Tab label={page.name} key={index}
                    />
                  ))
                }
                  <Tab label="Home" />
                  <Tab
                    label="Courses"
                    aria-controls="courses-menu"
                    aria-haspopup="true"
                    onClick={handleOpenMenu}
                    endIcon={<ArrowDropDownIcon />}
                  />
                  <Menu
                    id="courses-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem>HTML & CSS</MenuItem>
                    <MenuItem>Python</MenuItem>
                    <MenuItem>Java</MenuItem>
                    <MenuItem>Power Point</MenuItem>
                    <MenuItem>Ms Office</MenuItem>
                  </Menu>

                  <Tab label="Videos" />
                  <Tab label="Contact Us" />
                  <Tab label="About Us" />
                  <Tab label="Test Series " />
                  <Tab label="Study Material" />
                  <Tab label="Student Login" />
                  <Tab label="Blog" />
                </Tabs>
              </Box>
            )}

            <Button sx={{ marginLeft: "auto" }} variant="contained">
              NEW BATCH
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
