import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    fontStyle = () => {
        return {
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'blue',
            fontSize: '10vm',
            fontWeight: 'bold',
        }
    }

    imgUrl = 'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/Home-01.jpg'

    backgroundStyle = () => {
        return {
            //backgroundImage: `url(${this.imgUrl})`,
            //backgroundColor: '#5A5560',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
            // position: 'relative',
            // height: '500px',
            // fontWeight: 'bold',
            //display: 'flex',
            //backgroundSize: '100% 100%'
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <h1 style={this.fontStyle()}>Coming Soon</h1>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}
