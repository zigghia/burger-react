import React from "react";
import classes from './BurgerIngredient.module.css';
import PropTypes from "prop-types";

const burgerIngredient = (props) => {
	let ingredient = null;


	if (props.type === 'bread-top'){
		return (
			<div className={classes.BreadTop}>
				<div className={classes.Seeds1}></div>
				<div className={classes.Seeds2}></div>
			</div>
		);
	}

	let options = {
		'bread-bottom': 'BreadBottom',
		'meat': 'Meat',
		'bacon': 'Bacon',
		'cheese': 'Cheese',
		'salad': 'Salad'
	}

	let type = Object.keys(options).find(key => key === props.type);

	if (type) {
		ingredient = <div className={classes[options[type]]}></div>;
	}

	return  ingredient;

};

burgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default burgerIngredient;
