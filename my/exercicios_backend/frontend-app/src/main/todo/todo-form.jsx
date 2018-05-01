import React, {Component} from 'react'
import Grid  from '../../template/grid'
import IconButton from '../../template/icon-button'
import { changeDescription } from './todoActions'

import { connect } from 'react-redux'
import { bindActionsCreators } from 'redux'

class TodoForm extends Component{

    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e){
        if(e.key === 'Enter')
        {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
        } else if (e.key === 'Escape'){
            this.props.handleClear()
        }
    }

    render(){
        return(
            <div role="form" className="todo__todo-form row">
                <Grid cols="12 9 10">
                    <input type="text" name="" id="description" className="form-control"
                        placeholder="Adicione uma tarefa" 
                        value={this.props.description}
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}/>
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

const mapStateToPropd = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionsCreators({changeDescription}, dispatch)

export default connect(mapStateToPropd, mapDispatchToProps)(TodoForm)