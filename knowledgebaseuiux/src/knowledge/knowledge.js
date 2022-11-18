import * as React from 'react';
import './knowledge.css';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import StarIcon from '@mui/icons-material/Star';
import StorageIcon from '@mui/icons-material/Storage';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import HistoryIcon from '@mui/icons-material/History';
import AddIcon from '@mui/icons-material/Add';
import Item from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Knowledge() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar style={StyleApply.Customer} position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon className="menuicon1"/>
          </IconButton>
          <Box  sx={{ flexGrow: 1 }}>
            <Grid justifyContent="flex-start" alignItems="center" direction="row" container>
            <Grid>
              <Item>
                <Typography  color="black" fontSize="15pt" noWrap component="div">
                Customer Name
                </Typography>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
                </Fab>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <HistoryIcon style={StyleApply.MenuIcon}/>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <SearchIcon style={StyleApply.MenuIcon}/>
              </Item>
            </Grid>
          </Grid>
          </Box>
          <Box >
            <Grid justifyContent="flex-start" alignItems="center" direction="row" container>
            <Grid>
              <Item>
                <Badge badgeContent={4} color="warning">
                    <NotificationsNoneIcon color="action" />
                </Badge>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <SettingsIcon style={StyleApply.MenuIcon}/>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <HelpOutlineIcon style={StyleApply.MenuIcon}/>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <AccountCircleIcon style={StyleApply.MenuIcon}/>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <LogoutIcon style={StyleApply.MenuIcon}/>
              </Item>
            </Grid>
          </Grid>
          </Box>
          
        </Toolbar>
        
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="menutopbar">
        <Typography style={StyleApply.Hanbiro}>
          Hanbiro 
          </Typography>
          <Typography  style={StyleApply.CRM}>CRM</Typography>
          <IconButton onClick={handleDrawerClose}>
          <MenuIcon className="menuicon2"/>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="menutobottompbar">
          {['Dashboard', 'My Work', 'Desk', 'Customer', 'Product', 'Demo Page', 'Favourites', 'My Works'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 && <DashboardIcon 
                  style={StyleApply.DashboardIcon} />}
                  {index === 1 && <WorkIcon 
                  style={StyleApply.WorkIcon}/>}
                  {index === 2 && <PersonalVideoIcon 
                  style={StyleApply.PersonalVideoIcon}/>}
                  {index === 3 && <SupportAgentIcon 
                  style={StyleApply.SupportAgentIcon}/>}
                  {index === 4 && <InventoryIcon 
                  style={StyleApply.InventoryIcon}/>}
                  {index === 5 && <FilterNoneIcon 
                  style={StyleApply.FilterNoneIcon}/>}
                  {index === 6 && <StarIcon 
                  style={StyleApply.StarIcon}/>}
                  {index === 7 && <StorageIcon 
                  style={StyleApply.StorageIcon}/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
          ))}
        </List>        
      </Drawer>
      {/* <Box >
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
    </Box>
  );
}

const StyleApply = {
    DashboardIcon:{
        color: "3D7896",
    },
    WorkIcon:{
        color: "E69395",
    },
    PersonalVideoIcon:{
        color: "FFB866",
    },
    SupportAgentIcon:{
        color: "8CB2DC",
    },
    InventoryIcon:{
        color: "788B6C",
    },
    FilterNoneIcon:{
        color: "929497",
    },
    StarIcon:{
       color: "D4A81D",
    },
    StorageIcon:{
       color: "BC8E95",
    },
    Customer:{
        background: "white",
     },
    MenuIcon:{
      color: "black",
    },
    Hanbiro:{
      color: "#FFF3E0",
      fontSize: 25,
      fontWeight: 700,
      
    },
    CRM:{
      color: "white",
      marginRight: 30,
      fontSize: 10,
      paddingTop: 9,
    },

}






export default Knowledge