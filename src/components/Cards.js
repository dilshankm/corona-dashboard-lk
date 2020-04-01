import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Cards extends Component {

    static propTypes = {
        prop: PropTypes
    }

    bodyStyle = () => {
        return {
            fontSize: '5rem',
            height: '8rem'
        }
    }

    titleStyle = () => {
        return {
            fontSize: '2rem',
            height: '8rem'
        }
    }

    headerStyle = () => {
        return {
            fontSize: '2rem',
            width: '15rem',
            height: '8rem',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    footerStyle = () => {
        return {
            fontSize: '2rem',
        }
    }

    imageStyle = () => {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            height: '15rem'
        }


    }

    render() {
        const cofee = <FontAwesomeIcon icon={faCoffee} />
        return (
            <Card className='text-center' bg={this.props.color} text='white' style={{ width: '15rem', height: '40rem' }}>
                <Card.Img className='image-center' variant="top" src={this.props.src} style={this.imageStyle()} />
                <Card.Header style={this.headerStyle()}>
                    <Card.Title style={this.titleStyle()}>{this.props.type}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text style={this.bodyStyle()}>{this.props.value}</Card.Text>
                </Card.Body>
                <Card.Footer style={this.footerStyle()}>
                    <small className="text-white">{this.props.updated_date}</small>
                </Card.Footer>
            </Card>
        )
    }
}
