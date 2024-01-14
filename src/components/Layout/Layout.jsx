import React from "react";
import style from "./Layout.module.css";
import Wrapper from "../../shared/Wrapper";

const layout = (props) => (
	<Wrapper>
		<div>Toolbar, side, backdrop</div>
		<main className={style.Content}>
			{props.children}
		</main>
	</Wrapper>
);


export default layout;
