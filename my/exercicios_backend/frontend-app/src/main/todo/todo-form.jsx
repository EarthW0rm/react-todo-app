import React, {Component} from 'react'
import Grid  from '../../template/grid'
import IconButton from '../../template/icon-button'

export default class TodoForm extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div role="form" className="todo__todo-form row">
                <Grid cols="12 9 10">
                    <input type="text" name="" id="description" className="form-control"
                        placeholder="Adicione uma tarefa" 
                        value={this.props.description}
                        onChange={this.props.handleChange}/>
                </Grid>

                <Grid  cols="12 3 2">
                    <div className="btn-group">
                        <IconButton style="primary" icon="plus" onClick={this.props.handleAdd}/>
                        <IconButton style="info" icon="search" onClick={this.props.handleSearch}/>
                        <IconButton style="default" icon="close" onClick={this.props.handleClear}/>
                    </div>
                </Grid>
            </div>
        )
    }
}