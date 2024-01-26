import React from 'react'
import Logo from "../Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from 'react';
import "../styling/Navbar.css";
import {Link} from "react-router-dom";


export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        {
          text: "Hem",
          icon: <HomeIcon />,
        },
        {
          text: "Om",
          icon: <InfoIcon />,
        },
        {
          text: "Referenser",
          icon: <CommentRoundedIcon />,
        },
        {
          text: "Kontakt",
          icon: <PhoneRoundedIcon />,
        },
        {
          text: "Vagn",
          icon: <ShoppingCartRoundedIcon />,
        },
      ];


      return (
        <nav>
          <div className="nav-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-links-container">
            <Link to="/">Hem</Link>
            <Link to="/about">Om</Link>
            <Link to="/testomonials">Referenser</Link>
            <a href="#kontakt">Kontakt</a>
            <a href="">
              <BsCart2 className="navbar-cart-icon" />
            </a>
            <button className="primary-button">Boka nu</button>
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>

      {/* https://mui.com/material-ui/react-drawer/ */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>


        </nav>
      );
}
