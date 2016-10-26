import React from 'react';
import moment from 'moment';
import './weather-item.css';

class WetherItem extends React.Component {
  render () {
    return (
      <div className="weather-item">
        <span className="weather-date">{moment(this.props.item.dt_txt).format('DD MMMM, YYYY')}</span>
        <span className="weather-description">{this.props.item.weather[0].description}</span>
        <span className="weather-icon">
          <img src={'http://openweathermap.org/img/w/' + this.props.item.weather[0].icon + '.png'} alt=""/>
        </span>
      </div>
    );
  }
}

export default WetherItem;
