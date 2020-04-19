import React, { Component } from 'react'
import DailyData from '../DailyData'
import Toggle from '../layout/Toggle'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default class Covid extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Toggle />
                    <br />
                    <DailyData />
                </Container>
            </React.Fragment>
        )
    }
}
