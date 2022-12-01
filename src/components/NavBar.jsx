import { DarkMode, LightMode, Mail, Notifications } from "@mui/icons-material";
import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Stack,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "60%",
  maxWidth: "500px",
  background: "rgba(255,255,255, .5)",
}));

const NavBar = ({ colorMode, setColorMode }) => {
  //menu
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((value) => !value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //dark mode
  const clickHandler = () => {
    if (colorMode == "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h4" component={"p"}>
          &lt;/&gt;
        </Typography>
        <Search>
          <InputBase fullWidth placeholder="Search..." />
        </Search>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Checkbox
            icon={<LightMode sx={{ color: "white" }} />}
            checkedIcon={<DarkMode sx={{ color: "white" }} />}
            onClick={clickHandler}
          />
          <Badge
            sx={{ display: { xs: "none", md: "block" } }}
            badgeContent={4}
            color="error"
          >
            <Mail />
          </Badge>
          <Badge
            sx={{ display: { xs: "none", md: "block" } }}
            badgeContent={2}
            color="error"
          >
            <Notifications />
          </Badge>
          <Avatar
            onClick={handleClick}
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Stack>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
