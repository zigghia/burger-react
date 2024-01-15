import React from "react";
import style from "./Layout.module.css";
import Wrapper from "../../shared/Wrapper";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
	<Wrapper>
		<SideDrawer/>
		<Toolbar/>
		<main className={style.Content}>
			{props.children}
		</main>
	</Wrapper>
);


export default layout;
