import React, { Component } from 'react';
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
import Logo from './assets/Baby Blue on Dark Blue@8x.png';
import Members from './components/Members.js';
import Projects from './components/Projects.js';
import { HashLink as Link } from 'react-router-hash-link';


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
  },
  imageBox: {
    flex: 1,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  })
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
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
      <AppBar color='highlight'>
        <Toolbar>
          <Typography color='black' variant='h5' align='inherit' className={classes.title}>
            OPEN ALPHA USC
            </Typography>
          <span className={classes.button}>
            <Link to='/#Members'>
              <Button color='black'>Members</Button>
            </Link>
            <Link to='/Projects#student-developed-games'>
              <Button color='black'>Projects</Button>
            </Link>
            <Button color='black'>About</Button>
          </span>
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      <Box className={classes.imageBox}>
        <img src={Logo} style={{ height: '45%', width: '45%' }} />
      </Box>
      <Box className={classes.imageBox}>
        <Typography color='secondary' variant='h1' align='center' className={classes.title}>
          OPEN ALPHA
        </Typography>
      </Box>
      <Box className={classes.imageBox}>
        <Typography color='primary' variant='h3' align='center' className={classes.title}>
          Where great games start.
        </Typography>
      </Box>
      <Box className={classes.imageBox}>
        <Link to='/Apply#application-url'>
          <Button variant='contained'>Apply Now</Button>
        </Link>
      </Box>
      <Box className={classes.section}>
        <Typography color='primary' variant='h5' align='center' className={classes.title}>
          No experience necessary! <br />
          No required majors! <br />
          All are welcome!
        </Typography>
      </Box>
      <Box className={classes.imageBox}>
        <Typography color='primary' variant='h8' align='center' className={classes.title}>
          Applications close Monday, Jan 20.
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography color='primary' variant='h3' align='center' className={classes.title}>
          Interest Meetings <br />
          Thursday, January 16 and Friday, January 17 <br />
          7:00PM <br />
          GFS 111
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography color='primary' variant='h5' align='center' className={classes.title}>
          Come learn more about the process, hang out with the board, and ask <br />
          any specific questions you have! Free pizza included.
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Members />
      </Box>
      <Box className={classes.section}>
        <Projects />
      </Box>


      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>


  );
}

