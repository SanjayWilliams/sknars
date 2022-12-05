import "./Hero.css"
import {Link} from "react-router-dom"

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text-container">
                <h1 className="hero-title">Welcome to SKNARS, Amateur Radio Station <span className="call-sign">V44KR</span></h1>
                <h4></h4>
                <div>
                    <Link style={{ textDecoration: 'none' }} className="btn btn-hero" to="/about">About</Link>
                    <Link style={{ textDecoration: 'none' }} className="btn btn-hero" to="/contact">Contact</Link>
                </div>
                
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src="./darkradio.jpg"/>
            </div>
        </div>
    )
}

export default Hero