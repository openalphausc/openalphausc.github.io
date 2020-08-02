import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
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
  error: {
    width: '50rem',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
    minHeight:'100vh',
  },

}));


export default function Members()
{
  const classes = useStyles();
    return (
        <div>
        <div id="error" className={classes.error}>
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography
            variant="h6"
            align="center"
            color="secondary"
            gutterBottom="true">
              AW SNAP! SOMETHING WENT TERRIBLY WRONG.
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="secondary"
            gutterBottom="true">
              WE COULDN'T FIND THE PAGE YOU'RE LOOKING FOR.
          </Typography>
          <br/>

          <div style=
          {{justifyContent: 'center',
          textAlign:'center'}}>
          <iframe width="384" height="216" 
          src="https://www.youtube.com/embed/t3otBjVZzT0" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
          </div>
        
        </div>
        
{/* FOOTER */}
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

{/* END OF FOOTER */}
        </div>
      );
}