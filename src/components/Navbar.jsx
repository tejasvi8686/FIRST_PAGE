import React from "react";
import { AppBar, Toolbar, Box, } from "@mui/material";
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

const Navbar = () => {
  return (

      <AppBar position="static" sx={{ background: "#202C45" }}>
        <Container>
          <Toolbar
            sx={{
              background: "#202C45",
            }}
          >
            <Container>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  {PRODUCTS.map((product) => (
                    <Button
                      key={product.id}
                      size="medium"
                      sx={{
                        bgcolor: "#24497D",
                        borderRadius: "15px",
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
                      padding: "10px",
                      "&:hover": { bgcolor: "#fff", color: "#202C45" },
                    }}
                  >
                    NEW BATCH
                  </Button>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>



  );
};

export default Navbar;
