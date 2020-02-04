import React from "react";
import SearchBar from "../searchbar/searchbar.component";
import "./homepage.styles.css";
import CustomButton from "../custom-button/custom-button.component";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={
			location:""
		}

		
	}
	handleSearch = (e)=> {
		const text = e.target.value;
		this.setState({
			location: text
		})	
	}

	handleSubmit = () => {
		console.log(this.state.location);
		
	}
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
