import React from "react"
import Pagination from "./Pagination"
import "./Table.css"
let Table = (props) => {

    let allMovies=props.moviesData
    let currFilter=props.selectedFilter

    let filteredMoviesArr=allMovies.filter((el) => {
        if(currFilter==='All Genre') return el;
        else if(el.genre.name === currFilter) return true;
        return false;
    })


    let arrToBeUsedInTable=allMovies.slice(0,4);
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
                                <td onClick={()=>{
                                    // toggled like key 
                                    props.toggleLike(e._id);
                                }}>
                                {e.liked ? (
                                    <span
                                    class="material-icons-outlined">
                                    favorite
                                   </span>
                                ):(
                                    <span
                                    class="material-icons-outlined">
                                    favorite_border
                                    </span>
                                )
                                }
                                </td>
                                <td>
                                    <button className="table-delete-btn">Click</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Pagination />
        </>
    )
}

export default Table;