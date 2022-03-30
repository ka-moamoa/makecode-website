import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Heading */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* ABOUT PAGE*/}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/makecode-website")}
                >
                  About
                </Typography>
              </MenuItem>

              {/* CODE & DESIGN PAGE */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/code")}
                >
                  Code
                </Typography>
              </MenuItem>

              {/* DEMO PAGE */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/demo")}
                >
                  Demos
                </Typography>
              </MenuItem>

              {/* KA MOAMOA SITE */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    href="http://kamoamoa.eecs.northwestern.edu/"
                    color="inherit"
                    target="_blank"
                    underline="none"
                  >
                    Ka Moamoa
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Expanded Desktop Navbar */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/makecode-website");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              About
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/code");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Getting Started
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/demo");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Demos
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <a
                href="http://kamoamoa.eecs.northwestern.edu/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                rel="noreferrer"
              >
                Ka Moamoa
              </a>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
