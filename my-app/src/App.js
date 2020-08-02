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
                    <Tab label="Projects" aria-controls="project-menu" aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick} />
                    {/* <Tab label="Projects" to="/projects" component={Link}/> */}
                      <Menu
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
                        <MenuItem href="/mailinglist" onClick={handleClose} onMouseOut={handleClose} >Spring 2020</MenuItem>
                      </Menu>


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

