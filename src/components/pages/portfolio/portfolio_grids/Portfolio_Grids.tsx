import "./style.css"
import { Link } from "react-router-dom";

import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu"
import Footer from "../../../ui/Footer/Footer";

import Logo from "../../../../assets/portfolio/portfolio_grids/Logo.png"
import Feature_Image_First from "../../../../assets/portfolio/portfolio_grids/Feature_Image_First.png"
import Feature_Image_Second from "../../../../assets/portfolio/portfolio_grids/Feature_Image_Second.png"
import Feature_Image_Third from "../../../../assets/portfolio/portfolio_grids/Feature_Image_Third.png"
import Feature_Image_Fourth from "../../../../assets/portfolio/portfolio_grids/Feature_Image_Fourth.png"
import Feature_Image_Fifth from "../../../../assets/portfolio/portfolio_grids/Feature_Image_Fifth.png"
import Feature_Image_Sixth from "../../../../assets/portfolio/portfolio_grids/Feature_Image_Sixth.png"
import Icon_Arrow_Right from "../../../../assets/portfolio/portfolio_grids/Icon_arrow-right.png"

function Portfolio_Grids() {
    return (
        <div className="wrapper">
            <header className="Header_Partfolio_Grids">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src={Logo} alt="Logo" className="Logo"/></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={4} />
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text_Partfolio_Grids">
                    <h1>Portfolio - Grids</h1>
                </div>
                <div className="Scroll_Partfolio_Grids">
                    <h5>Scroll</h5>
                    <hr className="dashed-line" />
                </div>
            </header>
            <div className="Filters_Portfolio_Grids">
                <a href="#">All</a>
                <a href="#">Starter</a>
                <a href="#">Launch</a>
                <a href="#">Dinner</a>
                <a href="#">Drinks</a>
                <a href="#">Sweets</a>
                <a href="#">Fruits</a>
            </div>
            <div className="Portfolio_Grids_Items">
                <div className="First_Portfolio_Grids_Items">
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_First} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Premium Deep Sea Snow<br /> White Cod Fillet</h1>
                            <div className="Partfolio_Cata">
                                <p>Launch  •  Dinner</p>
                                <img src={Icon_Arrow_Right} alt="Icon Arrow Right" />
                            </div>
                        </div>
                    </div>
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Second} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Option of natural <br /> wine available</h1>
                            <div className="Partfolio_Cata">
                                <p>Drinks  •  Fruits</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Second_Portfolio_Grids_Items">
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Third} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Best pumpkin for<br /> pumpkin soup</h1>
                            <div className="Partfolio_Cata">
                                <p>Launch  •  Starters</p>
                            </div>
                        </div>
                    </div>
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Fourth}alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Strip Steak With Rosemary<br /> Butter</h1>
                            <div className="Partfolio_Cata">
                                <p>Diner  •  Launch</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="Third_Portfolio_Grids_Items">
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Fifth} alt="Feature" /> 
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Braised Sliced Abalone,Fish<br /> Maw with Premium Seafood</h1>
                            <div className="Partfolio_Cata">
                                <p>Cold Dishes  •  Starters</p>
                            </div>
                        </div>
                    </div>
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Sixth} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Pan Fried Live Prawn with<br /> Superior Soy Sauce</h1>
                            <div className="Partfolio_Cata">
                                <p>Starter  •  Dinner</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="Pagination">
                <div className="Pagination_Items">
                    <button>Loading...</button>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Portfolio_Grids