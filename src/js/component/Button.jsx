import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component{
 
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
 
    render(props){
        console.log(this.state);
        //let incrementValue = this.props.value;
        //if (this.state.clickedButton == 'one') incrementValue = 1;
        return <div>
            <div id="buttonsContainer">
                <button onClick={() => {this.addIncrement();}}>{this.props.value}</button>
            </div>
            {/*<div id="total">{this.state.count}</div>*/}
        </div>;
    }   
}

Button.propTypes = {
    value : PropTypes.number
};

/*function Result (props){
    return <div id="total">
        the total is {props.count}
    </div>;
}

Result.propTypes = {
    count: PropTypes.number
};*/