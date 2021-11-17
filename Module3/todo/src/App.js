import React, { Component } from 'react';
 
import InputBox from "./Component/InputBox/InputBox";
import TodosList from "./Component/TodosList/TodosList";

class App extends Component {
  state={
    todos:[{id:"1" , todo:"learn jsx"},
    {id:"2" , todo:"learn json"},
    {id:"3" , todo:"learn java"},
    {id:"4" , todo:"learn javascript"},
    {id:"5" , todo:"learn link"}
             ],
  };
deleteTodo=(id)=>{
     let updatedTodos=this.state.todos.filter(function(todoObj){
             if(todoObj.id==id)
             {
               return false;
             }
             return true;
     })
     this.setState({
       todos:updatedTodos
     })
}
todoUpdate=(text)=>{
  console.log(text);
  
}

  render() { 
    let todos=this.state.todos;
    let deleteTodo=this.deleteTodo;
    return (
      <div className="App">
        <InputBox todoUpdate={this.todoUpdate}></InputBox>
        <TodosList todos={todos}  deleteTodo={deleteTodo}></TodosList>
      </div>
    );
  }
}
 
export default App;



