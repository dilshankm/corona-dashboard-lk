import React, { Component, Fragment } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Cards from './Cards'
import { connect } from "react-redux"
import { getDatas } from '../selectors/selectors'
import { getToggleStates } from '../selectors/selectors'


class DailyData extends Component {

    deckStyle = () => {
        return {
            marginRight: '0px',
            marginLeft: '0px'
        }
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
            < CardDeck style={this.deckStyle()} >
                {this.props.state.toggle && this.props.state.fetch.message === 'Success' ?
                    < React.Fragment >
                        < Cards type={'Local New Cases'}
                            src={icons[5]}
                            value={this.props.state.fetch.data.local_new_cases}
                            color={colours[0]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        < Cards type={'Local Total Cases'}
                            src={icons[4]}
                            value={this.props.state.fetch.data.local_total_cases}
                            color={colours[1]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        < Cards type={'Locals In Hospitals'}
                            src={icons[2]}
                            value={this.props.state.fetch.data.local_total_number_of_individuals_in_hospitals}
                            color={colours[2]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        < Cards type={'Local All Deaths'}
                            src={icons[0]}
                            value={this.props.state.fetch.data.local_deaths}
                            color={colours[3]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        < Cards type={'Local New Deaths'}
                            src={icons[0]}
                            value={this.props.state.fetch.data.local_new_deaths}
                            color={colours[4]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        < Cards type={'Local Recovered'}
                            src={icons[1]}
                            value={this.props.state.fetch.data.local_recovered}
                            color={colours[5]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        < Cards type={'Local Active Cases'}
                            src={icons[3]}
                            value={this.props.state.fetch.data.local_active_cases}
                            color={colours[7]}
                            updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                    </React.Fragment>
                    : this.props.state.fetch.message === 'Success' && !this.props.state.toggle ?
                        < React.Fragment >
                            < Cards type={'Global New Cases'}
                                src={icons[5]}
                                value={this.props.state.fetch.data.global_new_cases}
                                color={colours[0]}
                                updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                            < Cards type={'Global Total Cases'}
                                src={icons[4]}
                                value={this.props.state.fetch.data.global_total_cases}
                                color={colours[1]}
                                updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                            < Cards type={'Gloabl Deaths'}
                                src={icons[0]}
                                value={this.props.state.fetch.data.global_new_deaths}
                                color={colours[2]}
                                updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                            < Cards type={'Gloabl New Deaths'}
                                src={icons[0]}
                                value={this.props.state.fetch.data.global_new_deaths}
                                color={colours[3]}
                                updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                            < Cards type={'Gloabl Recovered'}
                                src={icons[5]}
                                value={this.props.state.fetch.data.global_recovered}
                                color={colours[4]}
                                updated_date={this.props.state.fetch.data.update_date_time}></Cards>
                        </React.Fragment> : null
                }
            </CardDeck >
        )
    }
}
export default connect(state => ({ state: getDatas(state) }),
    toggle => ({ toggle: getToggleStates(toggle) })
)(DailyData);