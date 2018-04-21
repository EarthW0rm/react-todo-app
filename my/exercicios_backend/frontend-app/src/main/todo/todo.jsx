import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

export default class Todo extends Component{
 
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {description: '', list: []};
    }

    handleAdd(evt){
        const desc = this.state.description; 

        axios.post(URL, { description: desc })
            .then(response => console.log(response));
    }

    handleChange(evt){
        this.setState({...this.state, description: evt.target.value});
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}