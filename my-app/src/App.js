import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HouseIcon from '@material-ui/icons/House';
import SportsIcon from '@material-ui/icons/SportsEsports';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GroupIcon from '@material-ui/icons/Group';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Home from './views/Home/content';
import Members from './views/Members/members';
import About from './views/About/about';
import Projects from './views/Projects/projects';
import Apply from './views/Apply/apply';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="secondary"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            OPEN ALPHA
          </Typography>
        </Toolbar>
      </AppBar>
      
        <Router>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          <main>
            <nav>
            <ul>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List component='nav' aria-label='main menu'>
          <ListItem button>
              <ListItemIcon>
              <HouseIcon/>
              </ListItemIcon>
              <li><Link to="/">Home</Link></li>
          </ListItem>
        </List>
        <List component='nav' aria-label='projects menu'>
          <ListItem button>
            <ListItemIcon>
            <MenuBookIcon/>
            </ListItemIcon>
            <li><Link to="/projects">Projects</Link></li>
          </ListItem>
        </List>
        <List component='nav' aria-label='members menu'>
          <ListItem button>
              <ListItemIcon>
              <SportsIcon/>
              </ListItemIcon>
              <li><Link to="/members">Members</Link></li>
          </ListItem>
        </List>
        <List component='nav' aria-label='apply'>
          <ListItem button>
            <ListItemIcon>
             <ListAltIcon/>
            </ListItemIcon>
            <li><Link to="/apply">Apply</Link></li>
          </ListItem>
        </List>
        <List component='nav' aria-label='about us'>
          <ListItem button>
            <ListItemIcon>
             <GroupIcon/>
            </ListItemIcon>
            <li><Link to="/about-us">About</Link></li>
          </ListItem>
        </List>
  
        <Divider />
        </ul>
        </nav>

   

      </main>
      </Drawer>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/members" component={Members}/>
          <Route path="/apply" component={Apply}/>
          <Route path="/about-us" component={About}/>
      </Switch>
        </Router>
    
     
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
 
      </main>

    
    </div>
  );
}

