import React from "react";
import lg from '../../assets/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
	return (
		<div className={classes.Logo}><img src={lg} alt ='Burger logo'/></div>
	);
}

export default Logo;
