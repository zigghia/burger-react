import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css';
const Burger = (props: Props) => {
	let ingredients = (Object.keys(props.ingredients) ?? [])
		.map(key =>
			[...Array(props.ingredients[key])].map((_, i)=> <BurgerIngredient type={key} key={key + i}></BurgerIngredient>)
		);


	if (!ingredients.flat().length) {
		ingredients = <p>Please start adding ingredients</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top"></BurgerIngredient>
			{ingredients}
			<BurgerIngredient type="bread-bottom"></BurgerIngredient>
		</div>
	);
};

export default Burger;
