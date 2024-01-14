import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Wrapper from "../../shared/Wrapper";

const INGREDIENT_PRICES = {
	bacon: 1,
	cheese: 0.4,
	meat: 1.3,
	salad: 0.3
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	addIngredient(type: string) {
	}

	actionIngredient(type: string, isAdd = true) {
		const ingredients = {...this.state.ingredients};

		if (!isAdd && !ingredients[type]) {
			return;
		}

		let newPrice = this.state.totalPrice;
		const cost = INGREDIENT_PRICES[type];

		if (isAdd) {
			ingredients[type]++;
			newPrice = this.state.totalPrice + cost;
		} else {
			ingredients[type]--;
			newPrice = this.state.totalPrice - cost;
		}

		this.setState({ingredients: ingredients, totalPrice: newPrice});

	}
	render() {
		return (<Wrapper>
			<Burger ingredients={this.state.ingredients}/>
			<div>
				<BuildControls
					totalPrice = {this.state.totalPrice}
					ingredients = {this.state.ingredients}
					onAdd={this.actionIngredient.bind(this)}
					onRemove={(type) => this.actionIngredient(type, false)}/>
			</div>
		</Wrapper>);
	}
}

export default BurgerBuilder;
