import React, { Component } from "react";
import Wrapper from "../../../shared/Wrapper";
import Button from "../../Button/Button";

class OrderSummary extends Component {

	componentDidUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any) {
		console.log('summary will update');
	}

	summary = Object.keys(this.props.ingredients)
		.map(i => this.props.ingredients[i] ?
			<li key={i}><span style={{textTransform: 'capitalize'}}>{i}</span>: {this.props.ingredients[i]}</li>
			: null);

	render() {
		return (
			<Wrapper>
				<h3>Your order</h3>
				<ul>{this.summary}</ul>
				<p><b>Total price</b>: {this.props.totalPrice.toFixed(2)}</p>
				<p>Continue to checkout?</p>
				<Button btnType="Success" clicked={this.props.cancel}>CANCEL</Button>
				<Button btnType="Danger" clicked={this.props.continue}>CONTINUE</Button>
			</Wrapper>
		);
	}
}

export default OrderSummary;
