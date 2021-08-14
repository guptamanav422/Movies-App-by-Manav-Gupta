import React from "react"
import Pagination from "./Pagination"
import "./Table.css"
class Table extends React.Component {

    state = {
        currPage: 1,
    }

    selectPage = (value) => {
        this.setState({currPage:value})
        // console.log("jllo");
    }
    
    render = () => {
        let allMovies = this.props.moviesData
        let currFilter = this.props.selectedFilter

        let filteredMoviesArr = allMovies.filter((el) => {
            if (currFilter === 'All Genre') return el;
            else if (el.genre.name === currFilter) return true;
            return false;
        })

        filteredMoviesArr = filteredMoviesArr.filter((el) => {
            let movieTitle=el.title.toLowerCase();
            let s=this.props.search.toLowerCase();
           return movieTitle.includes(s)
        })


        let numberOfPages = Math.ceil(filteredMoviesArr.length / 4);


        let startIndex=(this.state.currPage-1)*4;
        let endIndex=Math.min(filteredMoviesArr.length,this.state.currPage*4);

        let arrToBeUsedInTable = filteredMoviesArr.slice(startIndex, endIndex);
        return (
            <>
                <table class="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrToBeUsedInTable.map((e) => {
                                return <tr key={e._id}>
                                    <td>{e.title}</td>
                                    <td>{e.genre.name}</td>
                                    <td>{e.numberInStock}</td>
                                    <td>{e.dailyRentalRate}</td>
                                    <td onClick={() => {
                                        // toggled like key 
                                        this.props.toggleLike(e._id);
                                    }}>
                                        {e.liked ? (
                                            <span
                                                class="material-icons-outlined">
                                                favorite
                                            </span>
                                        ) : (
                                            <span
                                                class="material-icons-outlined">
                                                favorite_border
                                            </span>
                                        )
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                this.props.deleteMovie(e._id);
                                            }}
                                            className="table-delete-btn">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <Pagination
                    selectPage={this.selectPage}
                    currPage={this.state.currPage}
                    numberOfPages={numberOfPages} />
            </>
        )
    }
}

export default Table;