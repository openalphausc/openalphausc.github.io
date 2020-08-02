import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

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
  qa: {
    width: '50rem',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

}));


export default function Members()
{
  const classes = useStyles();
    return (
        <div>
        <div id="QA" className={classes.qa}>
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
        
        </div>
      );
}