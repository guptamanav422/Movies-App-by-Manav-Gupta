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
    search:"",
  }

  setFilter=(filter)=>{
    this.setState({selectedFilter:filter})
  }

  updateSearch=(seachString)=>{
    this.setState({search:seachString})
  }

  deleteMovie=(id)=>{
    let filteredArr=this.state.movies.filter((el)=>{
      return el._id!==id;
    });
    this.setState({movies:filteredArr})
  }
  toggleLike=(id)=>{
    let index=this.state.movies.findIndex((el)=>{
      return el._id===id;
    });
    // console.log(index);

    let currMoviesArr= this.state.movies.map((el)=>el);

    if(currMoviesArr[index].liked){
      currMoviesArr[index].liked=false;
    }
    else{
      currMoviesArr[index].liked=true;
    }

    this.setState({movies:currMoviesArr});
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
            <Search
            search={this.state.search} 
            updateSearch={this.updateSearch}
            total={this.state.movies.length}
            />
            <Table
            search={this.state.search}
            deleteMovie={this.deleteMovie}
            toggleLike={this.toggleLike}
            selectedFilter={this.state.selectedFilter}
             moviesData={this.state.movies}/>
          </div>
       </div>
      </>
    )
  }
}

export default App;