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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

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
        <Toolbar sx={{ height: "90px" }}>
          {isMatch ? (
            <Box>
              <Typography></Typography>
              <DrawerComp />
            </Box>
          ) : (
            <Box >
              <Tabs textColor="white">
                <Tab
                  label="Home"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="Courses"
                  aria-controls="courses-menu"
                  aria-haspopup="true"
                  onClick={handleOpenMenu}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
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

                <Tab
                  label="Videos"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="Contact Us"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="About Us"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="Test Series "
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="Study Material"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="Student Login"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
                <Tab
                  label="Blog"
                  sx={{
                    bgcolor: "#24497D",
                    marginRight: "8px",
                    color: "#fff",
                    borderRadius :"50px",
                    "&:hover": { bgcolor: "#fff", color: "#202C45" },
                  }}
                />
              </Tabs>
            </Box>
          )}

          <Button
            sx={{ marginLeft: "auto", padding: "20px" }}
            variant="contained"
          >
            NEW BATCH
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
