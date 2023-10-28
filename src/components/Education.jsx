import React from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Education = () => {
  return (
    <Box>
      {" "}
      <Box className="education">
        <Container>
          <Grid container justifyContent="flex-end">
            <Grid item md={5} xs={12}>
              <div className="edu">
                <Typography
                  className="edus"
                  sx={{
                    bgcolor: "#363345",
                    color: "white",
                    p: "10px 10px 5px 10px",
                    textAlign: "end",
                  }}
                  variant="h3"
                >
                  BEST EDUCATION
                </Typography>

                <Typography
                  className="edus"
                  sx={{
                    bgcolor: "#363345",
                    color: "white",
                    p: "10px 10px 5px 0",
                    textAlign: "end",
                  }}
                  variant="h5"
                >
                  FOR YOUR BETTER FUTURE
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    className="edus"
                    sx={{
                      color: "white",
                      textAlign: "end",
                    }}
                    variant="caption"
                  >
                    We provide always our best service of our clients always
                  </Typography>
                  <Typography
                    className="edus"
                    sx={{
                      color: "white",
                      textAlign: "end",
                    }}
                    variant="caption"
                  >
                    Try to client’s trust satisfaction
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: "#202C45",
          minHeight: "150px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              gap: "7px",
              display: "flex",
              marginTop: "20px",
              marginLeft: "15px",
            }}
          >
            <Typography variant="p" sx={{ color: "#fff" }}>
              Get A Free
            </Typography>
            <Typography variant="p" sx={{ color: "#2D8EFF" }}>
              Registration!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2 },
              flexWrap: "wrap",
            }}
          >
            <TextField
              sx={{ bgcolor: "#fff", color: "#9A9696" }}
              label="Enter Email"
            />
            <TextField 
              sx={{ bgcolor: "#fff", color: "#9A9696" }}
              label="Select Course"
            />
            <TextField 
              sx={{ bgcolor: "#fff", color: "#9A9696" }}
              label="Phone Number"
            />
            <TextField
              sx={{ bgcolor: "#fff", color: "#9A9696" }}
              label="Date Of Birth"
            />
            <Button
              sx={{
                bgcolor: "#fff",
                height: "55px",
                width: "150px",
                borderRadius: "0",
                "&:hover": { bgcolor: "#fff", color: "#202C45" },
              }}
            >
              Submit Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Education;
