function Results({results}) {
    return (
        <div>
            {results.map ((item)=> (
             <p>{item.name}</p>   
            ))}
        </div>
    )
}

export default Results
