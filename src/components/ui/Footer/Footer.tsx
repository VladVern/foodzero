import Social_Media from "../../../assets/home/Social_Media.png"

import './style.css'

export default function Footer() {
    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        console.log('Send')
    }
    
    return (
        <footer className="footer">
            <div className="Text_Footer">
                <div className="Logo_Footer">
                    <h1>Food</h1>
                    <h1>Zero.</h1>
                </div>
                <div className="Contacts_Tel">
                    <div>
                        <h2>Contact</h2>
                    </div>
                    <div className="Footer_Number">
                        <p>+1+86 852 346 000</p>
                        <p>info@foodzero.com</p>
                    </div>
                    <div>
                        <p>1959 Sepulveda Blvd.</p>
                        <p>Culver City, CA, 90230</p>
                    </div>
                </div>
                <div className="Subscribe">
                    <h2>Never Miss a Recipe</h2>
                    <div className="Subscribe_Email">
                        <form onSubmit={handleFormSubmit}>
                            <input required type="email" placeholder="Email" />
                            <button type="submit" className="Subscribe_Btn">Subscribe</button>
                        </form>
                    </div>
                    <p>Join our subscribers and gets best recipe recipe delivered each week!</p>
                </div>
            </div>
            <hr />
            <div className="Contacts">
                <p>© 2020 Zero Inc. All rights Reserved</p>
                <img src={Social_Media} alt="Social Media" />
            </div>
        </footer>
    )
}