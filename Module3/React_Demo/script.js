let names = ["penny" , "sheldon" , "leonard" , "howard" , "rajesh"];

// stateless functional component sfc
function BigHello() {
  return (
    <React.Fragment>
      {
        names.map(function(name){
        return (
        <React.Fragment>
            <Hello key={name} name={name}></Hello>
        </React.Fragment>)       
      })}
    </React.Fragment>
  );
}

function Hello(props) {
  return <h1>Hello from {props.name} !!</h1>;
}

// what to render , and where to render
ReactDOM.render(<BigHello></BigHello>, document.querySelector("#root"));


