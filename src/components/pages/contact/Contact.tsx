import "./style.css"

import { useState } from "react"
import { Link } from "react-router-dom"

import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"
import Footer from "../../ui/Footer/Footer"

import Logo from "../../../assets/contact/Logo.png"
import Adress_Location_First from "../../../assets/contact/Adress+Location+First.png"
import Adress_Location_Second from "../../../assets/contact/Adress+Location+Second.png"
import Mint from "../../../assets/contact/Mint.png"
import Orange from "../../../assets/contact/Orange.png"

function Contact() {
    // Btn submit
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
    })

    const [serverResponse, setServerResponse] = useState<null | string>(null)
    const [serverResponseColor, setServerResponseColor] = useState<'green' | 'red'>('red')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        fetch('https://fakeurl.com', { method: 'POST', body: JSON.stringify(formData) })
            .then(data => {
                if (!data.ok) {
                    throw new Error('Server error')
                }

                return data.json()
            }).then(data => {
                console.log(data)

                setServerResponseColor('green')
                setServerResponse('All good')
                setTimeout(() => setServerResponse(''), 4000)
            })
            .catch(() => {
                setServerResponseColor('red')
                setServerResponse('Server error')
                setTimeout(() => setServerResponse(''), 4000)
            })
    }

    return (
        <div className="wrapper">
            <header className="Header_Contact">
                <div className="Navigation">
                    <div className="First">
                        <Link to="/home"><img src={Logo} alt="Logo" className="Logo" /></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={2} />
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero">
                    <h1>Get in Touch</h1>
                    <p>The freshest ingredients for you every day</p>
                </div>
                <div className="OpenTime">
                    <div className="Open-time">
                        <p>Open time</p>
                        <p>Sunday-Friday</p>
                    </div>
                    <div className="Time-eat">
                        <div className="Brunch">
                            <p>Brunch</p>
                            <p>11:00-12:00</p>
                        </div>
                        <div className="Lunch">
                            <p>Lunch</p>
                            <p>13:00-17:00</p>
                        </div>
                        <div className="Dinner">
                            <p>Dinner</p>
                            <p>18:00-20:00</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="Adress_Location">
                <img className="Orange" src={Orange} alt="Orange" />
                <div className="Contact">
                    <img src={Adress_Location_First} alt="Adress+Location+First" />
                    <div className="Text_Contact">
                        <p>We can be contacted via</p>
                        <p>email  <span>info@foodzero.com</span> </p>
                        <p>or telephone on  <span>+86 852 346 000</span> </p>
                    </div>
                </div>
                <div className="Place">
                    <div className="Text_Place">
                        <p>We are located in 1959 Sepulveda Blvd. Culver</p>
                        <p>City, CA, 90230</p>
                        <button className="Btn_maps">View in maps</button>
                    </div>
                    <img src={Adress_Location_Second} alt="Adress+Location+Second" />
                </div>
            </div>
            <div className="Reservation_Form">
                <img src={Mint} alt="Mint" className="Mint" />
                <div className="Text_Form">
                    <h1>Make a Reservation</h1>
                    <p>Get in touch with restaurant</p>
                </div>
                <form className="Form_Contact" onSubmit={handleFormSubmit}>
                    <div className="Name">
                        <input required type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                        <input required type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                    </div>
                    <div className="Email">
                        <input required type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="Tel">
                        <input required type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="Time">
                        <input required type="date" name="date" placeholder="Date" value={formData.date} onChange={handleInputChange} />
                        <select required name="time" value={formData.time} onChange={handleInputChange}>
                            <option value="">Select Time</option>
                            <option>6:00 pm</option>
                            <option>7:00 pm</option>
                            <option>8:00 pm</option>
                        </select>
                    </div>
                    <div className="Guests">
                        <select required name="guests" value={formData.guests} onChange={handleInputChange}>
                            <option value="">Select Guests</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                            <option>6 Person</option>
                        </select>
                    </div>
                    <button type="submit" className="Submit_Btn">Book Now</button>
                    <p className={`Server_Response Server_Response_${serverResponseColor}`}>{serverResponse}</p>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact