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
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PushPinIcon from '@mui/icons-material/PushPin';
import CachedIcon from '@mui/icons-material/Cached';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import InputBase from '@mui/material/InputBase';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

const ProtitleNew = (params) => {
  return (

    <div style={params.classNameWrapper}>
      <div style={params.classNameItem}>
        <text style={StySpecification.ColorText}>{params.Title} </text>
      </div>
      <div style={params.PadPro}>
        <p><text>{params.Core}</text></p>
        <p><text>{params.G}</text></p>
        <p><text>{params.SD}</text></p>
        <p><text>{params.SG}</text></p>
        <p><text>{params.원}</text></p>
      </div>
    </div>

  )
}

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));






const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



function Knowledge() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const Appear = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const Appear2 = Boolean(anchorEl2);

  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handlePopoverOpen3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handlePopoverClose3 = () => {
    setAnchorEl3(null);
  };

  const Appear3 = Boolean(anchorEl3);

  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handlePopoverOpen4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handlePopoverClose4 = () => {
    setAnchorEl4(null);
  };

  const Appear4 = Boolean(anchorEl4);

  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handlePopoverOpen5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };

  const handlePopoverClose5 = () => {
    setAnchorEl5(null);
  };

  const Appear5 = Boolean(anchorEl5);

  const [anchorEl6, setAnchorEl6] = React.useState(null);

  const handlePopoverOpen6 = (event) => {
    setAnchorEl6(event.currentTarget);
  };

  const handlePopoverClose6 = () => {
    setAnchorEl6(null);
  };

  const Appear6 = Boolean(anchorEl6);

  const [anchorEl7, setAnchorEl7] = React.useState(null);

  const handlePopoverOpen7 = (event) => {
    setAnchorEl7(event.currentTarget);
  };

  const handlePopoverClose7 = () => {
    setAnchorEl7(null);
  };

  const Appear7 = Boolean(anchorEl7);


  const [anchorEl8, setAnchorEl8] = React.useState(null);
  const ClicktoDrop = Boolean(anchorEl8);
  const handleClick = (event) => {
    setAnchorEl8(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl8(null);
  };



  const [OpenDialog, setOpenDialog] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpenDialog(true);
    setScroll(scrollType);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (OpenDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [OpenDialog]);

  const [value, setValue] = React.useState('Article');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [value2, setValue2] = React.useState('Public');

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeActive = (event) => {
    setChecked(event.target.checked);
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
          <Box sx={{ flexGrow: 1, p: 1 }} >
            <Grid container alignItems="center" >
            <Grid>
              <Item>
                <Typography color="black" fontSize="16pt" fontWeight="500" noWrap component="div">
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
                <HistoryIcon style={StyleApply.MenuIcon}
                aria-owns={Appear ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                />
              <Popover 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>Recent</Typography>
              </Popover>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <SearchIcon style={StyleApply.MenuIcon}
                aria-owns={Appear2 ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen2}
                onMouseLeave={handlePopoverClose2}
                />
                <Popover 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear2}
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose2}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>History</Typography>
              </Popover>
              </Item>
            </Grid>
          </Grid>
          </Box>
          <Box  sx={{ display: 'flex' }}>
            <Grid container>
            <Grid>
              <Item>
                <Badge badgeContent={4} color="warning">
                    <NotificationsNoneIcon color="action"
                aria-owns={Appear3 ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen3}
                onMouseLeave={handlePopoverClose3}
                />
                <Popover 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear3}
                anchorEl={anchorEl3}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose3}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>Notification</Typography>
              </Popover>
                </Badge>
              </Item>
            </Grid>
            <Grid  > 
              <Item>
                <SettingsIcon style={StyleApply.MenuIcon}
                aria-owns={Appear4 ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen4}
                onMouseLeave={handlePopoverClose4}
                />
                <Popover 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear4}
                anchorEl={anchorEl4}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose4}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>Setting</Typography>
              </Popover>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <HelpOutlineIcon style={StyleApply.MenuIcon}
                aria-owns={Appear5 ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen5}
                onMouseLeave={handlePopoverClose5}
                />
                <Popover 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear5}
                anchorEl={anchorEl5}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose5}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>Help</Typography>
              </Popover>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <AccountCircleIcon style={StyleApply.MenuIcon}
                aria-owns={Appear6 ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen6}
                onMouseLeave={handlePopoverClose6}
                />
                <Popover 
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear6}
                anchorEl={anchorEl6}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose6}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>User</Typography>
              </Popover>
              </Item>
            </Grid>
            <Grid   >
              <Item className="appear7">
                <LogoutIcon style={StyleApply.MenuIcon}
                aria-owns={Appear7 ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen7}
                onMouseLeave={handlePopoverClose7}
                />
                <Popover 
                
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={Appear7}
                anchorEl={anchorEl7}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                
                onClose={handlePopoverClose7}
                disableRestoreFocus
              >
                <Typography  sx={{ p: 0.5}}>Logout</Typography>
              </Popover>
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
      {/* <div  style={StySpecification.TableWrap}>
              <div style={StySpecification.ListProduct}>

                {ProtitleNew({
                  classNameWrapper: StySpecification.InfPro,
                  classNameItem: StySpecification.ProTitleLeft,
                  PadPro: StySpecification.PadPro,
                  Title: "hi",
                  Core: "CPU",
                  G: "Memory",
                  SD: "Storage",
                  SG: "Traffic 전송량(월)",
                  원: "서비스비용(월)"

                })}
              </div>
            </div> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <br/>
        <DrawerHeader />
          <Box  sx={{ flexGrow: 1,}}>
            <Grid container >
              <Grid  xs={4} display="flex" className="leftcorner">
                <StarIcon className="StarIcon"/>
                <Typography color="black" fontSize="16pt" fontWeight="500" noWrap component="div">
                KNOWLEDGE BASE
                </Typography>
                <KeyboardArrowDownIcon className="endButton"
                id="demo-customized-button"
                aria-controls={ClicktoDrop ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={ClicktoDrop ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
              >
                
              </KeyboardArrowDownIcon>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl8}
                open={ClicktoDrop}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  Ticket
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Knowledge Base
                  <PushPinIcon />
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Setting
                </MenuItem>
              </StyledMenu>

              </Grid>

              <Grid  xs={8} display="flex" className="rightcorner">
                <AddIcon className="AddIcon" 
                onClick={handleClickOpen('paper')}
                />
                <Dialog
                    open={OpenDialog}
                    onClose={handleCloseDialog}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                  >
                    <DialogTitle id="scroll-dialog-title">Create Knowledge Base</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                      >
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                              >
                                <FormControlLabel 
                                  value="Article" 
                                  control={<Radio />} 
                                  label="Article" />
                                <FormControlLabel 
                                  value="Canned Response" 
                                  control={<Radio />} 
                                  label="Canned Response" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">Display to</FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value2}
                                onChange={handleChange2}
                              >
                                <FormControlLabel 
                                  value="Public" 
                                  control={<Radio />} 
                                  label="Public" />
                                <FormControlLabel 
                                  value="Private" 
                                  control={<Radio />} 
                                  label="Private" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                            <FormControl component="fieldset" variant="standard">
                              <FormLabel component="legend">Active</FormLabel>
                              <Switch checked={checked} onChange={handleChangeActive} inputProps={{ 'aria-label': 'controlled' }}/>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog}>Close</Button>
                      <Button onClick={handleCloseDialog}>Save</Button>
                    </DialogActions>
                </Dialog>
                <CachedIcon className="CachedIcon"/>
                <BorderAllIcon className="BorderAllIcon "/>

              </Grid>
            </Grid>
          </Box>
          <br/>
          <Box  sx={{ flexGrow: 1,}}>
            <Grid container >
              <Grid  xs={12} display="flex" className="rightcorner">
              <Search className="SearchIconWrapper">
                <SearchIconWrapper >
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Subject"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
                <WidgetsIcon className="WidgetsIcon "/>
              </Grid>
            </Grid>
          </Box>
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

          
      </Box>
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

const StySpecification = {
  StylesContainer: {
    boxShadow: "0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)",
    border: "1px solid #E7EAF3",
    borderRadius: "8px",
    padding: 20,
    marginTop: 30,
  },
  StylesTitle: {
    textAlign: "center",
  },
  Title: {
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "30px"
  },
  Text: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: "30px"
  },
  ColorText: {
    color: "white",
  },
  ProductTitle: {
    background: "#393939",
    fontWeight: "bold",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    paddingTop: 8,
    paddingBottom: 8,

  },
  ProTitleLeft: {
    fontWeight: 500,
    paddingTop: 8,
    paddingBottom: 8,
  },
  InfProduct: {
    borderRadius: "8px",
    width: "20%",
    minWidth: "170px",
    marginLeft: 20,
    border: "1px solid #D7E5ED",
    whiteSpace: "nowrap",

  },
  InfPro: {
    visibility:"visible",
    borderRadius: "8px",
    width: "20%",
    textAlign: "right",
    fontWeight: 700,
    whiteSpace: "nowrap",
    minWidth: "130px",
  },

  ListProduct: {
    display: "flex",
    fontSize: "110%",
    
  },
  PadPro: {
    paddingTop: 10,
  },
  Auto: {
    backgroundColor: "lightblue",
    width: "150px",
    overflowX: "scroll",

  },

  TableScroll:{
    position:"relative",
    width: "100%",
    margin:"auto",
    overflow:"hidden",
    
    
  },
  TableWrap:{
    width:"100%",
    overflow:"auto",
  },
  



}




export default Knowledge
