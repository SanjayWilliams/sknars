import "./ArticlePage.css"
import articledata from "../data/articledata.js"
import { useParams } from "react-router-dom"

function ArticlePage() {

    const { id } = useParams();


    return (
        <div className="article-container">
            <img className="article-img" src={articledata.image}/>
            <div className="article-text-container">
                <h2 className="article-title">{articledata.title}</h2>
                <p className="article-body">{articledata.text}
                    </p>
                <button className=" btn btn-read-more" src="">Read More</button>
            </div>
        </div>
    )
}

export default ArticlePage