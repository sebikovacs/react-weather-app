import React from "react";
import moment from "moment";
import "./weather-by-hour.css";

const WeatherByHour = ( { date, temp, description, icon } ) => {
    const imgUrl = `http://openweathermap.org/img/w/${ icon }.png`;
    const time = moment( date ).format( "HH:mm" );
    const hour = parseInt( moment( date ).format( "H" ), 10 );
    const dawn = 6;
    const dusk = 18;
    const temperature = parseInt( temp, 10 );

    return (
        <div className={ ( hour <= dawn || hour >= dusk ) ?
             "weather-by-hour weather-by-night" : "weather-by-hour" }>
            <div className="weather-temperature">
                { temperature }℃
            </div>
            <div className="weather-icon">
                <img src={ imgUrl } alt=""/>
            </div>
            <div className="weather-time">
                { time }
            </div>
            <div className="weather-description">
                { description }
            </div>
        </div>
    );
};

export default WeatherByHour;
