import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import * as weatherActions from './modules/weather';

class App extends Component {
    componentDidMount() {
        const {
            WeatherActions
        } = this.props;
        
        WeatherActions.getWeather();
    }

    render() {
        const {
            weather
        } = this.props;
        
        return (
            <div className={"container"}>
                {weather.pending &&
                    <span className={"loading"}>
                        Loading...
                    </span>
                }
                {weather.data !== null &&
                <div className={"main"}>
                    <div className={"place"}>
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>State</th>
                                <th>Country</th>
                            </tr>
                            </thead>
                            <tbody>
                            {weather.data.response.place &&
                            <tr>
                                <td>{weather.data.response.place.name}</td>
                                <td>{weather.data.response.place.state}</td>
                                <td>{weather.data.response.place.country}</td>
                            </tr>
                            }
                            {!weather.data.response.place &&
                            <tr>
                                <td colSpan={3}>
                                    Empty Place.
                                </td>
                            </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className={"temperature"}>
                        <table>
                            <thead>
                            <tr>
                                <th>Date Time</th>
                                <th>TempC</th>
                                <th>TempF</th>
                                <th>DewpointC</th>
                                <th>DewpointF</th>
                                <th>Humidity</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        weather: state.weather
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        WeatherActions: bindActionCreators(weatherActions, dispatch)
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;