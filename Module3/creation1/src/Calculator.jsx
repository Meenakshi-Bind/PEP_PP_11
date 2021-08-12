import React from 'react';
class Calculator extends React.Component {
    state = {  
       
        Display:[],
        value:[],
        Operator:[],
        
    }
    

    handleNumber = async (e) =>{

    this.state.value.push(e.target.textContent);
    await this.setState({Display:this.state.Display=this.state.value});
    // console.log(this.state.Display);

    } 


   handleOp = async (e) => {
    
    this.state.value.push(e.target.textContent);
    await this.setState({Display:this.state.Display=this.state.value});
    this.state.Operator.push(e.target.textContent);
    // console.log(this.state.Operator);

   } 

   answer = async(e) =>{
    
    let dig="";
    for(let i=0;i<this.state.value.length;i++)
    {
        dig=dig+this.state.value[i];
    }
    // console.log(dig);
    let calculation=this.state.Operator[0];
    let finalAnswer;
    let splited=dig.split(calculation);
    // console.log(splited);
    if(calculation==="/")
    {
        finalAnswer=splited[0]/splited[1];
    }
    else if(calculation==="*")
    {
        finalAnswer=splited[0]*splited[1];
    }
    else if(calculation==="+")
    {
        finalAnswer=parseInt(splited[0])+parseInt(splited[1]);
    }
    else if(calculation==="-")
    {
        finalAnswer=splited[0]-splited[1];
    }
    await this.setState({Display:this.state.value=finalAnswer});
    await this.setState({value:this.state.value=[],Operator:this.state.Operator=[],exp:this.state.exp=0});
   
}

  enable =async (e) =>{

    await this.setState({value:this.state.value=[],Operator:this.state.Operator=[],exp:this.state.exp=0,Display:this.state.Display=[]});
  
}
    
render() { 
        return ( 
        <div className = "number"> 
            <p>{this.state.Display}</p>
            <button  onClick={(e) => {this.handleNumber(e)}} >0</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>1</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>2</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>3</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>4</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>5</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>6</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>7</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>8</button>
            <button  onClick={(e) => {this.handleNumber(e)}}>9</button>
            
           
            <button  onClick = {(e) => {this.handleOp(e)}}>+</button>
            <button  onClick = {(e) => {this.handleOp(e)}}>-</button>
            <button  onClick = {(e) => {this.handleOp(e)}}>/</button>
            <button  onClick = {(e) => {this.handleOp(e)}}>*</button>
            <button  onClick = {(e) => {this.answer(e)}}>=</button>
            <button id="clear" onClick = {(e) => {this.enable(e)}}>CLEAR</button>
        </div>
        );
    }
}
 
export default Calculator;