import Article from "../components/Article"
import Hero from "../components/Hero"
import articledata from "../data/articledata"
import { Link } from "react-router-dom"

function Home() {

    const mappedarticle = articledata.map((article) => (
        <Article title={article.title} text={article.text} image={article.image} author={article.author} publishdate={article.publishdate}/>
    ))

    return (
        <div>
            <Hero/>
            {mappedarticle}

            {/* <Article title={articledata[0].title} text={articledata[0].text} image={articledata[0].image}/>
            <Article title={articledata[1].title} text={articledata[1].text} image={articledata[1].image}/> */}
        </div>
        
    )
}
export default Home