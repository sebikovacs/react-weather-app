import React from "react";
import moment from "moment";
import WeatherByHour from "./weather-by-hour";
import "./weather-by-day.css";

const WetherByDay = ( { date, weatherByHours } ) => {
    const weatherByHoursArr = [];

    weatherByHours.forEach( ( weatherByHour ) => {
        weatherByHoursArr.push(
            <WeatherByHour
                key={ weatherByHour.dt }
                icon={ weatherByHour.weather[ 0 ].icon }
                temp={ weatherByHour.main.temp }
                description={ weatherByHour.weather[ 0 ].description }
                date={ weatherByHour.dt_txt } />
        );
    } );

    return (
        <div className="weather-by-day">
            <div className="weather-date">
                <span className="weather-date-weekday">
                    { moment( date ).format( "dddd" ) }
                </span>
                <span className="weather-date-day">
                    { moment( date ).format( "DD" ) }
                </span>
                <span className="weather-date-month">
                    { moment( date ).format( "MMMM" ) }
                </span>
                <span className="weather-date-year">
                    { moment( date ).format( "YYYY" ) }
                </span>
            </div>

            <div className="weather-by-hours">
                { weatherByHoursArr }
            </div>
        </div>
    );
};

export default WetherByDay;
