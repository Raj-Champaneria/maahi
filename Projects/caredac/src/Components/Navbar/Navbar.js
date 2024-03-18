import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import careDacLogo from "../../Assets/Images/cardac-logo 1.png";
import "../Navbar/Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import languageImg from "../../Assets/Images/language-square.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
      component={'nav'}
        sx={{
          backgroundColor: "#ffff",
          padding: "15px",
          boxShadow: "none",
          borderBottom: "1px solid #F2F4F7",
        }}
      >
        <Toolbar>
          <div className="care-dac-logo">
            <img src={careDacLogo} alt="CareDac Logo" />
          </div>
          <Typography
            variant="h6"
            sx={{
              marginLeft: "20px",
              marginBottom: "20px",
              fontWeight: "500",
              fontSize: "12px",
              color: "#FC9155",
            }}
          >
            Your Location
          </Typography>
          <IconButton size="large" sx={{ color: "#98A2B3" }}>
            <ArrowDropDownIcon />
          </IconButton>
          <Box sx={{ display: "flex", gap: "30px", marginLeft: "auto" }}>
            <Box sx={{ display: "flex", gap: "40px", marginRight: "10px" }}>
              <Button
                sx={{
                  color: "#101828",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: "#101828",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Appointment
              </Button>
              <Button
                sx={{
                  color: "#101828",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Payments
              </Button>
            </Box>
            <div className="language-dropdown">
              <img src={languageImg} />
              <IconButton>
                <KeyboardArrowDownSharpIcon />
              </IconButton>
            </div>
            <IconButton sx={{ color: "black" }}>
              <SearchIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#024FAA",
                color: "#ffff",
                borderRadius: "40px",
                padding: "15px ",
              }}
              onClick={handleMenuOpen}
            >
              <PersonOutlineIcon sx={{ marginRight: "10px" }} />
              John Doe
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              // anchorOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right',
              // }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
              <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
