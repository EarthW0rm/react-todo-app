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
        this.serviceUrl = process.env.API_URL + '/todos';
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.refresh();
    }

    refresh(){
        axios.get(`${this.serviceUrl}?=sort=-createdAt`)
            .then(response => this.setState({...this.state, description:'', list: response.data}));
    }

    handleAdd(evt){
        const desc = this.state.description; 

        axios.post(this.serviceUrl , { description: desc })
            .then(response => this.refresh());
    }

    handleChange(evt){
        this.setState({...this.state, description: evt.target.value});
    }

    handleRemove(todo){
        axios.delete(`${this.serviceUrl}/${todo._id}`)
            .then(response => this.refresh());
    }

    handleMarkAsDone(todo){
        axios.put(`${this.serviceUrl}/${todo._id}`, {...todo, done: true})
            .then(response => this.refresh());
    }

    handleMarkAsPending(todo){
        axios.put(`${this.serviceUrl}/${todo._id}`, {...todo, done: false})
        .then(response => this.refresh());
    }

    render(){
        return(
            <div className="todo">
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}/>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}