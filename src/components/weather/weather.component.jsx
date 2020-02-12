import React from "react";

import "./weather.styles.css";

const Weather = props => {
	const { temperature, city, country, humidity, description, img } = props;

	return (
		<div>
			<h1>City: {city} </h1>
			<p>Country: {country}</p>
			<h3>{description} </h3>
			<div> {<span>{temperature} &deg;</span>}F</div>
			<h3>{humidity}</h3>
		</div>
	);
};

export default Weather;
