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
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Tooltip from '@mui/material/Tooltip';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';








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

  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('lg');

  const [checked, setChecked] = React.useState(true);
  const handleChangeActive = (event) => {
    setChecked(event.target.checked);
  };

  const [Category, setCategory] = React.useState('');

  const handleChangeSelectCategory = (event) => {
    setCategory(event.target.value);
  };

  const [Template, setTemplate] = React.useState('');

  const handleChangeSelectTemplate = (event) => {
    setTemplate(event.target.value);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  const columns = [
    { field: 'id', headerName: 'No', width: 15},
    { field: 'subject', headerName: 'Subject', width: 250 },
    { field: 'created', headerName: 'Created On',type: 'date', width: 150 },
    { field: 'available', headerName: 'Available For', width: 150 },
    { field: 'display', headerName: 'Display To', width: 150 },
    {
      field: 'viewed',
      headerName: 'Viewed',
      type: 'number',
      width: 130,
    },
    {
      field: 'inserted',
      headerName: 'Inserted',
      type: 'number',
      width: 130,
    },
    {
      field: 'active',
      headerName: 'Active',
      width: 100,
    },
  ];
  
  const rows = [
    { id: 1, subject: 'How to assess admin page?', created: '2020/12/01	', available: 'CS', display: 'Public', viewed: 35, inserted: 0 },
    { id: 2, subject: 'How to assess admin page?', created: '2020/12/02', available: 'CS', display: 'Public', viewed: null, inserted: 1 },
    { id: 3, subject: 'How to assess admin page?', created: '2020/12/03', available: 'CS', display: 'Public', viewed: 30, inserted: 2 },
    { id: 4, subject: 'How to assess admin page?', created: '2020/12/04', available: 'CS', display: 'Public', viewed: 40, inserted: 3 },
    { id: 5, subject: 'How to assess admin page?', created: '2020/12/05', available: 'CS', display: 'Public', viewed: null, inserted: 4 },
    { id: 6, subject: 'How to assess admin page?', created: '2020/12/06', available: 'CS', display: 'Public', viewed: null, inserted: 5 },
    { id: 7, subject: 'How to assess admin page?', created: '2020/12/07', available: 'CS', display: 'Public', viewed: 50, inserted: 6 },

  
  
  
  
  ];

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
                <Tooltip title="New" arrow>
                  <Fab size="small" color="primary" aria-label="add">
                  <AddIcon />
                  </Fab>
                </Tooltip>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <Tooltip title="Recent" arrow>
                  <HistoryIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <Tooltip title="Search" arrow>
                  <SearchIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
              </Item>
            </Grid>
          </Grid>
          </Box>
          <Box  sx={{ display: 'flex' }}>
            <Grid container>
            <Grid>
              <Item>
                <Tooltip title="Notification" arrow>
                  <Badge badgeContent={4} color="warning">
                      <NotificationsNoneIcon color="action"/>
                  </Badge>
                </Tooltip>
              </Item>
            </Grid>
            <Grid  > 
              <Item>
                <Tooltip title="Setting" arrow>
                  <SettingsIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
              </Item>
            </Grid>
            <Grid  >
              <Item>
                <Tooltip title="Help" arrow>
                    <HelpOutlineIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
              </Item>
            </Grid>
            <Grid   >
              <Item>
                <Tooltip title="User" arrow>
                    <AccountCircleIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
              </Item>
            </Grid>
            <Grid   >
              <Item className="appear7">
                <Tooltip title="Logout" arrow>
                    <LogoutIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
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
      
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <br/>
        <DrawerHeader />
          <Box  sx={{ flexGrow: 1,}}>
            <Grid container >
              <Grid  xs={4} display="flex" className="leftcorner">
                <StarIcon className="StarIcon"/>
                <Typography marginTop="5px" color="black" fontSize="16pt" fontWeight="500" noWrap component="div">
                KNOWLEDGE BASE
                </Typography>
                <KeyboardArrowDownIcon className="endButton"
                id="demo-customized-button"
                aria-controls={ClicktoDrop ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={ClicktoDrop ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}>
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
                        <Typography className="required">
                        <span className="asterisk" >*</span> is required</Typography>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">Type<span className="asterisk" >*</span></FormLabel>
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
                        <br/>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                          <FormControl fullWidth>
                            <FormLabel component="legend">Category<span className="asterisk" >*</span></FormLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Category}
                              onChange={handleChangeSelectCategory}
                            >
                              <MenuItem value={10}>Folder 11111111111111111111...</MenuItem>
                              <MenuItem value={20}>Folder 2</MenuItem>
                            </Select>
                            <FormHelperText>Type or Click to select a category</FormHelperText>
                          </FormControl>
                          </Grid>
                        </Grid>
                        <br/>
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
                        <br/>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                            <FormControl component="fieldset" variant="standard">
                              <FormLabel component="legend">Active</FormLabel>
                              <Switch checked={checked} onChange={handleChangeActive} inputProps={{ 'aria-label': 'controlled' }}/>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <br/>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                            <FormControl component="fieldset" variant="standard" fullWidth>
                              <FormLabel component="legend">Tag</FormLabel>
                              <Autocomplete
                              multiple
                              id="tags-outlined"
                              options={top100Films}
                              getOptionLabel={(option) => option.title}
                              defaultValue={[top100Films[1]]}
                              filterSelectedOptions
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Type or Click to select a tag"
                                />
                              )}
                            />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <br/>
                        <Box >
                          <FormLabel component="legend">Subject<span className="asterisk" >*</span></FormLabel>
                          <TextField fullWidth/>
                        </Box>
                        <br/>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                          <FormControl fullWidth>
                            <FormLabel component="legend">Content<span className="asterisk" >*</span></FormLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={Template}
                              onChange={handleChangeSelectTemplate}                              
                            >
                              <MenuItem value={10}>Select a template</MenuItem>
                            </Select>
                            <FormHelperText>Select a template</FormHelperText>
                          </FormControl>
                          </Grid>
                        </Grid>
                        <br/>
                        <Grid container >
                          <Grid  xs={12} display="flex" >
                          <FormControl fullWidth>
                            <FormLabel component="legend">Editor area</FormLabel>
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
                  <KeyboardArrowDownIcon 
                    id="demo-customized-button"
                    aria-controls={ClicktoDrop ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={ClicktoDrop ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}>
                  </KeyboardArrowDownIcon>
                </Search>
                <WidgetsIcon className="WidgetsIcon "/>
              </Grid>
            </Grid>
          </Box>
          <br/>
          <Box  >
            <Grid container >
                <Grid  xs={3.7} className="leftborder">
                  <TableContainer >
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell className="categories"><Typography >Categories and Folders</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                          
                          <Typography className="dragdrop">Drag&Drop으로 폴더를 이동할 수 있습니다   <InfoIcon style={StyleApply.InfoIcon}/></Typography>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TreeView className="Icon"
                          aria-label="file system navigator"
                          defaultCollapseIcon={<RemoveIcon className="defaultCollapseIcon"/>}
                          defaultExpandIcon={<AddIcon  className="defaultExpandIcon"/>}
                          >
                          <TreeItem nodeId="1" label="Category 1">
                            <TreeItem nodeId="a" label="Folder 1.1" />
                            <TreeItem nodeId="b" label="Folder 2.1" />
                          </TreeItem>
                          <br/>
                          <TreeItem nodeId="2" label="Category 2(10)">
                          <TreeItem nodeId="2a" label="Folder 2.1" />
                            <TreeItem nodeId="2b" label="Folder 2.2" />
                          </TreeItem>
                        </TreeView>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br/>
                  <AddIcon className="AddIcon category" 
                
                />            
                </Grid>
                <Grid  xs={0.3} ></Grid>
                <Grid xs={8} display="flex" >
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                  <Switch {...label} defaultChecked/>
                </div>
                </Grid>
            </Grid>
              
          </Box>
          
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
    InfoIcon:{
      color: "black",
      paddingTop: 0,
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
    border: "solid 1px black",
    
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

const top100Films = [
  { title: 'Email'},
  { title: 'Call'},
  { title: 'SMS'},
];


export default Knowledge
