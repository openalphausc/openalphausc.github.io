import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Home from './views/Home/content';
import About from './views/About/about';
import Projects from './views/Projects/projects';
import Apply from './views/Apply/apply';
import MailingList from './views/Mailinglist/mailinglist';
import NotFoundPage from './views/NotFoundPage/notfoundpage'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Tabs, Tab, Menu, MenuItem} from '@material-ui/core';
import ToolbarGroup from '@material-ui/core/Toolbar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function HideAppBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
// test content for menu

const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const [open, setOpen] = React.useState(false);
// const anchorRef = React.useRef(null);

// const handleToggle = () => {
//   setOpen((prevOpen) => !prevOpen);
// };

// const handleClose = (event) => {
//   if (anchorRef.current && anchorRef.current.contains(event.target)) {
//     return;
//   }

//   setOpen(false);
// };

// function handleListKeyDown(event) {
//   if (event.key === 'Tab') {
//     event.preventDefault();
//     setOpen(false);
//   }
// }

// // return focus to the button when we transitioned from !open -> open
// const prevOpen = React.useRef(open);
// React.useEffect(() => {
//   if (prevOpen.current === true && open === false) {
//     anchorRef.current.focus();
//   }

//   prevOpen.current = open;
// }, [open]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <HideOnScroll {...props}>
          <AppBar color="secondary">
            <Toolbar>
              <ToolbarGroup firstChild={true} float="left">
              <Typography variant="h6">OPEN ALPHA</Typography>
              </ToolbarGroup>
              <ToolbarGroup style={{
                float : 'none',
                width : '900px',
                marginLeft : 'auto',
                marginRight : 'auto'
              }}>


            

                
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor={"primary"}
                    centered
                  >
                    <Tab label="Home" to="/" component={Link}/>
                    
                    {/* Project section */}
                    <Tab label="Projects"  aria-controls="project-menu" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick} />
          {/* ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}*/}
                    {/* <Tab label="Projects" to="/projects" component={Link}/> */}
                      {/* <Menu
                        id="project-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <MenuItem containerElement={<Link to="/mailinglist" />} onClick={handleClose} onMouseOut={handleClose} >Spring 2020</MenuItem>
                      </Menu> */}

                      <Popper id="project-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow">
                                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                                  <MenuItem onClick={handleClose}>My account</MenuItem>
                                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>

                    <Tab label="Apply" to="/apply" component={Link}/>
                    <Tab label="About" to="/about" component={Link}/>
                  </Tabs>
                  </ToolbarGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          {/*<Route path="/members" component={Members}/>*/}
          <Route path="/apply" component={Apply}/>
          <Route path="/about" component={About}/>
          <Route path="/mailinglist" component={MailingList}/>
          <Route path="/404" component={NotFoundPage}/>

          <Redirect to="/404" />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

