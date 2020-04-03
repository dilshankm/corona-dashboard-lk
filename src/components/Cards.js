import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default class Cards extends Component {

    static propTypes = {
        prop: PropTypes
    }

    numberCountStyle = () => {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '7vmin',
            fontWeight: 'bold'
        }
    }

    textStyle = () => {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3.5vmin',
            fontWeight: 'bold',
        }
    }

    datetimeStyle = () => {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2vmin',
            fontWeight: 'bold'
        }
    }

    imageStyle = () => {
        return {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            marginBottom: '20px',
            width: '50%'
        }
    }

    render() {
        return (
            <Card className='text-center' bg={this.props.color} text='white'>
                <Container>
                    <Card.Img style={this.imageStyle()} className='image-center' variant="top" src={this.props.src} />
                </Container>
                <Card.Header>
                    <Card.Title style={this.textStyle()}>{this.props.type}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text style={this.numberCountStyle()}>{this.props.value}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-white" style={this.datetimeStyle()}>{this.props.updated_date}</small>
                </Card.Footer>
            </Card>
        )
    }
}
