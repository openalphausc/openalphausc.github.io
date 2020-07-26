import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import Charlie from '../../assets/Board/Charlie_Normal.JPG';
import Colin from '../../assets/Board/Colin_Normal.JPG';

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



const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%'
    },
    title: {
        marginTop: '5%',
        textAlign: 'center'
    },
    media: {
        height: 0,
        paddingTop: '90%', // 16:9
    },
    grids: {
        marginTop: '5%',
        justify: 'center'
    },
    header: {
        textAlign: 'center'
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div id="back-to-top-anchor">
            <Typography className={classes.title} variant='h2'>
                Meet the Board
            </Typography>
                <Grid container className={classes.grids}>
                    <Grid item xs={6} align='center'>
                        <Card className={classes.root}>
                            <CardHeader className={classes.header}

                                title="Charlie Feuerborn"
                                subheader="Co-President"
                            />
                            <CardMedia
                                className={classes.media}
                                image={Charlie}
                                title="Charles <3"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" align='center'>
                                    10-year Dungeons and Dragons player
                                <br />
                                1500 hours on Counter Strike: Global Offensive
                                <br />
                                3 Minecraft Adventure Maps (redstone wizard)
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <Card className={classes.root}>
                            <CardHeader className={classes.header}

                                title="Colin Spiridonov"
                                subheader="Co-President"
                            />
                            <CardMedia
                                className={classes.media}
                                image={Colin}
                                title="Colin <3"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" align='center'>
                                A 100% fair Dungeon Master
                                <br/>
                                Knows, like, a lot of Pokemon
                                <br/>
                                Plays Celeste on Assist Mode and still can't win
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    );
}