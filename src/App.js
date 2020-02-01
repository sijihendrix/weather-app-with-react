import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/homepage/homepage.component";
import Background from "./assets/background1.jpg";
class App extends React.Component {
	render() {
		return (
			<div
				className="App"
				style={{
					backgroundImage: `url(${Background})`
				}}
			>
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;
