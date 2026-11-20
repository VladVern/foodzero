import './style.css'

export default function MakeReservation() {
    return (
        <section className="Reservation_Form_Small">
            <div className="Text_Form_Home">
                <h1>Make a Reservation</h1>
                <p>Get in touch with restaurant</p>
            </div>
            <form className="Form_Home">
                <div className="Form_Home_inputs">
                    <div className="Time">
                        <input required type="date" name="date" placeholder="Date" />
                        <select required name="time">
                            <option value="">Select Time</option>
                            <option>6:00 pm</option>
                            <option>7:00 pm</option>
                            <option>8:00 pm</option>
                        </select>
                    </div>
                    <div className="Guests_Home">
                        <select required>
                            <option value="">Select Guests</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                            <option>6 Person</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className="Submit_Btn_Home">Book Now</button>
            </form>
        </section>
    )
}