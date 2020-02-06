import React from "react";

import "./searchbar.styles.css";

const SearchBar = props => {
	const { handleSearch } = props;

	return <input type="text" className="search" onChange={handleSearch} />;
};

export default SearchBar;
