import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    const temps = [];
    const pressures = [];
    const humidities = [];
    cityData.list.forEach((weather) => {
      temps.push(weather.main.temp);
      pressures.push(weather.main.pressure);
      humidities.push(weather.main.humidity);
    });
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td> <Chart data={temps} colour="orange" units="C" /> </td>
        <td> <Chart data={pressures} colour="green" units="hPa" /> </td>
        <td> <Chart data={humidities} colour="black" units="%" /> </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CITY</th>
            <th>TEMPERATURE (C)</th>
            <th>PRESSURE (hPa)</th>
            <th>HUMIDITY (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { // pull weather off state
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

