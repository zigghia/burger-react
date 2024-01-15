import React from "react";
import classes from './Modal.module.css';
import Wrapper from "../Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
	return (
		<Wrapper>
			<Backdrop show={props.show} clicked = {props.showModal}></Backdrop>
			<div
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}
				className={classes.Modal}>
				{props.children}
			</div>
		</Wrapper>
	);
}

export default Modal;
