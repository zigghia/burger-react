import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Wrapper from "../../shared/Wrapper";
import Modal from "../../shared/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
		totalPrice: 4,
		purchasable: false,
		showModal: false
	}

	updatePurchasbleState(ingredients) {
		if (!ingredients) {
			return false;
		}
		return Object.entries(ingredients).map(el => el[1]).reduce((acc, el) => acc += el, 0) > 0;
	};

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


		this.setState((prev, current) => {
			return {
				ingredients: ingredients,
				totalPrice: newPrice,
				purchasable: this.updatePurchasbleState(ingredients)
			}
		});

	}

	showModalHandler() {
		this.setState({showModal: true})
	}

	cancelModallHandler() {
		this.setState({showModal: false});
	}

	continueOrder() {
		alert('This order is set');
	}

	render() {
		return (<Wrapper>
			<Modal show={this.state.showModal} showModal={this.cancelModallHandler.bind(this)}>
				<OrderSummary
					totalPrice = {this.state.totalPrice}
					cancel = {this.cancelModallHandler.bind(this)}
					continue = {this.continueOrder}
					ingredients = {this.state.ingredients}>
				</OrderSummary>
			</Modal>
			<Burger ingredients={this.state.ingredients}/>
			<div>
				<BuildControls
					purchasable={this.state.purchasable}
					totalPrice={this.state.totalPrice}
					ingredients={this.state.ingredients}
					onAdd={this.actionIngredient.bind(this)}
					showModal={this.showModalHandler.bind(this)}
					onRemove={(type) => this.actionIngredient(type, false)}/>
			</div>
		</Wrapper>);
	}
}

export default BurgerBuilder;
