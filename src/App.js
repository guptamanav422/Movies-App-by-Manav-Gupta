import React from "react";
import Navbar from "./Navbar.jsx";
import Filter from "./Filter.jsx"

class App extends React.Component{
  
  state={
    movies:[],
    genre:[]
  }
  componentDidMount(){

    let f= async ()=>{
      let responseGenre= await fetch("./genre");
      let responseMovies= await fetch("./genre");

      let moviesJson=await responseMovies.json();
      let genreJson=await responseGenre.json();
      this.setState({
        movies:moviesJson,
        genre:genreJson
      })
    }
    f();
  }
  render=()=>{
    return(
      <>
       <Navbar />
       <div className="row">
       <Filter genreData={this.state.genre}/>
       </div>
      </>
    )
  }
}

export default App;