import React from "react"
import Input from "./Input.jsx"
import Operation from "./Operation"
class App extends React.Component {
  state = {
     Value1:0,
     Value2:0,
     CurrentOptn:'',
     Display:0,
  };
  inputV1=async (value)=>{
    await this.setState({ Value1:value, Display:value});
    console.log(this.state.Value1);
  }
  inputV2=async (value)=>{
    await this.setState({Value2:value, Display:this.state. Value1+this.state.CurrentOptn+value});
    console.log(this.state.Value2);
  }
  
  changeOptr=async (optr)=>{
    await this.setState({CurrentOptn:optr, Display:this.state. Value1+optr});
    
  }
  answer=()=>{
    if(this.state.CurrentOptn=='+'){
      this.setState({ Display:parseInt(this.state. Value1)+parseInt(this.state.Value2)});
    }
    else if(this.state.CurrentOptn=='-'){
      
      this.setState({ Display:this.state. Value1-this.state.Value2});
    }
    else if(this.state.CurrentOptn=='*'){
      this.setState({ Display:this.state. Value1*this.state.Value2});
      
    }
    else if(this.state.CurrentOptn=='/'){
      this.setState({ Display:this.state. Value1/this.state.Value2});

    }
    this.setState({ Value1:0,Value2:0,CurrentOptn:''});
  }
  render = () => {
    return(
      <div className="Calculator">
         <div className="Output-screen">
            <p>{this.state. Display}</p>
        </div>
        <Operation  answer={this.answer} changeStateOP={this.changeOptr}/>
        <Input v1change= {this.inputV1} v2change= {this.inputV2} val1={this.state.Value1} val2={this.state.Value2} op={this.state.CurrentOptn} />

      </div>


    )
  };
}

export default App;