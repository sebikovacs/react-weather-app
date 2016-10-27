import React, { Component } from "react";
import "./App.css";
import xhr from "xhr";
import WeatherByDay from "./weather-by-day";

class App extends Component {
    constructor( ) {
        super();
        this.setState( {
            location: "",
            weatherByDaysHash: {},
            list: []
        } );
    }

    fetchData = ( evt ) => {
        evt.preventDefault();
        const appId = "4db9020d123d978d307273d62f3c7723";
        const self = this;
        const location = encodeURIComponent( this.state.location );
        const url = `http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${ location }&APPID=${ appId }`;

        xhr( {
            url
        }, function( err, data ) {
            const body = JSON.parse( data.body );
            const list = body.list;
            const weatherByDaysHash = {};

            list.forEach( function( item ) {
                // combine dates into a hash
                const date = item.dt_txt.split( " " )[ 0 ];
                if ( date in weatherByDaysHash ) {
                    weatherByDaysHash[ date ].push( item );
                } else {
                    weatherByDaysHash[ date ] = [ item ];
                }
            } );

            self.setState( {
                weatherByDaysHash,
                list
            } );
        } );
    }

    changeLocation = ( evt ) => {
        this.setState( {
            location: evt.target.value
        } );
    }

    getWeatherByDays = ( ) => {
        const weatherByDays = [];
        const weatherByDaysHash = this.state.weatherByDaysHash;

        for ( const date in weatherByDaysHash ) {
            if ( weatherByDaysHash.hasOwnProperty( date ) ) {
                weatherByDays.push(
                    <WeatherByDay key={ date } date={ date } weatherByHours={ this.state.weatherByDaysHash[ date ] } />
                );
            }
        }
        return weatherByDays;
    }

    render() {
        const weatherByDays = this.getWeatherByDays();

        return (
          <div className="weather-app">
            <div className="weather-header">
              <span>Search for weather</span>
              <form onSubmit={ this.fetchData }>
                <label>
                  <input type="text" onChange={ this.changeLocation }
                         placeholder="Location, Country" value={ this.state.location } required />
                </label>
              </form>
            </div>

            {this.state.list ? (
              <div className="weather-list">
                { weatherByDays }
              </div>
            ) : null}
          </div>
        );
    }
}

export default App;
