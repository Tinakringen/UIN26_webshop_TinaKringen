import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"

export default function Category() {
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpritesImg] = useState([])
    const {slug} = useParams()

    console.log("Denne kommer fra Category", apiEndpoint)

    const getSingleData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl + slug)
        const data = await response.json()
        setApiData(data)
    }

    console.log("Cat", apiData, apiEndpoint)

    console.log("Key values: ", Object.keys(apiData?.sprites))

    useEffect( ()=>{
        getSingleData()
        setSpritesImg(Object.keys(apiData?.sprites))
    }, [slug, apiEndpoint])

    console.log("Mine bilder", spritesImg)

    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                {spritesImg?.map((item) => <img src={apiData?.sprites?.item} alt={apiData?.name})
                <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
            </section>
        </main>
    )
}