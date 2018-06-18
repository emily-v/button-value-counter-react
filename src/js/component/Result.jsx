import React from 'react';
import PropTypes from 'prop-types';


export default class Result extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    
    render(){
        return <div>
            <div id="total">{this.state.count}</div>
        </div>;
    }
}