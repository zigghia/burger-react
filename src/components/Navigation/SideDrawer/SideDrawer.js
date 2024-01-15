import React from "react";
import classes from './SideDrawer.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Wrapper from "../../../shared/Wrapper";
import Backdrop from "../../../shared/Backdrop/Backdrop";

const SideDrawer = (props) => {
	let attClasses = [classes.SideDrawer, classes.Close];
	if (props.show) {
		attClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Wrapper>
			<Backdrop show={props.show} clicked={props.closed}></Backdrop>

			<div className={attClasses.join(' ')}>
				<div className={classes.Logo}><Logo/></div>
				<nav>
					<NavigationItems></NavigationItems>
				</nav>
			</div>
		</Wrapper>
	);
}

export default SideDrawer;
