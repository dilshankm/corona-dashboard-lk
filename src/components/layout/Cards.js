import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#FAED26'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    image: {
        //display: 'block',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        marginLeft: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        width: '50%',
        maxWidth: '400px',
        height: '50%'
    },
}));

export default function Cards(props) {
    const classes = useStyles();
    const theme = useTheme();

    theme.typography.h3 = {
        '@media (min-width:600px)': {
            fontSize: '3vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5vw',
        },
        fontWeight: 'bold',
    };

    theme.typography.h5 = {
        '@media (min-width:600px)': {
            fontSize: '3vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5vw',
        },
        fontWeight: 'bold',
    };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.image}
                component="img"
                alt={props.type.toUpperCase()}
                image={props.src}
                title={props.type.toUpperCase()}
            />
            <div className={classes.details}>
                <CardContent >
                    <div className={classes.controls} >
                        <Typography component="h4" variant="h4">
                            {props.type.toUpperCase()}
                        </Typography>
                    </div>
                </CardContent>
                <div className={classes.controls} >
                    <Typography component="h3" variant="h3">
                        {props.value}
                    </Typography>
                </div>
            </div>
        </Card>
    );
}