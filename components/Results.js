import Thumbnail from "./Thumbnail"

function Results({ results }) {
    return (
        <div>
            {results.map((result) => (
                <Thumbnail key={results.id} result={result} />
            ))}
        </div>
    )
}

export default Results
