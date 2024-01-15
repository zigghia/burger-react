import React from "react";
import classes from './NavigationItems.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
	<ul className={classes.NavigationsItems}>
       <NavigationItem href='/' active>Burger Builder</NavigationItem>
       <NavigationItem href='/'>Checkout</NavigationItem>
	</ul>
);

export default NavigationItems;
