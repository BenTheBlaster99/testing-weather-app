import React from 'react';
import { useContext } from 'react';
import { Context } from '../COntext/Context';
import WeatherData from './WeatherData';
function Weather(props) {
    let { weather, setWeather, position, setPosition , getWeatherData} = useContext(Context);
    let cities = [
        {
            city: "Algeries",
            lat: 36.7323,
            long: 3.0875,
        },
        {
            city: "Oran",
            lat: 35.69,
            long: -0.6339,
        },
        {
            city: "Bejaia",
            lat: 36.750,
            long:5.05 ,
        },
    ]
    return (
        <div>
            <select onChange={(event) =>changePosition}>
                {cities.map(({city, lat , long},index) => (
                    <option key={city} value={lat + ',' + long} > {city}</option>
                ))}
            </select>
            <input type="button" value="SEARCH" onClick={() => getWeatherData()} />
            <WeatherData/>
        </div>
    );
}

export default Weather;