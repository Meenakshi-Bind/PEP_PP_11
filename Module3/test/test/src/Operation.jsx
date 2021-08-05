let Operation = (props)=>{
    let changeOprator=(e)=>{
        if(e.target.textContent=='='){
            props.answer();
        }
        else{
            props.changeStateOP(e.target.textContent);
        }
    }
    return(
        <div className="OperationBtn">
            
        <button onClick={(e)=>{changeOprator(e)}}>+</button>
        <button onClick={(e)=>{changeOprator(e)}}>-</button>
        <button onClick={(e)=>{changeOprator(e)}}>/</button>
        <button onClick={(e)=>{changeOprator(e)}}>*</button>
        <button onClick={(e)=>{changeOprator(e)}}>=</button>

        </div>
    )

}
export default Operation;