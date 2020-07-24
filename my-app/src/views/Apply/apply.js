import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bottomContainer: {
    flex: 1,
    backgrounColor: 'secondary'
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  images: {
    marginLeft: '25%',
  }

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
      <div>

        <Typography
          variant="h4"
          align="center"
          color="secondary"
          gutterBottom="true">
          TEST
          </Typography>
        <br />
        <br />
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          gutterBottom="true">
          Application page coming soon.
          </Typography>


        <Typography
          variant="h4"
          align="center"
          color="secondary"
          gutterBottom="true">
          Application page coming soon.
          </Typography>
      </div>
      <div id="">
        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom="true">
          TEST 2
          </Typography>
      </div>

      <div>
        <Toolbar id="back-to-top-anchor" />

        <Typography
          variant="h4"
          align="center"
          color="secondary"
          gutterBottom="true">
          Where great games start.
  </Typography>
        <br />
        <br />
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          gutterBottom="true">
          Applications open at the beginning of each semester.
  </Typography>
        <br />
        <Typography
          variant="subtitle1"
          align="center"
          color="secondary"
          gutterBottom="true">
          Be the first to know when applications open.
  </Typography>

      </div>
      <br />
      <div>
        <Typography variant="h6" gutterBottom="true" color="secondary">
          o·pen al·pha
  <br />
  /ōpən alfə/
  <br />
  noun
  <br />
  a cycle of testing a game in an early stage, wherein the test group is much larger than that of closed testing and typically open to anyone who is interested.
  </Typography>
        <br />

      </div>
      <Typography variant="h6" color="secondary">
        Our Mission
  <br />
  Bring a game from conception to an open-alpha release each development cycle (semester/year)
</Typography>
      <br />
      <br />
      <Typography variant="h6" color="secondary">
        Build games with awesome people.
  <br />
  That's the idea Open Alpha was founded on. As a member, you'll make games with fellow students from the world's best games school.  You'll bring your own talent and vision to a real-world project in an exciting and fast-paced development environment. And best of all, you'll join the tight-knit Open Alpha family and partake in awesome community events throughout the semester.
</Typography>

      <div>

        <Typography variant="h5" color="secondary">
          Renowned for talent across the board. Let's use that.
  </Typography>

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>

    </div>
  );
}