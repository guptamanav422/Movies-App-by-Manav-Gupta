import React from "react";
import Navbar from "./Navbar.jsx";
import Filter from "./Filter.jsx"
import Search from "./Search.jsx";
import Table from "./Table.jsx"; 

class App extends React.Component{
  
  state={
    movies:[],
    genre:[],
    selectedFilter: "All Genre",
  }

  setFilter=(filter)=>{
    this.setState({selectedFilter:filter})
  }

  componentDidMount(){

    let f= async ()=>{
      let responseGenre= await fetch("./genre");
      let responseMovies= await fetch("./movies");

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
          <Filter handleFilter={this.setFilter} selectedFilter={this.state.selectedFilter} genreData={this.state.genre}/>
          <div className="col-9 p-4">
            <Search />
            <Table
            selectedFilter={this.state.selectedFilter}
             moviesData={this.state.movies}/>
          </div>
       </div>
      </>
    )
  }
}

export default App;