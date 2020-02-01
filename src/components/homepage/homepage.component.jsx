import React from "react";
import SearchBar from "../searchbar/searchbar.component";
import "./homepage.styles.css";
import CustomButton from "../custom-button/custom-button.component";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="background-image">
					<SearchBar />
					<CustomButton />
				</div>
			</div>
		);
	}
}

export default Home;
