import React from "react";
import SearchBar from "../searchbar/searchbar.component";
import "./homepage.styles.css";
import CustomButton from "../custom-button/custom-button.component";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: undefined,
			temperature: undefined,
			city: undefined,
			country: undefined,
			description: undefined,
			error: undefined
		};
	}
	handleSearch = e => {
		const text = e.target.value;
		this.setState({
			location: text
		});
	};

	handleSubmit = async () => {
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=1b73da17755831de8d714bcdb8705e44`
		);
		const data = await api_call.json();
		console.log(data);
		this.setState({
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: ""
		});
	};
	render() {
		return (
			<div className="home">
				<div className="background-image">
					<SearchBar handleSearch={this.handleSearch} />
					<CustomButton handleSubmit={this.handleSubmit} />
				</div>
			</div>
		);
	}
}

export default Home;
