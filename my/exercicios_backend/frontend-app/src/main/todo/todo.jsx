import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../../template/page-header'
import TodoForm from './todo-form'
import TodoList from './todo-list'

import GlobalConfig from '../../config';

export default class Todo extends Component{
 
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {description: '', list: []};
        this.serviceUrl = GlobalConfig.SERVICE_URL + '/todos';
        this.handleClear =  this.handleClear.bind(this);
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

    handleClear(){
        this.refresh();
        console.log('handleClear');
    }

    handleSearch(){
        this.refresh(this.state.description);
        console.log('handleSearch');
    }

    handleAdd(evt){
        const desc = this.state.description; 

        axios.post(this.serviceUrl , { description: desc })
            .then(response => this.refresh());

        console.log('handleAdd');
    }

    handleChange(evt){
        this.setState({...this.state, description: evt.target.value});
        console.log('handleChange');
    }

    handleRemove(todo){
        axios.delete(`${this.serviceUrl}/${todo._id}`)
            .then(response => this.refresh(this.state.description));
        console.log('handleRemove');    
    }

    handleMarkAsDone(todo){
        axios.put(`${this.serviceUrl}/${todo._id}`, {...todo, done: true})
            .then(response => this.refresh(this.state.description));
        console.log('handleMarkAsDone');    
    }

    handleMarkAsPending(todo){
        axios.put(`${this.serviceUrl}/${todo._id}`, {...todo, done: false})
            .then(response => this.refresh(this.state.description));
        console.log('handleMarkAsPending');    
    }

    render(){
        return(
            <div className="todo">
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}