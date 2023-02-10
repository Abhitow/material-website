import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React,{useState} from "react";

import NightlifeIcon from "@mui/icons-material/Nightlife";
import Mail from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
  display: "flex",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          JunctionBox
        </Typography>
        <NightlifeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="april\public\abhilash.jpeg"
            onClick={(e)=>{setOpen(true)}}
          ></Avatar>
        </Icons>
        <Userbox onClick={(e)=>{setOpen(true)}}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="april\public\abhilash.jpeg"
            
          ></Avatar>
          <Typography>Abhi</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
      onClose={(e)=>{setOpen(false)}}
        id="fade-menu"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={open}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
