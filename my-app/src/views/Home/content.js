import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './OALogo.png';
import games from './USC_Games.png';
import viterbi from './USC_Viterbi.png';
import sca from './USC_SCA.png';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid } from '@material-ui/core';


console.log(logo);

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'secondary'
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  images: {
    marginLeft: '25%',
  },
  titling: {
    // maxWidth: '65rem',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '1rem',
    paddingBottom: '6rem',
  },
  description: {
    maxWidth: '136rem',
    paddingTop: '1rem',
    paddingRight: '10%',
    paddingLeft: '10%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingBottom: '6rem',
  },
  footer: {
    paddingTop:'5rem',
    paddingBottom:'5rem',
  },

}));



function ScrollTop(props) {
  
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });



ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.titling}>
    <Toolbar id="back-to-top-anchor" />
      <img className={classes.images} src={logo} width='50%'/>

      <Typography
        variant="h4"
        align="center"
        color="secondary"
        gutterBottom="true"
        fontWeight="700" >
          Where great games start.
      </Typography>
      <br/>
      <div style=
        {{justifyContent: 'center',
        textAlign:'center'}}>

          <Button 
          variant="contained" 
          color="secondary"
          align="center"
          href="/apply"
          size="large"
          >
          Apply Now
        </Button>
      </div>

      <br/>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        gutterBottom="true">
          Applications open at the beginning of each semester.
      </Typography>
      <br/>
      <Typography
      variant="subtitle1"
      align="center"
      color="secondary"
      gutterBottom="true">
        Be the first to know when applications open.
      </Typography>
        <br />
      


      </div>


    
      <Box bgcolor="secondary.main" color="secondary.contrastText" paddingBottom="6rem" paddingRight="5%" p={2}>
      <br/>
      <div className={classes.description}>
        <Typography variant="h6" gutterBottom="true" color="info">
        <span style=
            {{
            fontWeight: 700,
            fontSize: '30px',
            }}
          >
          o·pen al·pha
        </span>
        <br/>
        /ōpən alfə/
        <br/>
        <i>noun</i>
        <br/>
        a cycle of testing a game in an early stage, wherein the test group is much larger than that of closed testing and typically open to anyone who is interested.
        </Typography>
        <br/>

      
      <Typography variant="h6" color="info">
      <span style=
            {{
            fontWeight: 700,
            fontSize: '30px',
            }}
          >
          Our Mission
        </span>
        <br/>
        Bring a game from conception to an open-alpha release each development cycle (semester/year)
      </Typography>
      <br/>
      <br/>
      <Typography variant="h6" color="info">
      <span style=
            {{
            fontWeight: 700,
            fontSize: '30px',
            }}
          >
          Build games with awesome people.
          </span>
        <br/>
        That's the idea Open Alpha was founded on. As a member, you'll make games with fellow students from the world's best games school.  You'll bring your own talent and vision to a real-world project in an exciting and fast-paced development environment. And best of all, you'll join the tight-knit Open Alpha family and partake in awesome community events throughout the semester.

      </Typography>
      <br/>
      <br/>
      <br/>


      <div>

        <Grid
          container
          spacing={3}
          direction="row"
          justify="space-around"
          alignItems="center"
          alignContent="stretch"
          wrap="nowrap"
            
        >
          
        <img src={viterbi} width="30%" alt="University of Southern California Viterbi School of Engineering Logo"/>
                <img src={games} alt="University of Southern California (USC) Games Department Logo" width="30%"/>
                <img src={sca} alt="University of Southern California School of Cinematic Arts Logo" width="30%"/>
        </Grid>
    <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>

    </div>
    </Box>

    <Divider />
      <Box bgcolor="secondary.main" className={classes.footer} p={2}>
      <div style=
          {{justifyContent: 'center',
          textAlign:'center'}}
          >
      <Button 
        variant="text"
          color="highlight"
          align="center"
          href="https://www.facebook.com/OpenAlphaUSC/"
          size="large">
            <FacebookIcon fontSize="large"/>
      </Button>
      <Button 
        variant="text"
          color="highlight"
          align="center"
          href="https://www.instagram.com/openalphausc/"
          size="large">
            <InstagramIcon fontSize="large"/>
      </Button>
      <Button 
        variant="text"
          color="inherit"
          align="center"
          href="https://www.linkedin.com/company/openalphausc/"
          size="large">
            <LinkedInIcon fontSize="large"/>
      </Button>
        
      </div>

      </Box>

    </div>
  );
}