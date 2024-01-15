import React, { Component } from "react";
import style from "./Layout.module.css";
import Wrapper from "../../shared/Wrapper";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {

	state = {
		showSideDrawer: false
	}
	sideDrawerclosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState(() => ({showSideDrawer: !this.state.showSideDrawer}));
	}

	render() {
		return <Wrapper>
			<SideDrawer
				show = {this.state.showSideDrawer}
				closed={this.sideDrawerclosedHandler}/>

			<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>

			<main className={style.Content}>
				{this.props.children}
			</main>
		</Wrapper>
	}
}


export default Layout;
