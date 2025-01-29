import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Dashboard/Products/Products";
import User from "./Dashboard/User/User";
import GithubFinder from "./Dashboard/githubfinder/GithubFinder";
import ProductDetails from "./Dashboard/Products/ProductDetails";
import UserDetails from "./Dashboard/User/UserDetails";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
const drawerWidth = 240;

export default function Dashboard() {
  const pages = [
    {
      name: "Products",
      icon: <FeaturedPlayListOutlinedIcon />,
      route: "/dashboard/products_dashboard",
    },
    {
      name: "Users",
      icon: <AccountCircleOutlinedIcon />,
      route: "/dashboard/users_dashboard",
    },
    {
      name: "Github Finder",
      icon: <TravelExploreOutlinedIcon />,
      route: "/dashboard/githubFinder_dashboard",
    },
  ];

  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {pages.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(item.route)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="products_dashboard" element={<Products />} />
          <Route path="users_dashboard" element={<User />} />
          <Route
            path="user_dashboard/userdetails/:id"
            element={<UserDetails />}
          />
          <Route path="githubFinder_dashboard" element={<GithubFinder />} />
          <Route
            path="products_dashboard/productdetails/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </Box>
    </Box>
  );
}
