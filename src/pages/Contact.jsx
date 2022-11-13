import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u970cb4', 'template_j8ucaxu', form.current, 'Kz7J1UqzI9rxx8vRY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div>
            
            <div className="contact-container">
                <img className='contact-logo' src='logo2.png'/>
                <h1 className="contact-title">Want to Get in Touch?</h1>
                <h3 className="contact-subtitle">Reach out to us</h3>
                
                <form ref={form} onSubmit={sendEmail}>
                    <div className="divider"></div>
                    <input 
                    className="form-first-name"
                    type="text" 
                    placeholder="First Name"
                    name="fname"/>
                    <input 
                    className="form-last-name"
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    /><br/>
                    <input 
                    className="form-email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    />
                    <textarea name="message"></textarea>
                    <br/>
                    <input type="submit" className="btn form-btn" value="Send Message"></input>
                </form>
            </div>
        </div>
    )
 }

export default Contact