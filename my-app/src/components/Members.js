import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CharlieIMG from '../assets/charlie.jpg';
import ColinIMG from '../assets/colin.jpg';
import RachelIMG from '../assets/rachel.jpeg';
import AlainaIMG from '../assets/alaina.jpg';
import SamIMG from '../assets/sam.jpg';
import AlisaIMG from '../assets/alisa.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.primary,
  }
}));

export default function Grid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={CharlieIMG}
                title="Charlie Feuerborn"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align='center'>
                  Charlie Feuerborn
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="inherit">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </Grid>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ColinIMG}
              title="Colin Spiridonov"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align='center'>
                Colin Spiridonov
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Learn More
        </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

