import Child from "./Child";
import React from "react";

class LifeCycle extends React.Component{
  state={
    child:true
  }
  render=()=>{
    return(
      <>
      <button
      onClick={()=>{
        if(this.state.child){
          this.setState({child:false});
        }
        else{
          this.setState({child:true});
        }
      }}
      >
      child toggle
      </button>
      {this.state.child?<Child />:""}
      </>
    )
  }
}

export default LifeCycle;