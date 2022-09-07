import "./Hero.css"

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text-container">
                <h1 className="hero-title">Welcome to SKNARS, Friendship Over The Waves</h1>
                <div>
                    <button className="btn btn-hero">Contact Us</button>
                    <button className="btn btn-hero">About Us</button>
                </div>
                
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src="./darkradio.jpg"/>
            </div>
        </div>
    )
}

export default Hero