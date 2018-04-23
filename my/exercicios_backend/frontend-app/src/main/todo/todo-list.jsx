import React, { Component } from 'react'
import IconButton from '../../template/icon-button'

export default class TodoList extends Component{

    constructor(){
        super();
    }
    
    renderRows(){
        const list = this.props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o"
                        onClick={()=> this.props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ));
    }

    render(){
        return (
            <table className="table todo-list">
                <thead>
                    <tr>
                        <th>Lista das tarefas</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}