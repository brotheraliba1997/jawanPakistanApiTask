import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import header_logo from "./../../images/Logo(1).svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const drawerWidth = 440;
const navItems = ["Beliebte Marken"];

function SMHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [style, setStyle] = React.useState({ display: "none" });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{ background: "white", boxShadow: "none", position: "static" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "space-between", xs: "center" },
                borderBottom: { sm: "1px solid black", xs: "none" },
                padding: "30px 0px 10px 0",
                position: "relative",
              }}
            >
              <img src={header_logo} style={{ maxWidth: "200px" }} />
              <Box
                sx={{
                  position: "relative",
                  width: "350px",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <Box>
                  <input
                    style={{
                      background: "#fff",
                      border: "1px solid #ebebeb",
                      borderRadius: "24px",
                      color: "#222",
                      fontSize: "16px",
                      FontWeight: "400",
                      padding: "8px 30px",
                      width: "100%",
                      height: "42px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    height: "32px",
                    position: "absolute",
                    right: "8px",
                    top: "6px",
                    width: "32px",
                  }}
                >
                  <Box
                    sx={{
                      background: "#ff8b13",
                      borderRadius: "100%",
                      height: "32px",
                      width: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SearchIcon />
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "black",
                      fontSize: { md: "10px", lg: "14px" },
                      fontWeight: 600,
                    }}
                    className="header-btn"
                  >
                    {item} <ArrowDropDownIcon sx={{ color: "#ff8b13" }} />
                  </Button>
                ))}

                <Box
                  sx={{
                    position: "absolute",
                    top: "80px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: { lg: "100%", md: "90%" },
                    height: "30%",
                  }}
                  className="header-show-hove"
                >
                  asdasdasd
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

SMHeader.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SMHeader;
