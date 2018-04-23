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
        this.handleSearch = this.handleSearch.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.refresh();
    }

    refresh(desc = ''){
        const search = desc ? `&description__regex=/${desc}/` : '';
        axios.get(`${this.serviceUrl}?=sort=-createdAt${search}`)
            .then(response => this.setState({...this.state, description: desc, list: response.data}));
    }

    handleSearch(evt){
        this.refresh(this.state.description);
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
            .then(response => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo){
        axios.put(`${this.serviceUrl}/${todo._id}`, {...todo, done: true})
            .then(response => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo){
        axios.put(`${this.serviceUrl}/${todo._id}`, {...todo, done: false})
        .then(response => this.refresh(this.state.description));
    }

    render(){
        return(
            <div className="todo">
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}/>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}