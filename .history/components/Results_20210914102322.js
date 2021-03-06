function Results({ results }) {
    return (
        <div>
            {results.map((result) => (
                <Thumbnail result={result} />
            ))}
        </div>
    )
}

export default Results
