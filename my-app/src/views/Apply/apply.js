import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import greatGames from './GreatGames_Fall2020.png';
import board from './OA_Board.JPG';
import MailingList from '../Mailinglist/mailinglist';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
  centered: {
    justifyContent: 'center',
  },
  qa: {
    maxWidth: '65rem',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
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
      <div id="back-to-top-anchor">

        <Typography 
          variant="h1"
          align="center"
          color="secondary"
          gutterBottom="true">
          <br />
          <br />
          Join our next cohort.
          </Typography>
        <br />
        <br />
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          gutterBottom="true">
          Applications open here at the beginning of each semester.
          </Typography>
        <br />
        <br />


        <Typography
          variant="body1"
          align="center"
          color="secondary"
          gutterBottom="true">
          Be the first to know when applications open.
          </Typography>
        <br />
        <br />
      </div>
      <div style=
          {{justifyContent: 'center',
          textAlign:'center'}}>

          <Button 
          variant="contained" 
          color="secondary"
          align="center"
          href="/mailinglist"
          size="large"
          >
          Stay Updated
        </Button>
      </div>

      <Switch>
          <Route path="/mailinglist" component={MailingList}/>
      </Switch>
      <div style=
          {{justifyContent: 'center',
          textAlign:'center'}}>
          <img src={greatGames} width="60%"/>
      </div>

        <br />
        <br />

        <img src={board} width="100%" />
        <br />
        <br />
        <br />
        <br />

      <div id="FAQTitle">
        <Typography
          variant="h2"
          align="center"
          color="secondary"
          gutterBottom="true">
          <b>FAQ</b>
          </Typography>
      </div>
        <br />

      <div id="QA" className={classes.qa}>
        <Typography variant="h5" gutterBottom="true" color="secondary">
        <b>Q: What’s the time commitment?</b>
        <br />
        A: We’ll have official meetings Thursdays 8-9:30 PM, with bonding activities and retreats on other dates. 
        It’s like a really close group of friends who always want to hang out, especially on Thursday evenings.
        <br />
        <br />
        
        <b>Q: What kind of majors do you accept? </b>
        <br />
        A: All majors are welcome! English? Biology? Philosophy? Great developers are inspired by a range of different subjects.
        <br />
        <br />

        <b>Q: Do I need to have any experience? Are there any other requirements to join?</b>
        <br />
        A: No experience required! We’re looking for people with a drive to learn and a passion for making games! We recommend taking CTIN 488: Game Design Workshop if 
        you’re interested in design, and if you want to program, we suggest having some previous experience.
        <br />
        <br />

        <b>Q: What kind of games do you make? RPG? Action?</b>
        <br />
        A: We won’t make VR, mobile, or console games. Other than that, we’ll decide on the genre and platform together with the cohort.
        <br />
        <br />

        <b>Q: How do you pick the game?</b>
        <br />
        A: At the beginning of the semester, the entire cohort will brainstorm together and pitch their favorite ideas. The cohort’s favorite idea will be chosen and worked on for that semester.
        <br />
        <br />

        <b>Q: Is everyone slotted into roles on the team?</b>
        <br />
        A: We’ll divide people into sub-teams (art, programming, design), but you’re encouraged to move around to experience different parts of the game development process.
        <b> Every part of the game’s development will be accessible to every member. </b>
        We’ll also have sub-team leads to provide leadership opportunities to students who want to focus on just one aspect of the game’s creation.
        <br />
        <br />

        <b>Q: How much are dues?</b>
        <br />
        A: All members must pay a one-time $50 membership fee prior to taking part in any organization activity. 
        This fee will go directly back to members in the form of cohort shirts, social events, production costs, and other club activities.
        <br />
        <br />
        However, money should never be a barrier to entry—members who are not able to pay are encouraged to petition for scholarship or ask 
        to be evaluated on a case-by-case basis by the executive board and club advisor.
        <br />
        <br />
        
        <b>Q: Do you have any interest meetings? </b>
        <br />
        A: Yes! We will have interest meetings before applications close every semester.
        Come learn more about the process, hang out with the board, and ask any specific questions you have!
        <br />
        <br />
        <br />
        <br />
        
        <b>If you have any questions at all, don't hesitate to reach out at hello@openalphausc.com</b>
        <br />
        <br />
        </Typography>
      </div>

      <div>


        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>

      <Box bgcolor="secondary.main" className={classes.footer} p={2}>
      <div style=
          {{justifyContent: 'center',
          textAlign:'center'}}>
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