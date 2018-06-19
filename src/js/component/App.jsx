import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }   
   
    handleClick () {
        this.props.onClickFunction(this.props.incrementValue);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

Button.propTypes = {
    onClickFunction: PropTypes.func,
    incrementValue: PropTypes.number
};

var Result = function (props){
    return (
        <div>
            {props.counter}
        </div>
    );
};

Result.propTypes = {
    counter: PropTypes.number
};

export class App extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0 
        };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter (incrementValue) {
        this.setState( {
            counter: this.state.counter + incrementValue
        });
    }

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={(incrementValue) => this.incrementCounter(incrementValue)} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}
