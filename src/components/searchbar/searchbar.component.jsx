import React from "react";

import "./searchbar.styles.css";

export const SearchBar = (props) => (
<
 input type="text" 
 className="search"
 onChange={props.handleSearch} />);

export default SearchBar;
