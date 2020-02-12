import React from "react";
import SearchBar from "../searchbar/searchbar.component";
import "./homepage.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import Weather from "../weather/weather.component";
import CircularProgress from "@material-ui/core/CircularProgress";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: undefined,
			temperature: undefined,
			city: undefined,
			country: undefined,
			description: undefined,
			error: undefined,
			isWeatherHere: undefined,
			isWeatherLoading: undefined,
			img: undefined
		};
	}
	handleSearch = e => {
		const text = e.target.value;
		this.setState({
			location: text
		});
	};

	handleSubmit = async () => {
		this.setState({
			isWeatherLoading: true
		});
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=1b73da17755831de8d714bcdb8705e44`
		);
		const data = await api_call.json();
		console.log(data);
		this.setState({
			isWeatherLoading: false,
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			img: data.weather[0].icon,
			error: "",
			isWeatherHere: true
		});
	};
	render() {
		return (
			<div className="home">
				<div className="background-image">
					<SearchBar handleSearch={this.handleSearch} />
					<CustomButton handleSubmit={this.handleSubmit} />
					{this.state.isWeatherLoading ? (
						<CircularProgress className="circularProgress" />
					) : null}
					{this.state.isWeatherHere ? (
						<Weather
							temperature={this.state.temperature}
							city={this.state.city}
							country={this.state.country}
							humidity={this.setState.humidity}
							description={this.state.description}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default Home;
