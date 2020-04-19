import React, { Component, Fragment } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Cards from './Cards'
import { connect } from "react-redux"
import { getDatas } from '../selectors/selectors'
import { getToggleStates } from '../selectors/selectors'
import LocalCases from './layout/LocalCases'
import axios from 'axios'
import { getAllData } from '../actions/index'
import GlobalCases from './layout/GlobalCases'


class DailyData extends Component {

    componentDidMount() {
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res =>
                this.props.getAllData(res)
            )
        this.setState({ response: [] })
    }

    render() {
        const colours = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ]

        const icons = [
            'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/virus.svg',
            'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/recovered.svg',
            'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/hospital.svg',
            'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/active.svg',
            'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/total.svg',
            'https://covid-dashboard-sl.s3.ap-south-1.amazonaws.com/new.svg'
        ]

        return (
            <React.Fragment>
                <LocalCases />
                <br />
                <br />
                <br />
                <GlobalCases />
            </React.Fragment >
        )
    }
}

export default connect(state => ({ state: getDatas(state) }),
    { getAllData }
)(DailyData)