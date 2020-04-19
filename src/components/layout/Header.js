import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { slide as Menu } from 'react-burger-menu'

export default class Header extends Component {

    headerStyle = () => {
        return {
            fontSize: '3.5vmin',
            backgroundColor: '#FAED26',
        }
    }

    navBarStyle = () => {
        return {
            backgroundColor: '#FAED26',
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

    showSettings = (event) => {
        event.preventDefault()
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
