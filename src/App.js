import React, { Component } from 'react';
import ZipCode from './components/ZipCode';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  state = {
    // an object that lives within an component, responsible keeping track of changing data
    location: undefined, // initial state
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    // arrow functions allow for use of "this" keyword independently, it is bound to getWeather function.
    e.preventDefault(); 
    //prevent the default behavior the component when the submit button is clicked.
    const zipcode = e.target.elements.ZipCode.value;

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&metric=false&zipcode=${zipcode}&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`);
    // https://cors-anywhere.herokuapp.com/ <- proxy server
    // using the proxy server as medium to make a get request to the api's server, then the proxy applies ALlow-Control-Allow-Origin: * to enable cross-origin requests from anywhere.
    // async await makes api calls much easier...


    const data = await api_call.json();
    // converts response into json format.

    if (zipcode) { // if there is a zipcode entered then run the following code
      console.log(data);
      this.setState({
        location: [ 
          data.observations.location[0].city,
          ", ", // gives the city and state a space and puts a comma behind city...
          data.observations.location[0].state 
        ],
        temperature: data.observations.location[0].observation[0].temperature,
        description: data.observations.location[0].observation[0].description,
        humidity: data.observations.location[0].observation[0].humidity,
        error: ""
      }); 
    } else { // if no zipcode entered then give the error message...
      this.setState({
        location: undefined,
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        error: "Please enter a zipcode!!"
      });
    }
  }

  render() {
    return(
      <div className="container" >
        <div>
          <h1>Weather Lookup</h1>
          <fieldset>
            <ZipCode getWeather={this.getWeather} /> 
            {/* allow for access of getWeather function in zipcode.js */}
            <Weather 
              location={this.state.location}
              temperature={this.state.temperature} 
              description={this.state.description} 
              humidity={this.state.humidity} 
              error={this.state.error} 
            />
          </fieldset>
        </div>
      </div>
    );
  }
};

export default App;
