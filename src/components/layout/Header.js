import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends Component {

    headerStyle = () => {
        return {
            fontSize: '2rem',
            height: '4rem'
        }
    }

    navBarStyle = () => {
        return {
            backgroundColor: 'navy',
            fontSize: '2rem',
            fontWeight: 'bold'
        }
    }


    render() {
        return (
            <div>
                <Navbar style={this.navBarStyle()} variant="dark">
                    <Navbar.Brand style={this.headerStyle()}>
                        <img
                            alt=""
                            src="https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/logo.svg"
                            width="50"
                            height="50"
                            className="d-inline-block align-center"
                        />{' '}
      COVID 2019 Sri Lanka Dashbaord
    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
