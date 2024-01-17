import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Modal from "../Modal/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {

	return class extends Component {
		state = {error: null};
        a; b;


		errorConfirmed() {
			this.setState({error: null});
		}

		componentDidMount() {
			this.a = axios.interceptors.response.use(res => {
				this.setState({error: null});
				return res
			}, null);

			this.b = axios.interceptors.response.use(res => res, error => {
				console.log(error.message);
				this.setState({error: error.message});
				console.log('after', this.state)
			});
		}

		// clear interceptors for prevent using much more than it's needed for each separete component
		componentWillUnmount() {
			axios.interceptors.response.eject(this.a);
			axios.interceptors.response.eject(this.b);
		}


		render() {
			console.log(this.state);
			return (<Wrapper>
				<Modal show={this.state.error} showModal={this.errorConfirmed.bind(this)}>
					{this.state.error ? this.state.error : null}
				</Modal>
				<WrappedComponent {...this.props}></WrappedComponent>
			</Wrapper>)
		}
	};
}

export default WithErrorHandler;
