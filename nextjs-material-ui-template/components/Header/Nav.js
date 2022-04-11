import React, { Fragment, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import useTheme from '@mui/styles/useTheme';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ConnectWithoutContact from '@mui/icons-material/ConnectWithoutContact';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '50px',
    [theme.breakpoints.down('md')]: {
      marginRight: '5px',
    },
  },
  tabComponent: {
    marginRight: '20px',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      marginRight: '2px',
      fontSize: '10px',
    },
  },
  menu: {
    backgroundColor: '#525771',
    color: 'white',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerItems: {
    color: 'white',
    marginX:'3px',
    paddingRight:'20px',
   
  },
  drawer: {
    backgroundColor: '#525771',
    color: 'white',
  },
  drawerIcon:{
    color:'white',
    
  }
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: 'Laptop' },
    { name: 'Mobile' },
    { name: 'Desktop' },
    { name: 'Headphones' },
  ];
  const tabItems = [
    { label: 'Home', value: 'one' },
    { label: 'Product', value: 'two' },
    {
      label: 'Catagory',
      value: 'three',
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaHaspopup: anchorEl ? 'true' : undefined,
      ev: (event) => handleMenu(event),
    },
    { label: 'Cart', value: 'four' },
  ];
  const handleMenuItems = (e, i) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };
  const drawer = (
    <Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition
        disableDiscovery
        classes={{ paper: classes.drawer }}
      >
        <List>
          {tabItems.map((tab, index) => (
            // eslint-disable-next-line react/jsx-key
            <Fragment>
              <ListItem button key={Math.random() * 10} divider>
                <ListItemIcon classes={{root:classes.drawerIcon}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
               
                </ListItemIcon>
                  <ListItemText classes={{root:classes.drawerItems}}> {tab.label}</ListItemText>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' fontFamily='railway'>
              News
            </Typography>
            <div className={classes.tabContainer}>
              <Box sx={{ width: '100%' }}>
                {!matches ? (
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor='secondary'
                    indicatorColor='secondary'
                    aria-label='secondary tabs example'
                  >
                    {/* {tabItems.map((tab) => (
                    <Tab
                      value={tab.value}
                      label={tab.label}
                      className={classes.tabComponent}
                      key={Math.random()}
                      aria-owns={tab.ariaOwns}
                      aria-haspopup={tab.ariaHaspopup}
                      onMouseEnter={tab.ev}
                    />
                  ))} */}
                    <Tab
                      value='one'
                      label='Home'
                      className={classes.tabComponent}
                    />
                    <Tab
                      value='two'
                      label='Product'
                      className={classes.tabComponent}
                    />
                    <Tab
                      aria-owns={anchorEl ? 'simple-menu' : undefined}
                      aria-haspopup={anchorEl ? 'true' : undefined}
                      onMouseEnter={(event) => handleMenu(event)}
                      value='three'
                      label='Catagory'
                      className={classes.tabComponent}
                    />
                    <Tab
                      value='four'
                      label='Community'
                      className={classes.tabComponent}
                    />
                    <Tab
                      value='five'
                      label='Cart'
                      className={classes.tabComponent}
                    />
                  </Tabs>
                ) : (
                  drawer
                )}
              </Box>
            </div>
            <Button
              color='secondary'
              size={matches ? 'small' : 'large'}
              startIcon={<ConnectWithoutContact />}
            >
              <Typography fontFamily='pacific'> Login </Typography>
            </Button>
            {matches ? (
              <IconButton
                color='warning'
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <ViewHeadlineOutlinedIcon />
              </IconButton>
            ) : null}
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {menuItems.map((options, i) => (
                <MenuItem
                  key={Math.random()}
                  onClick={(e) => {
                    handleMenuItems(e, i);
                    handleMenuClose();
                  }}
                >
                  {options.name}
                </MenuItem>
              ))}
              {/* <MenuItem onClick={handleMenuClose}>Laptop </MenuItem>
              <MenuItem onClick={handleMenuClose}>Mobile </MenuItem>
              <MenuItem onClick={handleMenuClose} >Headphones </MenuItem>
              <MenuItem onClick={handleMenuClose}>Gadget </MenuItem> */}
            </Menu>{' '}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
