let Filter=(props)=>{
    console.log(props)
    return (
        <>
        <div className="col-3">
            <ul className="list-group m-4">
                <li className="list-group-item">An Genre</li>
                {
                    props.genreData.map((e)=>{
                        return <li key={e._id} className="list-group-item">{e.name}</li>
                    })
                }
              </ul>
          </div>
        </>
    )
}

export default Filter;