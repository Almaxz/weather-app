import React, { Component } from 'react';

class ZipCode extends Component {
  

  render () {
    return (
      <div>
        <form onSubmit={this.props.getWeather} >
          {/* setting attribute */}
          <input 
          type="number" 
          name="ZipCode"
          maxLength="10"
          placeholder="Please enter a 5 digit zip code..." 
          style={{ width: "15em"}}
          />
          <input type="submit" name="submit" value="LookUp" />
        </form>
      </div>
    );
  }
};

export default ZipCode;