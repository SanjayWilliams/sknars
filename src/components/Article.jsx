import "./Article.css"

function Article() {
    return (
        <div className="article-container">
            <img className="article-img" src="radio.jpg"/>
            <div className="article-text-container">
                <h2 className="article-title">Newsletter from our President</h2>
                <p className="article-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat sem 
                    malesuada sem sollicitudin ornare. Nullam faucibus mauris vel arcu interdum, 
                    ut sollicitudin augue elementum. Nam efficitur turpis ipsum, quis sollicitudin erat 
                    auctor sed. Praesent vitae sodales dolor. Aliquam sed semper diam. Interdum et 
                    malesuada fames ac ante ipsum primis in faucibus. Etiam cursus pretium nulla, 
                    et malesuada nisl consectetur non. Suspendisse in viverra lorem. Nulla finibus ...
                    </p>
                <button className=" btn btn-read-more" src="">Read More</button>
            </div>
        </div>
    )
}

export default Article