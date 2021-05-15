import React from 'react';
const Forecast = (props) =>{
    return(
        <div className="weather">
            {props.country && props.city && <p>Location:{props.city},{props.country}</p>}
            {props.temprature && <p>Temprature:{props.temprature} </p>}
            {props.humidity && <p>Humidity: {props.humidity} </p>}
            {props.pressure && <p>Pressure: {props.pressure} </p>}
            {props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt= "weather icon"/>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
}
export default Forecast;