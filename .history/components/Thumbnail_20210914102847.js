import Image from "next/image"
function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/origininal"
    return (
        <div>
            <Image layout="responsive" src={ } height={1080}
                width={1920} />
        </div>
    )
}

export default Thumbnail
