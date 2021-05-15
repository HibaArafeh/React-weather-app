import React from "react";
import Heading from './Heading';
import Form from './Form';
import './App.css';
import Forecast from "./Forecast";
const api_key = "8f73b4ef87af1a00fa7228cd0f6441c7";
class App extends React.Component {
  state = {
   
    city: "",
    country: "",
    temprature: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }
  getWeather = async(e) => {
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
   e.preventDefault();
   const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`);
  
  const response = await api_call.json();
  if (city && country){
    this.setState({
    temprature: response.main.temp,
    city: response.name,
    country: response.sys.country,
    humidity: response.main.humidity,
    pressure: response.main.pressure,
    icon: response.weather[0].icon,
    description: response.weather[0].description,
    error: ""
  })
  }else{
    this.setState({
      error:"Please fill out input fields..."
    })
  }
}
render() {
  return(
  <div className="container">
  <Heading />
  <div className="form">
   <Form loadWeather={this.getWeather} />    
   </div>
   <div className="weather">
   <Forecast
    temprature={this.state.temprature} 
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    pressure={this.state.pressure}
    icon={this.state.icon}
    description={this.state.description}
    error={this.state.error}
    />
    </div>
   </div>  );
   }
  }
export default App;