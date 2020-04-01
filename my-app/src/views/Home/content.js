import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './OALogo.png';
import games from './USC_Games.png';
import viterbi from './USC_Viterbi.png';
import sca from './USC_SCA.png';
import Typography from '@material-ui/core/Typography';


console.log(logo);

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bottomContainer: {
    flex: 1,
    backgrounColor: 'secondary'
  }

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <div>
      <img src={logo} width='100%'/>

      <Typography
        variant="h4"
        align="center"
        color="secondary"
        gutterBottom="true">
          Where great games start.
      </Typography>
      <br/>
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
    
    </div>
    <br/>
    <div>
      <Typography variant="h6" gutterBottom="true" color="secondary">
      o·pen al·pha
      <br/>
      /ōpən alfə/
      <br/>
      noun
      <br/>
      a cycle of testing a game in an early stage, wherein the test group is much larger than that of closed testing and typically open to anyone who is interested.
      </Typography>
      <br/>

    </div>
    <Typography variant="h6" color="secondary">
      Our Mission
      <br/>
      Bring a game from conception to an open-alpha release each development cycle (semester/year)
    </Typography>
    <br/>
    <br/>
    <Typography variant="h6" color="secondary">
      Build games with awesome people.
      <br/>
      That's the idea Open Alpha was founded on. As a member, you'll make games with fellow students from the world's best games school.  You'll bring your own talent and vision to a real-world project in an exciting and fast-paced development environment. And best of all, you'll join the tight-knit Open Alpha family and partake in awesome community events throughout the semester.
    </Typography>

    <div>
      <img src={viterbi} width="33%"/>
      <img src={games} width="33%"/>
      <img src={sca} width="33%"/>

      <Typography variant="h5" color="secondary">
      Renowned for talent across the board. Let's use that.
      </Typography>
    </div>
    </div>
  );
}