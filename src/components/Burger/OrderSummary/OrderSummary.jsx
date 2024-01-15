import React from "react";
import Wrapper from "../../../shared/Wrapper";
import Button from "../../Button/Button";

const OrderSummary = (props) => {
	const summary = Object.keys(props.ingredients)
		.map(i => props.ingredients[i] ?
			<li key={i}><span style={{textTransform: 'capitalize'}}>{i}</span>: {props.ingredients[i]}</li>
			: null);
	return (
		<Wrapper>
			<h3>Your order</h3>
			<ul>{summary}</ul>
			<p><b>Total price</b>: {props.totalPrice.toFixed(2)}</p>
			<p>Continue to checkout?</p>
			<Button btnType="Success" clicked={props.cancel}>CANCEL</Button>
			<Button btnType="Danger" clicked={props.continue}>CONTINUE</Button>
		</Wrapper>
	);
}

export default OrderSummary;
