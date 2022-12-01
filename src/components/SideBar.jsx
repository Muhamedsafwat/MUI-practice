//MUI components
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";

//Icons
import {
  Inbox,
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  Portrait,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <Box
      component="aside"
      flex={1}
      py={2}
      sx={{
        display: { xs: "none", md: "block" },
        position: "sticky",
        top: "3rem",
        height: "fit-content",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home page" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Portrait />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default SideBar;
