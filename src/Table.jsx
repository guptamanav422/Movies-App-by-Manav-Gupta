import React from "react"
import Pagination from "./Pagination"
let Table = (props) => {
    console.log(props);

    let allMovies=props.moviesData
    let currFilter=props.selectedFilter

    let filteredMoviesArr=allMovies.filter((el) => {
        if(currFilter==='All Genre') return el;
        if(el.genre.name === currFilter) return el;
    })

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
                        filteredMoviesArr.map((e) => {
                            return <tr key={e._id}>
                                <td>{e.title}</td>
                                <td>{e.genre.name}</td>
                                <td>{e.numberInStock}</td>
                                <td>{e.dailyRentalRate}</td>
                                <td>Like</td>
                                <td>
                                    <button>Click</button>
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