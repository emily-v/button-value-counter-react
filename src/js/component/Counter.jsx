import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    
    addIncrement(props){
        this.setState({
            count: this.state.count + this.props.value
        });
    }
 
    render(){
        console.log(this.state);
        //let incrementValue = this.props.value;
        //if (this.state.clickedButton == 'one') incrementValue = 1;
        return <div>
            <div id="buttonsContainer">
                <button value={5} onClick={() => {this.addIncrement();}}>5</button>
                <button>10</button>
                <button>100</button>
                <button>1000</button>
                {/*<button onClick={() => this.setState({ clickedButton: 'one'})}>1</button>
                <button onClick={() => this.setState({ clickedButton: 'ten'})}>10</button>
                <button onClick={() => this.setState({ clickedButton: 'hundred'})}>100</button>
                <button onClick={() => this.setState({ clickedButton: 'thousand'})}>1000</button>*/}
            </div>
            <div id="total">{this.state.count}</div>
        </div>;
    }   
}

Counter.propTypes = {
    value : PropTypes.number
};


/*class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = props => {
    return (
        <div>
            {props.counter}
        </div>
    );
};

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = incrementValue => {
        this.setState(prevstate => ({
            counter: prevstate.counter + incrementValue
        }));
    };

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

Button.propTypes = {
        onClickFunction: PropTypes.number,
        incrementValue: PropTypes.number,
        counter: PropTypes.number
};

App.propTypes = {
    onClickFunction: PropTypes.number,
    incrementValue: PropTypes.number,
    counter: PropTypes.number
};

export default App;*/