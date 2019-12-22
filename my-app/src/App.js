import React, {Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import OATransparentLogo from './assets/OALogo1.png';
import Members from './components/Members.js';
import Projects from './components/Projects.js';
import Calendar from './components/Calendar.js';
import {HashLink as Link} from 'react-router-hash-link';

import Scroll from 'react-scroll';

const ScrollLink = Scroll.ScrollLink;

const useStyles = makeStyles(theme => ({
 root: {
   flexGrow: 1,
   position: 'fixed',
   bottom: theme.spacing(2),
   right: theme.spacing(2),
 },
 title: {
   flexGrow: 1,
   marginLeft: 12
 },
 button: {
   marginLeft: 'auto',
   marginRight: 12,
 },
 section: {
   padding: theme.spacing(2),
 }
}));

function Header() {
  return <img src={OATransparentLogo} alt='Logo'/>;
}

function ScrollTop(props) {
  const {children, window} = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if(anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <Typography color='secondary' variant='inherit' align='inherit' className={classes.title}>
            OPEN ALPHA USC
          </Typography>
          <span className={classes.button}>
            <Link to='/Members'>
              <Button color='secondary'>Members</Button>
            </Link>
            <Link to='/Projects#student-developed-games'>
             <Button color='secondary'>Projects</Button>
            </Link>
            <Link to='/Calendar#events'>
             <Button color='secondary'>Calendar</Button>
            </Link>
             <Button color='secondary'>About</Button>
          </span>
          
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor'/>
     
      <Box className={classes.section}>
        <Members/>
      </Box>
      <Box className={classes.section}>
        <Projects/>
      </Box>
      <Box className={classes.section}>
        <Calendar/>
      </Box>



      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
      </React.Fragment>


  );
}

