import React from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import axios from 'axios'
import { getAllData } from '../../actions/index'
import { getToggleStat } from '../../actions/index'
import { connect } from 'react-redux'
import { getDatas } from '../../selectors/selectors'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Toggle extends React.Component {

    componentDidMount() {
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res =>
                this.props.getAllData(res)
            )
        this.setState({ response: [] })
        this.props.getToggleStat(true)
    }

    onChanges = (check) => {
        this.props.getToggleStat(check)
        this.setState({ toggle: false })
    }

    headerStyle = () => {
        return {
            fontWeight: 'bold',
            width: 'auto',
            sticky: 'top',
            textTransform: 'capitalize'
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.state.fetch.message === 'Success' ?
                    <React.Fragment>
                        <Jumbotron>
                            <h1 style={this.headerStyle()}>Last update - {this.props.state.fetch.data.update_date_time}</h1>
                            <br></br>
                            <BootstrapSwitchButton
                                checked={true}
                                onlabel='Local'
                                onstyle="success"
                                offlabel='Global'
                                offstyle="danger"
                                size='lg'
                                style='w-25 mx-auto'
                                onChange={(checked) => this.onChanges(checked)}
                            />
                        </Jumbotron>
                    </React.Fragment>
                    : null}
            </React.Fragment>
        );
    }
}

export default connect(state => ({ state: getDatas(state) }),
    { getAllData, getToggleStat }
)(Toggle)


