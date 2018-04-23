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
                    <div className="btn-group pull-right">
                        <IconButton style="success" icon="check" hide={todo.done}
                            onClick={()=> this.props.handleMarkAsDone(todo)}>
                        </IconButton>
                        <IconButton style="warning" icon="undo" hide={!todo.done}
                            onClick={()=> this.props.handleMarkAsPending(todo)}>
                        </IconButton>
                        <IconButton style="danger" icon="trash-o" hide={!todo.done}
                            onClick={()=> this.props.handleRemove(todo)}>
                        </IconButton>
                    </div>
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
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}