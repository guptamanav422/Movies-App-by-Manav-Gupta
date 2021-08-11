import React from "react";

class Child extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor was called");
    this.state={
      on:false
    };
  }

  componentDidMount(){
    console.log("component Did Mountwas called");
  }

  componentDidUpdate(){
    console.log("component Did Update was called");
  }

  componentWillUnmount(){
    console.log("component will unmount was called");
  }
  render(){
    console.log("render was called");
    return(
      <>
      <button
      onClick={()=>{
        if(this.state.on){
          this.setState({on:false});
        }
        else{
          this.setState({on:true});
        }
      }}
      >
      click me
      </button>
      {console.log("inside the render")}
      </>
    )
  }
}

export default Child;
