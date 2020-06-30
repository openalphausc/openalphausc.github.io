import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Home from './views/Home/content';
import Members from './views/Members/members';
import About from './views/About/about';
import Projects from './views/Projects/projects';
import Apply from './views/Apply/apply';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { Paper, Tabs, Tab, Table } from '@material-ui/core';


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
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <HideOnScroll {...props}>
          <AppBar color="secondary">
            <Toolbar>
              <Typography variant="h6">OPEN ALPHA</Typography>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor={"primary"}
                    centered={true}
                  >
                    <Tab label="Home" to="/" component={Link}/>
                    <Tab label="About" to="/about" component={Link}/>
                    <Tab label="Projects" to="/projects" component={Link}/>
                    <Tab label="Apply" to="/apply" component={Link}/>
                  </Tabs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" component={Projects}/>
          {/*<Route path="/members" component={Members}/>*/}
          <Route path="/apply" component={Apply}/>
          <Route path="/about" component={About}/>
      </Switch>
      </Router>
    </React.Fragment>
  );
}

