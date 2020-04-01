import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './OALogo.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

console.log(logo);

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <img src={logo} width='100%'/>
  );
}