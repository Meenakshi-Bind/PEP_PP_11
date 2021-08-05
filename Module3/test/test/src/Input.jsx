let Input = (props) => {
    let clickFun=(e) => {
        if(props.op===''){

            props.v1change(e.target.textContent)
        }
        else{
            props.v2change(e.target.textContent)
        }
        }
    return (
        <div className="input-btn">

            <button onClick={(e)=>{clickFun(e)}}>1</button>
            <button onClick={(e)=>{clickFun(e)}}>2</button>
            <button onClick={(e)=>{clickFun(e)}}>3</button>
            <button onClick={(e)=>{clickFun(e)}}>4</button>
            <button onClick={(e)=>{clickFun(e)}}>5</button>
            <button onClick={(e)=>{clickFun(e)}}>6</button>
            <button onClick={(e)=>{clickFun(e)}}>7</button>
            <button onClick={(e)=>{clickFun(e)}}>8</button>
            <button onClick={(e)=>{clickFun(e)}}>9</button>
            <button onClick={(e)=>{clickFun(e)}}>0</button>
        </div>
    )

}
export default Input;