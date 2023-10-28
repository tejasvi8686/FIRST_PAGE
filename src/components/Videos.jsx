import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import EXAM from "../assets/exam.png";
import SMILE from "../assets/smile.png";

const Pie = () => (
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

const Videos = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "#202C45" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              height: { xs: "auto", sm: "272px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: { xs: "20px", sm: "0" },
              }}
            >
              <Box>
                <img
                  src={SMILE}
                  alt=""
                  style={{
                    width: "79px",
                    height: "79px",
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
                  variant="h4"
                  sx={{
                    color: "#fff",
                  }}
                >
                  2450+{" "}
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  HAPPY STUDENT
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: { xs: "20px", sm: "0" },
              }}
            >
              <Box>
                <img
                  src={SMILE}
                  alt=""
                  style={{
                    width: "79px",
                    height: "79px",
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
                  variant="h4"
                  sx={{
                    color: "#fff",
                  }}
                >
                  10+{" "}
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  TOTAL TEACHERS
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: { xs: "20px", sm: "0" },
              }}
            >
              <Box>
                <img
                  src={SMILE}
                  alt=""
                  style={{
                    width: "79px",
                    height: "79px",
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
                  variant="h4"
                  sx={{
                    color: "#fff",
                  }}
                >
                  500+{" "}
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  CERTIFICATION
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: { xs: "20px", sm: "0" },
              }}
            >
              <Box>
                <img
                  src={SMILE}
                  alt=""
                  style={{
                    width: "79px",
                    height: "79px",
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
                  variant="h4"
                  sx={{
                    color: "#fff",
                  }}
                >
                  2000+{" "}
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  EXAMS
                </Typography>
              </Box>
            </Box>
          </Box>
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
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                marginBottom: { xs: "20px", sm: "100px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  marginTop: { xs: "20px", sm: "100px" },
                }}
              >
                <Typography variant="h4">POPULAR</Typography>
                <Typography variant="h4" sx={{ color: "#2D8EFF" }}>
                  VIDEOS
                </Typography>
              </Box>
              <Pie />
            </Box>

            <Box>
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
                    image={EXAM}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Pie />
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
                        WATCH NOW
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
                    image={EXAM}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Pie />
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
                        WATCH NOW
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
                    image={EXAM}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Pie />
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
                        WATCH NOW
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
                    image={EXAM}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h6">CSIR-NET/JRF</Typography>
                    <Pie />
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
                        WATCH NOW
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
};

export default Videos;
