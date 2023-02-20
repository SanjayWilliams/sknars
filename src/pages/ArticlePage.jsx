import "./ArticlePage.css"
import articledata from "../data/articledata"
import { useParams } from "react-router-dom"

function ArticlePage(props) {

    const {articleId} = useParams();
    const thisArticle = articledata.find(article => article.id === articleId)

    return (
        <div className="article-container">
            <img className="article-img" src={thisArticle.image}/>
            <div className="article-text-container">
                <h2 className="article-title">{thisArticle.title}</h2>
                <p className="article-body">{thisArticle.text}
                    </p>
                <button className=" btn btn-read-more" src="">Read More</button>
            </div>
        </div>
    )
}

export default ArticlePage