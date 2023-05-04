import React from "react"
import Star from "./Star"
import Preloader from './Preloader';

export default function App() {

    const assets = [
        { type: 'image', url: '/images/user.png' },
        // { type: 'audio', url: 'https://example.com/audio.mp3' },
        // { type: 'video', url: 'https://example.com/video.mp4' },
        // { type: 'js', url: './Star.js' },
        { type: 'css', url: '/style.css' },
      ];
    const [contact, setContact] = React.useState({
        firstName: "Siddhesh",
        lastName: "Undre",
        phone: "+91 9766421612",
        email: "siddheshundre2510@gmail.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
          }));
    }
    
    return (
    <Preloader assets={assets}>
       <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    </Preloader>

        
    )
}
