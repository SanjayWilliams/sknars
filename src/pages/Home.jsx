import Article from "../components/Article"
import Hero from "../components/Hero"
import articledata from "../data/articledata"

function Home() {
    return (
        <div>
            <Hero/>
            <Article title={articledata[0].title} text={articledata[0].text} image={articledata[0].image}/>
            <Article title={articledata[1].title} text={articledata[1].text} image={articledata[1].image}/>
        </div>
        
    )
}
export default Home