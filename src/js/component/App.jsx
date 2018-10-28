import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClickFunction(this.props.incrementValue);
	}

	render() {
		return (
			<button
				className="btn btn-info mx-3"
				type="button"
				onClick={this.handleClick}>
				+{this.props.incrementValue}
			</button>
		);
	}
}

Button.propTypes = {
	onClickFunction: PropTypes.func,
	incrementValue: PropTypes.number
};

var Result = function(props) {
	return (
		<div className="my-3">
			<h3>Total sum: {props.counter}</h3>
		</div>
	);
};

Result.propTypes = {
	counter: PropTypes.number
};

export class App extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
		this.incrementCounter = this.incrementCounter.bind(this);
		this.resetCount = this.resetCount.bind(this);
	}

	incrementCounter(incrementValue) {
		this.setState({
			counter: this.state.counter + incrementValue
		});
	}

	resetCount() {
		this.setState({
			counter: 0
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row mt-5">
					<div className="col-6 mx-auto">
						<div className="row d-flex justify-content-center">
							<Button
								incrementValue={1}
								onClickFunction={this.incrementCounter}
							/>
							<Button
								incrementValue={10}
								onClickFunction={this.incrementCounter}
							/>
							<Button
								incrementValue={100}
								onClickFunction={this.incrementCounter}
							/>
							<Button
								incrementValue={1000}
								onClickFunction={this.incrementCounter}
							/>
						</div>
						<div className="row d-flex justify-content-center">
							<Result counter={this.state.counter} />
						</div>
						<div className="row d-flex justify-content-center">
							<button
								type="button"
								className="btn btn-warning"
								onClick={this.resetCount}>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
