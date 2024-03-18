import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import {
  Box,
  CssBaseline,
  Stack,
  Grid,
  Button,
  Typography,
  Paper,
  MenuItem,
  FormControl,
  Slider,
  TextField,
  IconButton,
  ButtonGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Label,
  DemoItem,
  DatePicker
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarIcon from "@mui/icons-material/Star";

export const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <CssBaseline />
      {/* <Container > */}

      <Grid container padding={15} spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "20px 30px" }}>
            <Box>
              <Typography variant="h6" marginBottom={2}>
                Showing results for
              </Typography>
              <FormControl
                sx={{ borderColor: "red", borderRadius: "12px" }}
                fullWidth
              >
                <TextField
                  label="One-time sitter"
                  select
                  fullWidth
                  size="small"
                  InputLabelProps={{ sx: { color: "#101828" } }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </FormControl>
              <Typography variant="h6" marginBottom={2} marginTop={2}>
                Showing results for
              </Typography>
              <FormControl
                sx={{ borderColor: "red", borderRadius: "12px" }}
                fullWidth
              >
                <TextField
                  label="Where do you need care"
                  select
                  fullWidth
                  size="small"
                  InputLabelProps={{ sx: { color: "#101828" } }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </TextField>
              </FormControl>
            </Box>
            <Box marginTop={2}>
              <Stack direction="row" justifyContent={"space-between"}>
                <Typography variant="h6">Filter</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: "40px",
                    color: "#475467",
                    border: "1px solid #475467",
                    textTransform: "none",
                  }}
                >
                  Clear filter
                </Button>
              </Stack>
              <Stack marginTop={2}>
                <Paper sx={{ padding: "15px" }}>
                  {/* Payrate */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", color: "#667085" }}
                    >
                      Payrate
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      marginTop={1}
                      sx={{
                        fontSize: "16px",
                        color: "#101828",
                        fontWeight: "600",
                      }}
                    >
                      $15-$25 / hour
                    </Typography>
                    <Slider
                      aria-label="price-range"
                      size="medium"
                      sx={{ color: "#FC9155" }}
                    />
                  </Box>
                  {/* Number of Child */}
                  <Box marginTop={1}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", color: "#667085" }}
                    >
                      Number of Child
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      marginTop={1}
                    >
                      <Typography
                        variant="subtitle1"
                        marginTop={1}
                        sx={{
                          fontSize: "16px",
                          color: "#101828",
                          fontWeight: "600",
                        }}
                      >
                        1 Child
                      </Typography>
                      <Box>
                        <IconButton sx={{ padding: 0 }}>
                          <RemoveCircleIcon
                            sx={{ color: "#D0D5DD", fontSize: "35px" }}
                          />
                        </IconButton>
                        <IconButton sx={{ padding: 0 }}>
                          <AddCircleIcon
                            sx={{ color: "#024FAA", fontSize: "35px" }}
                          />
                        </IconButton>
                      </Box>
                    </Stack>
                  </Box>
                  {/* Child age ranges */}
                  <Box marginTop={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", color: "#667085" }}
                    >
                      Child age ranges
                    </Typography>
                    <Stack direction={"column"} marginTop={1}>
                      <Stack direction={"row"}>
                        <Button
                          sx={{
                            color: "#475467",
                            border: "1px solid #98A2B3",
                            borderRadius: "40px",
                            paddingX: "18px",
                          }}
                        >
                          0-11 months
                        </Button>
                        <Button
                          sx={{
                            color: "#475467",
                            border: "1px solid #98A2B3",
                            borderRadius: "40px",
                            marginLeft: "15px",
                            paddingX: "18px",
                          }}
                        >
                          1-3 Years
                        </Button>
                      </Stack>
                      <Stack direction={"row"} marginTop={2}>
                        <Button
                          sx={{
                            color: "#475467",
                            border: "1px solid #98A2B3",
                            borderRadius: "40px",
                            paddingX: "18px",
                          }}
                        >
                          4-5 Years
                        </Button>
                        <Button
                          sx={{
                            color: "#475467",
                            border: "1px solid #98A2B3",
                            borderRadius: "40px",
                            marginLeft: "15px",
                            paddingX: "18px",
                          }}
                        >
                          10+ Years
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                  {/* Ratings */}
                  <Box marginTop={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", color: "#667085" }}
                    >
                      Rating
                    </Typography>
                    <Stack direction={"row"} spacing={2} marginTop={2}>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "40px",
                          border: "1px solid #98A2B3",
                          color: "#475467",
                        }}
                        endIcon={
                          <StarIcon
                            sx={{ color: "#FEC84B", fontSize: "16px" }}
                          />
                        }
                      >
                        0
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "40px",
                          border: "1px solid #98A2B3",
                          color: "#475467",
                        }}
                        endIcon={
                          <StarIcon
                            sx={{ color: "#FEC84B", fontSize: "16px" }}
                          />
                        }
                      >
                        1
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "40px",
                          border: "1px solid #98A2B3",
                          color: "#475467",
                        }}
                        endIcon={
                          <StarIcon
                            sx={{ color: "#FEC84B", fontSize: "16px" }}
                          />
                        }
                      >
                        2
                      </Button>
                    </Stack>
                    <Stack direction={"row"} spacing={2} marginTop={2}>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "40px",
                          border: "1px solid #98A2B3",
                          color: "#475467",
                        }}
                        endIcon={
                          <StarIcon
                            sx={{ color: "#FEC84B", fontSize: "16px" }}
                          />
                        }
                      >
                        3
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "40px",
                          border: "1px solid #98A2B3",
                          color: "#475467",
                        }}
                        endIcon={
                          <StarIcon
                            sx={{ color: "#FEC84B", fontSize: "16px" }}
                          />
                        }
                      >
                        4
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "40px",
                          border: "1px solid #98A2B3",
                          color: "#475467",
                        }}
                        endIcon={
                          <StarIcon
                            sx={{ color: "#FEC84B", fontSize: "16px" }}
                          />
                        }
                      >
                        5
                      </Button>
                    </Stack>
                  </Box>
                  {/* Select Service */}
                  <Box marginTop={3}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", color: "#667085" }}
                    >
                      Select service
                    </Typography>
                    <Stack>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  borderWidth: "1px",
                                },
                              }}
                            />
                          }
                          label="Personals care"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Domestic Assistance"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Social Support & Community Participation"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Specialist Care"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Out and About Transport"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Relief Respite Care"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Coaching & Counselling"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Disability Products"
                        />
                      </FormGroup>
                    </Stack>
                  </Box>
                  {/* Date Range */}
                  <Box marginTop={2}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "16px", color: "#667085" }}
                    >
                      Date range
                    </Typography>
                    
                  </Box>
                </Paper>
              </Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Section 2
            </Typography>
            <Typography variant="body1">
              This is some more content inside another Paper component.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
};
