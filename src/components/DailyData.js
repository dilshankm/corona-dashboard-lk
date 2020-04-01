import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Cards from './Cards'

export default class DailyData extends Component {

    state = {
        daily: []
    }


    deckStyle = () => {
        return {
            marginRight: '0px',
            marginLeft: '0px'
        }
    }

    componentDidMount() {
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res =>
                this.setState({ daily: res.data })
            )
    }

    render() {
        if (this.state.daily.message === 'Success') {
            // const { local_active_cases } = this.state.daily.data;
        }
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
            <CardDeck style={this.deckStyle()}>
                {this.state.daily.message === 'Success' ?
                    <React.Fragment>
                        < Cards type={'Local New Cases'}
                            src={icons[5]}
                            value={this.state.daily.data.local_new_cases}
                            color={colours[0]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                        < Cards type={'Local Total Cases'}
                            src={icons[4]}
                            value={this.state.daily.data.local_total_cases}
                            color={colours[1]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                        < Cards type={'Local Individuals In Hospitals'}
                            src={icons[2]}
                            value={this.state.daily.data.local_total_number_of_individuals_in_hospitals}
                            color={colours[2]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                        < Cards type={'Local Deaths'}
                            src={icons[0]}
                            value={this.state.daily.data.local_deaths}
                            color={colours[3]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                        < Cards type={'Local New Deaths'}
                            src={icons[0]}
                            value={this.state.daily.data.local_new_deaths}
                            color={colours[4]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                        < Cards type={'Local Recovered'}
                            src={icons[1]}
                            value={this.state.daily.data.local_recovered}
                            color={colours[5]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                        < Cards type={'Local Active Cases'}
                            src={icons[3]}
                            value={this.state.daily.data.local_active_cases}
                            color={colours[7]}
                            updated_date={this.state.daily.data.update_date_time}></Cards>
                    </React.Fragment>
                    : null}
            </CardDeck>
        )
    }
}
