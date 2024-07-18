import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import DescriptionIcon from "@mui/icons-material/Description";
import BugReportIcon from "@mui/icons-material/BugReport";
import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import { Link, NavLink, Outlet } from "react-router-dom";
import Dashboard from "@mui/icons-material/Dashboard";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState('Dashboard');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          <Link to={"/dashboard"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Dashbord");
                }}
              >
                <ListItemIcon>
                  <DashboardTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Lead");
                }}
              >
                <ListItemIcon>
                  <LeaderboardIcon />
                </ListItemIcon>
                <ListItemText primary="Leads" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/contact"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Contact");
                }}
              >
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Properties");
                }}
              >
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Properties" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Tasks");
                }}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Task" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/meeting"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Meetings");
                }}
              >
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Meetings" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Calls");
                }}
              >
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="Calls" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Emails");
                }}
              >
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Emails" />
              </ListItemButton>
            </ListItem>
          </Link>

          <NavLink
            to={"/dashboard/lead"}
            style={({ isActive }) => ({
              color: isActive ? "#3311DB" : "#202020",
            })}
          >
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Calender");
                }}
              >
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Calender" />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Payments");
                }}
              >
                <ListItemIcon>
                  <PaidIcon />
                </ListItemIcon>
                <ListItemText primary="Payments" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Documents");
                }}
              >
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Documents" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={"/dashboard/lead"}>
            <ListItem sx={{p: 0}}>
              <ListItemButton
                onClick={() => {
                  setTitle("Reporting and Analytics");
                }}
              >
                <ListItemIcon>
                  <BugReportIcon />
                </ListItemIcon>
                <ListItemText primary="Reporting And Analytics" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
