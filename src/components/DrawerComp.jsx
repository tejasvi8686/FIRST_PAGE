import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Stack
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Added state for the anchor element

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Stack direction="column">
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
                <Tab label="Test Series" />
                <Tab label="Study Material" />
                <Tab label="Student Login" />
                <Tab label="Blog" />
              </Stack>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
