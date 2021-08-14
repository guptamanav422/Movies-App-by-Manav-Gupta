let Search=(props)=>{
    return(
    <>
        <p className="mt-4">Showing {props.total} movies from database</p>
            <button type="button" class="btn btn-primary mt-2">New</button>
            <div className="row">
                <div className="col-4">
                    <div className="input-group flex-nowrap">
                        <input
                         type="text" 
                         className="form-control mt-4" 
                         placeholder="Search..."
                         value={props.Search}
                         onChange={(e)=>{
                            //  console.log(props);
                             props.updateSearch(e.currentTarget.value)
                         }}
                         />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;