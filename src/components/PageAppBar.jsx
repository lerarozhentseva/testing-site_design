import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageAppBar({ title }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{ border: "3px dotted white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PhoneIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            +375445559087, +375337264406
          </Typography>
          <Typography variant="h6" component="div">
            Follow Us:
          </Typography>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            onClick={() => {
              alert(
                "Here you will be transferred to the facebook of the company"
              );
            }}
          >
            <FacebookIcon sx={{ ml: 1, mr: 1 }} />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            onClick={() => {
              alert(
                "Here you will be transferred to the twitter of the company"
              );
            }}
          >
            <TwitterIcon sx={{ mr: 1 }} />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            onClick={() => {
              alert(
                "Here you will be transferred to the linkedIn of the company"
              );
            }}
          >
            <LinkedInIcon sx={{ mr: 1 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Typography
        variant="h4"
        color="primary.dark"
        sx={{ textAlign: "center", fontWeight: "bold", mt: 3 }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          height: "100px",
          mt: 5,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <List
          component="nav"
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: 5,
          }}
        >
          <ListItemButton
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            <Typography
              color="secondary.main"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              About us
            </Typography>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/clients", { replace: true });
            }}
          >
            <Typography
              color="secondary.main"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Clients
            </Typography>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/contact", { replace: true });
            }}
          >
            <Typography
              color="secondary.main"
              sx={{ fontSize: "12px", fontWeight: "bold" }}
            >
              Contact us
            </Typography>
          </ListItemButton>
        </List>

        <TextField
          label="New Jobs"
          size="large"
          color="primary"
          id="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton size="small" onClick={handleClick}>
            <Typography
              color="secondary.main"
              sx={{ fontWeight: "bold", fontSize: "15px" }}
            >
              SOURCING TOOLS
            </Typography>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Typography
                  color="secondary.light"
                  sx={{ fontWeight: "bold", fontSize: "13px" }}
                >
                  Find an employee
                </Typography>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Typography
                  color="secondary.light"
                  sx={{ fontWeight: "bold", fontSize: "13px" }}
                >
                  Find a job
                </Typography>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
}
