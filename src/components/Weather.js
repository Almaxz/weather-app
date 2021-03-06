import React, { Component } from 'react';

class Weather extends Component {
	render() {
		return (
			<div>
				{ this.props.location && <p>Location: {this.props.location}</p> }
				{ this.props.temperature && <p>Temperature: {this.props.temperature} ℉</p> }
				{ this.props.description && <p>Description: {this.props.description}</p> }
				{ this.props.humidity && <p>Humidity: {this.props.humidity}%</p> }
				{ this.props.error && <p>{this.props.error}</p> }
			</div>
		);
	}
};

export default Weather;