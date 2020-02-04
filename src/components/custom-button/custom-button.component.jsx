import React from "react";

import "./custom-button.styles.css";

const CustomButton = (props) => (
<button onClick={props.handleSubmit} >Press Me</button>
);

export default CustomButton;
