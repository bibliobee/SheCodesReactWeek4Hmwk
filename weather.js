
import axios from "axios";
import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  
  function handleSubmit() {
    event.preventDefault();
  }

  function showTemperature(props) {
    const [temperature, setTemperature] = useState(null);
  }

  function setTemperature() {
    setTemperature(data.main.response.temp);
  }

function handleSubmit() {
  let apiKey= "18601cf98bfbf6390bbd245ca2f93265";
  let units="metric";
  let apiUrl= 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}&units';
  axios.get(apiURL).then(showTemperature);
}

    if (props.temperature >= 20) {
      return (
        <h4>The weather in {props.city} is {props.temp}C.</h4>
      );
    }

    <div className="Weather">
      <h1>AJAX Search Engine</h1>
      <h2>Enter your city to see the weather magic happen!</h2>
   <form onSubmit={handleSubmit}><input type="search" placeholder="enter your city" />
   <input type="submit" value="search" />
   </form>
    </div>