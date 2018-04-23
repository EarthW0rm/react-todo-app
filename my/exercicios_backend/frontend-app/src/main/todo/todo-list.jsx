import React, { Component } from 'react'

export default class TodoList extends Component{
    
    renderRows(){
        const list = this.props.list || [];
        return list.map((todo, i) => (
            <tr key={i}>
                <td>{todo.description}</td>
            </tr>
        ));
    }

    render(){
        return (
            <table className="table todo-list">
                <thead>
                    <tr>
                        <th>Lista das tarefas</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}