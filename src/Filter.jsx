import React from "react"

let Filter = (props) => {
    return (
        <>
            <div className="col-3">
                <ul className="list-group m-4">
                    <li onClick={(e) => {
                        props.handleFilter("All Genre")
                    }}
                        className={`list-group-item ${props.selectedFilter === "All Genre" ? "active" : ""}`}>All Genre</li>
                    {
                        props.genreData.map((e) => {
                            return (
                                <li
                                    onClick={() => {
                                        props.handleFilter(e.name);
                                    }}
                                    key={e._id}
                                    className={`list-group-item ${props.selectedFilter === e.name ? "active" : ""}`}>
                                    {e.name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Filter;