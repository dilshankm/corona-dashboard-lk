import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux"
import Cards from './Cards'
import { Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function LocalCases() {

    const classes = useStyles();
    const state = useSelector(state => state);

    const theme = createMuiTheme();

    theme.typography.h2 = {
        fontWeight: 'bold',
        color: 'purple',
        '@media (min-width:600px)': {
            fontSize: '3vw',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5vw',
        },
    };

    const icons = [
        'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/virus.svg',
        'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/recovered.svg',
        'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/hospital.svg',
        'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/active.svg',
        'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/total.svg',
        'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/new.svg'
    ]

    return (
        <div className={classes.root}>
            {state.fetch.message === 'Success' ?
                <React.Fragment>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2" component="h2" align='center'>LOCAL CASES</Typography>
                    </ThemeProvider>
                    <br></br>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Cards type={'New Cases'} value={state.fetch.data.local_new_cases} src={icons[5]} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Cards type={'Total Cases'} value={state.fetch.data.local_total_cases} src={icons[4]} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Cards type={'In Hospitals'} value={state.fetch.data.local_total_number_of_individuals_in_hospitals} src={icons[2]} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Cards type={'Total Deaths'} value={state.fetch.data.local_deaths} src={icons[0]} />
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Cards type={'New Deaths'} value={state.fetch.data.local_new_deaths} src={icons[0]} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Cards type={'Total Recovered'} value={state.fetch.data.local_recovered} src={icons[1]} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Cards type={'Active Cases'} value={state.fetch.data.local_active_cases} src={icons[3]} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>
                : null
            }
        </div >
    );
}