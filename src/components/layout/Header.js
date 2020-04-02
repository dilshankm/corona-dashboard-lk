import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default class Header extends Component {

    headerStyle = () => {
        return {
            fontSize: '3.5vmin'
        }
    }

    navBarStyle = () => {
        return {
            backgroundColor: 'navy',
            fontWeight: 'bold',
            width: 'auto',
            sticky: 'top'
        }
    }

    conStyle = () => {
        return {
            width: 'auto'
        }
    }


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" style={this.navBarStyle()} variant="dark">
                <Navbar.Brand style={this.headerStyle()}>COVID 2019 Sri Lanka Dashbaord </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            </Navbar>
        )
    }
}
