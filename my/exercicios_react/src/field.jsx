import React, { Component } from 'react';

export default class Field extends Component {

    constructor(props){
        super(props);
        this.state = { value: props.initialValue };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ ...this.state, value: event.target.value });
    }

    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}