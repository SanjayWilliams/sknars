import "./Article.css"

function Article(props) {
    return (
        <div className="article-container">
            <img className="article-img" src={props.image}/>
            <div className="article-text-container">
                <h2 className="article-title">{props.title}</h2>
                <p className="article-body">{props.text}
                    </p>
                <button className=" btn btn-read-more" src="">Read More</button>
            </div>
        </div>
    )
}

export default Article