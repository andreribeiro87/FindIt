"use client";

import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//TODO

// texto a dar cliping  


export default function NavBar({index,changeIndex}) {

  const colors = [ "neutral","success","primary", "warning","danger" ];
  return (
    <Tabs
      size="lg"
      value={index}
      onChange={changeIndex}
      sx={(theme) => ({
        position: "fixed",
        bottom: 10,
        left: 0,
        right: 0,
        margin: "auto",
        p: 1,
        borderRadius: 16,
        maxWidth: 500,
        mx: "auto",
        
        //TODO cenas da VI
        boxShadow: theme.shadow.sm,
        "--joy-shadowChannel": theme.vars.palette[colors[index]].darkChannel,
        [`& .${tabClasses.root}`]: {
          py: 1,
          flex: 1,
          transition: "0.7s",
          fontWeight: "md",
          fontSize: "md",
          [`&:not(.${tabClasses.selected}):not(:hover)`]: {
            opacity: 0.7,
            fontSize:0
          },
        },
      })}
    >
      <TabList
        variant="plain"
        size="sm"
        disableUnderline
        sx={{ borderRadius: "lg", p: 0 }}
      >
        <Tab
          disableIndicator
          orientation="vertical"
          {...(index === 0 && { color: colors[0] })}
        >
          <ListItemDecorator>
            <NotificationsActiveIcon />
          </ListItemDecorator>
          Notifications
        </Tab>
        <Tab
          disableIndicator
          orientation="vertical"
          {...(index === 1 && { color: colors[1] })}
        >
          <ListItemDecorator>
            <ShoppingCartIcon />
          </ListItemDecorator>
          Cart
        </Tab>
        <Tab
          disableIndicator
          orientation="vertical"
          {...(index === 2 && { color: colors[2] })}
        >
          <ListItemDecorator>
            <Search />
          </ListItemDecorator>
          Search
        </Tab>
        <Tab
          disableIndicator
          orientation="vertical"
          {...(index === 3 && { color: colors[3] })}
        >
          <ListItemDecorator>
            <MapIcon />
          </ListItemDecorator>
          Map
        </Tab>
        <Tab
          disableIndicator
          orientation="vertical"
          {...(index === 4 && { color: colors[4] })}
        >
          <ListItemDecorator>
            <AccountCircleIcon />
          </ListItemDecorator>
          Profile
        </Tab>
      </TabList>
    </Tabs>
  );
}
