import "./style.css"

import { Link } from "react-router-dom";

import Footer from "../../ui/Footer/Footer";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import MakeReservation from "../../ui/MakeReservation/MakeReservation"

import Avocado from "../../../assets/menu/Avocado.png"
import Blueberry from "../../../assets/menu/Blueberry.png"
import Food_Starters from "../../../assets/menu/Food_Starters.png"
import Logo from "../../../assets/menu/Logo.png"
import Mains from "../../../assets/menu/Mains.png"
import Pastries_Drinks from "../../../assets/menu/Pastries_Drinks.png"

function Menu() {
    return (
        <div className="wrapper">
            <header className="Header_Menu">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src={Logo} alt="Logo" className="Logo"/></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={1}/>
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text">
                    <h1>View Our <br /> New Menu</h1>
                    <p>The freshest ingredients for you every day</p>
                </div>
            </header>
            <div className="Starters">
                <img src={Blueberry} alt="Blueberry" className="Blueberry" />
                <div className="Text_Starters">
                    <h1>Starters</h1>
                    <p>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="Price_Starters_Items">
                    <img src={Food_Starters} alt="Food_Starters" />
                    <div className="Price_S">
                        <div className="Menu_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Grilled Okra and Tomatoes</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$18</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Cucumber Salad</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$12</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Basil Pancakes</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="Mains">
                <div className="Text_Mains">
                    <h1>Mains</h1>
                    <p>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="Price_Mains_Items">
                    <div className="Price_S">
                        <div className="Menu_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Deep Sea Snow White <br /> Cod Fillet</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$22</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Steak Whith Rosemary <br /> Butter</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Steaks with Grilled <br /> Kimchi</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                    <img src={Mains} alt="Food_Mains" />
                </div>
            </div>
            <div className="Pastries_Drinks">
                <img src={Avocado} alt="Avocado" className="Avocado" />
                <div className="Text_Pastries_Drinks">
                    <h1>Pastries & Drinks</h1>
                    <p>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="Price_Pastries_Drinks_Items">
                    <img src={Pastries_Drinks} alt="Pastries_Drinks" />
                    <div className="Price_S">
                        <div className="Menu_Item">
                            <span className="Price">$158</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Wine Pairing</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$168</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Natural Wine Pairing</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$90</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Whisky Flyer</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                </div>
            </div>
            <MakeReservation />
            
            <Footer />
        </div>
    )
}

export default Menu