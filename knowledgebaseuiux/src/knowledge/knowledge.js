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
import Zoom from '@mui/material/Zoom';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import InfoIcon from '@mui/icons-material/Info';
import Pagination from '@mui/material/Pagination';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Label from '@mui/icons-material/Label';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Link from '@mui/material/Link';



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

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    size: 20,
    color: theme.palette.text.secondary,
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    },
    [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};






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



  const [OpenDialog3, setOpenDialog3] = React.useState(false);
  const [scroll3, setScroll3] = React.useState('paper');

  const handleClickOpen3 = (scrollType) => () => {
    setOpenDialog3(true);
    setScroll3(scrollType);
  };

  const handleCloseDialog3 = () => {
    setOpenDialog3(false);
  };

  const descriptionElementRef3 = React.useRef(null);
  React.useEffect(() => {
    if (OpenDialog3) {
      const { current: descriptionElement3 } = descriptionElementRef3;
      if (descriptionElement3 !== null) {
        descriptionElement3.focus();
      }
    }
  }, [OpenDialog3]);

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
    { field: 'id', headerName: 'No', width: 20},
    { field: 'subject', headerName: 'Subject', width: 230,
    renderCell: (params) => (
      ?? ?? ?? ?? <Link
      ?? ?? ?? ?? ?? href="#"
      ?? ?? ?? ?? >
      ?? ?? ?? ?? ?? {params.row.subject}
      ?? ?? ?? ?? </Link>
      ?? ?? ),
    },
    { field: 'created', headerName: 'Created On',type: 'date', width: 150 },
    { field: 'available', headerName: 'Available For', width: 150},
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
      renderCell: () => {
        return (
          <Switch />
        );
      }
    },

  ];

  const rows = [
    { id: 1, subject: 'How to assess admin page?', created: '2020/12/01	', available: 'CS', display: 'Public', viewed: 35, inserted: 0},
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
          <Box  sx={{ flexGrow: 1}}>
            <Grid container >
              <Grid  xs={4} display="flex" className="leftcorner">
                <Typography color="black" fontSize="16pt" fontWeight="500" noWrap component="div">
                Customer Name
                </Typography>
                <Tooltip title="New" arrow TransitionComponent={Zoom}>
                  <Fab size="small" color="primary" aria-label="add">
                  <AddIcon />
                  </Fab>
                </Tooltip>
                <Tooltip title="Recent" arrow TransitionComponent={Zoom}>
                  <HistoryIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
                <Tooltip title="Search" arrow TransitionComponent={Zoom}>
                  <SearchIcon style={StyleApply.MenuIcon}/>
                </Tooltip>

              </Grid>

              <Grid  xs={8} display="flex" className="rightcorner" >
                <Tooltip title="Notification" arrow TransitionComponent={Zoom}>
                  <Badge badgeContent={4} color="warning">
                      <NotificationsNoneIcon color="action"/>
                  </Badge>
                </Tooltip>
                <Tooltip title="Setting" arrow TransitionComponent={Zoom}>
                  <SettingsIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
                <Tooltip title="Help" arrow TransitionComponent={Zoom}>
                    <HelpOutlineIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
                <Tooltip title="User" arrow TransitionComponent={Zoom}>
                    <AccountCircleIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
                <Tooltip title="Logout" arrow TransitionComponent={Zoom}>
                    <LogoutIcon style={StyleApply.MenuIcon}/>
                </Tooltip>
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
          <Box  sx={{ flexGrow: 1}}>
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
                onClick={handleClickOpen3('paper')}
                />
                <Dialog
                    open={OpenDialog3}
                    onClose={handleCloseDialog3}
                    scroll={scroll3}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                  >
                    <DialogTitle id="scroll-dialog-title">Create Knowledge Base</DialogTitle>
                    <DialogContent dividers={scroll3 === 'paper'}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef3}
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
                      <Button onClick={handleCloseDialog3}>Close</Button>
                      <Button onClick={handleCloseDialog3}>Save</Button>
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
                          <TableCell className="categories"><Typography ><b>Categories and Folders</b></Typography></TableCell>
                          <TableCell className="categories">
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <Typography className="dragdrop" >Drag&Drop?????? ????????? ????????? ??? ????????????<InfoIcon style={StyleApply.InfoIcon}/></Typography>
                        </TableRow>
                      </TableHead>
                      <TableBody >
                        <TreeView
                            defaultCollapseIcon={<ArrowDropDownIcon />}
                            defaultExpandIcon={<ArrowRightIcon />}
                            defaultEndIcon={<div style={{ width: 50 }} />}
                            sx={{ height: 'auto', overflowY: 'auto' }}
                          >
                          <StyledTreeItem nodeId="1" labelText="Category 1" labelIcon={Label}>
                            <StyledTreeItem
                              nodeId="a"
                              labelText="Folder 1.1"
                              labelIcon={FolderOpenIcon}
                              color="#1a73e8"
                              bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                              nodeId="b"
                              labelText="Folder 2.1"
                              labelIcon={FolderOpenIcon}
                              color="#e3742f"
                              bgColor="#fcefe3"
                            />
                          </StyledTreeItem>
                          <StyledTreeItem nodeId="2" labelText="Category 2(10)" labelIcon={Label}>
                            <StyledTreeItem
                              nodeId="2a"
                              labelText="Folder 2.1"
                              labelIcon={FolderOpenIcon}
                              color="#1a73e8"
                              bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                              nodeId="2b"
                              labelText="Folder 2.2"
                              labelIcon={FolderOpenIcon}
                              color="#e3742f"
                              bgColor="#fcefe3"
                            />
                          </StyledTreeItem>
                        </TreeView>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br/>
                  <Tooltip title="Add New Category" arrow placement="right-start" TransitionComponent={Zoom}>
                  <AddIcon className="AddIcon category" 
                  onClick={handleClickOpen('paper')}
                  />
                  </Tooltip>
                  <Dialog
                    fullWidth={fullWidth}
                    open={OpenDialog}
                    onClose={handleCloseDialog}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                  >
                    <DialogTitle id="scroll-dialog-title">Add New Category</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                      >
                        <Box >
                            <FormLabel component="legend">Name<span className="asterisk" >*</span></FormLabel>
                            <TextField fullWidth/>
                        </Box>
                        <br/>
                        <Box >
                            <FormLabel component="legend">Description</FormLabel>
                            <TextField fullWidth/>
                        </Box>
                        <br/>
                        <Grid container >
                            <Grid  xs={12} display="flex" >
                              <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Display to</FormLabel>
                                <RadioGroup
                                  column
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
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog}>Cancel</Button>
                      <Button onClick={handleCloseDialog}>Save</Button>
                    </DialogActions>
                  </Dialog>
                          
                </Grid>
                <Grid  xs={0.3} ></Grid>
                <Grid xs={8} display="flex" >
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid 
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[2]}
                      checkboxSelection
                      components={{
                        Pagination: CustomPagination,
                      }}
                    />
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
      paddingTop: 5,
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


const top100Films = [
  { title: 'Email'},
  { title: 'Call'},
  { title: 'SMS'},
];


export default Knowledge
