import * as React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";
import Wrapper from "../../../shared/Wrapper";

const controls = [
	{label: 'Salad', type: 'salad'},
	{label: 'Meat', type: 'meat'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Pickles', type: 'pickles'},
];
const buildControls = (props: Props) => {

	return (
		<Wrapper>
			<div className={classes.BuildControls}>
				<p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
				{
					controls.map(el =>
						<BuildControl
							key={el.type}
							label={el.label}
							data={props.ingredients[el.type]}
							add={() => props.onAdd(el.type)}
							remove={() => props.onRemove(el.type, false)}
						>
						</BuildControl>
					)
				}
				<button className={classes.OrderButton}
						onClick={props.showModal}
						disabled={!props.purchasable}>Order now</button>
			</div>
		</Wrapper>
	)
}
export default buildControls;
