import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Covid from '../Feature/Covid';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home'
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import PublicIcon from '@material-ui/icons/Public';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DailyData from '../DailyData'
import Home from './Home';
import About from './About';


const drawerWidth = 240;

// const headerStyle = () => {
//     return {
//         visibility: 'visible'
//         // transform: 'rotateX(0) translateY(-100%)',
//         // transition: 'transform .5s ease-in-out',
//         // transitionProperty: 'transform',
//         // transitionDuration: '0.5s',
//         // transitionTimingFunction: 'ease-in-out',
//         // transitionDelay: '0s'
//     }
// }

const headerStyle = () => {
    return {
        visibility: 'visible',
        //transform: 'rotateX(0) translateY(-100%)',
        transition: 'transform .5s ease-in-out',
        transitionProperty: 'transform',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-in-out',
        transitionDelay: '0s'
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    logo: {
        maxWidth: 70,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#46344E',
        [theme.breakpoints.up('sm')]: {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        },
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        color: 'grey',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        //marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    hide: {
        display: 'none',
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));
function Full() {

    const categories = ['COVID-19 Updates', 'About Us', 'Home']
    const classes = useStyles();
    const theme = useTheme();
    const stateC = useSelector(state => state);
    const dispatch = useDispatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const handleDrawerOpen = () => {
        setMobileOpen(true)
    };

    const handleDrawerClose = () => {
        setMobileOpen(false)
    };

    const drawer = (
        <div>
            <List>
                {categories.map((text, index) => (
                    <ListItem button key={text} onClick={() =>
                        dispatch({
                            type: text
                        })
                    }>
                        <ListItemIcon>{index === 0 ? <LocalHospitalSharpIcon /> : index === 1 ? <PublicIcon /> : <HomeIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    ); return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: mobileOpen,
            })} style={headerStyle()}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, mobileOpen && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/nayleptha.png" alt="logo" className={classes.logo} />
                </Toolbar>
            </AppBar>

            {/* <nav className={classes.drawer}> */}
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    //onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: false, // Better open performance on mobile.
                    }}
                >
                    <div className={classes.drawerHeader} />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    {drawer}
                </Drawer>
            </Hidden>
            {/* </nav> */}
            <div className={clsx(classes.content, {
                [classes.contentShift]: mobileOpen,
            })}>
                <div className={classes.toolbar} />
                <div className={classes.drawerHeader} />
                {/* {stateC.side === 'COVID' || stateC.side === '' ? <Covid /> : null} */}
                {stateC.side === 'COVID' || stateC.side === '' ? <DailyData /> : stateC.side === 'HOME' ? <Home /> : stateC.side === 'ABOUT' ? <About /> : null}
            </div>
        </div >
    );
} Full.propTypes = {
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
}; export default Full;