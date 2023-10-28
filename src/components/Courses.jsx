import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import IMG1 from "../assets/ss2.png";
import IMG2 from "../assets/ss3.png";
import NET from "../assets/NET.png";

const Line = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="86"
    height="4"
    viewBox="0 0 86 4"
    fill="none"
  >
    <path d="M85.042 3.08704H0.5V1.08704H85.042V3.08704Z" fill="#2D8EFF" />
    <path
      d="M1 1.58704V2.58704H84.542V1.58704H1ZM0 0.587036H85.542V3.58704H0V0.587036Z"
      fill="#2D8EFF"
    />
  </svg>
);

export default function Courses() {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "35px",
              marginBottom: "50px",
              display: "flex",
            }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h5">WELCOME TO OUR</Typography>
                <Typography variant="h5" sx={{ color: "#2D8EFF" }}>
                  UNIVERSITY
                </Typography>
                <Line />
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Typography variant="p" sx={{ color: "#9A9696" }}>
                  We care for children, protect <br />
                  their welfare, and prepare them <br />
                  for the future <br />
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Typography variant="p" sx={{ color: "#707070" }}>
                  Lorem ipsum dolor sit ametes redum, <br />
                  consectetur adipisicing elites. Istees <br />
                  recusandae laboriosam, voluptatibus <br />
                  culpa quas sint, deleniti delectus <br />
                  tempora. adipisicing elites. <br />
                  Istees recusandae laboriosam <br />
                </Typography>
              </Box>
              <Box sx={{ marginTop: "35px" }}>
                <Button
                  sx={{
                    bgcolor: "#202C45",
                    color: "#FFFFFF",
                    borderRadius: "1",
                    padding: "12px",
                    "&:hover": { bgcolor: "#202C45", color: "#FFFFFF" },
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={IMG1}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">EXPERIENCE YOURSELF</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={IMG1}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">ONLINE LEARNING</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={IMG2}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">MASTERY LEARNING</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F7F7F7" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              marginBottom: { xs: "20px", sm: "70px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: "5px", sm: "0" },
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                marginTop: { xs: "20px", sm: "100px" },
              }}
            >
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Typography variant="h4">OUR</Typography>
                <Typography variant="h4" sx={{ color: "#2D8EFF" }}>
                  COURSES
                </Typography>
              </Box>
              <Line />
            </Box>

            <Box sx={{}}>
              <Button
                sx={{
                  bgcolor: "#202C45",
                  color: "#FFFFFF",
                  borderRadius: "1",
                  padding: "10px 30px",
                  marginTop: { xs: "20px", sm: "100px" },
                  "&:hover": { bgcolor: "#202C45", color: "#FFFFFF" },
                }}
              >
                View All
              </Button>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ marginTop: "20px", marginBottom: "70px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={NET}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future. We care for children, <br />
                      protect their welfare, and prepare <br />
                    </Typography>
                    <Box>
                      <Button
                        sx={{
                          bgcolor: "#202C45",
                          color: "#FFFFFF",
                          borderRadius: "1",
                          marginTop: "20px",
                          padding: "5px 15px",
                          "&:hover": { bgcolor: "#202C45", color: "#FFFFFF" },
                        }}
                      >
                        VIEW DETAILS
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ marginTop: "20px", marginBottom: "70px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={NET}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future. We care for children, <br />
                      protect their welfare, and prepare <br />
                    </Typography>
                    <Box>
                      <Button
                        sx={{
                          bgcolor: "#202C45",
                          color: "#FFFFFF",
                          borderRadius: "1",
                          marginTop: "20px",
                          padding: "5px 15px",
                          "&:hover": { bgcolor: "#202C45", color: "#FFFFFF" },
                        }}
                      >
                        VIEW DETAILS
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ marginTop: "20px", marginBottom: "70px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={NET}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future. We care for children, <br />
                      protect their welfare, and prepare <br />
                    </Typography>
                    <Box>
                      <Button
                        sx={{
                          bgcolor: "#202C45",
                          color: "#FFFFFF",
                          borderRadius: "1",
                          marginTop: "20px",
                          padding: "5px 15px",
                          "&:hover": { bgcolor: "#202C45", color: "#FFFFFF" },
                        }}
                      >
                        VIEW DETAILS
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ marginTop: "20px", marginBottom: "70px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={NET}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Line />
                    <Typography variant="body2" sx={{ color: "#9A9696" }}>
                      We care for children, protect <br />
                      their welfare, and prepare them <br />
                      for the future. We care for children, <br />
                      protect their welfare, and prepare <br />
                    </Typography>
                    <Box>
                      <Button
                        sx={{
                          bgcolor: "#202C45",
                          color: "#FFFFFF",
                          borderRadius: "1",
                          marginTop: "20px",
                          padding: "5px 15px",
                          "&:hover": { bgcolor: "#202C45", color: "#FFFFFF" },
                        }}
                      >
                        VIEW DETAILS
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
