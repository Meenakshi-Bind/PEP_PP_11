import React, { Component } from 'react';
import TodosList from '../TodosList/TodosList';

class InputBox extends Component {
    state={
        todoValue:""
    };
  
    render() { 
        // let todos=this.props.todos;
        let todoUpdate=this.props.todoUpdate;
        let todoValue=this.state.todoValue;
        return (
            <div className="todo input-group mt-4">
                    <input className="form-control" value={todoValue} placeholder="type your todo here..." type="text" ></input>
                    <button className="btn btn-warning" onClick={(e)=>todoUpdate()}>ADD</button>
            </div>
        
        )
    }
}
 
export default InputBox;