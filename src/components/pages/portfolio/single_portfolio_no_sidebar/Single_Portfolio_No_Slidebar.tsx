import "./style.css"
import { Link } from "react-router-dom";

import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu";
import Footer from "../../../ui/Footer/Footer";

import Logo from "../../../../assets/portfolio/single_portfolio_no_slidebar/Logo.png"
import Drinks from "../../../../assets/portfolio/single_portfolio_no_slidebar/Drinks.png"
import Food_First from "../../../../assets/portfolio/single_portfolio_no_slidebar/Food_First.png"
import Food_Second from "../../../../assets/portfolio/single_portfolio_no_slidebar/Food_Second.png"
import Icon_Back from "../../../../assets/portfolio/single_portfolio_no_slidebar/Icon_back.png"
import Icon_Arrow_Left from "../../../../assets/portfolio/single_portfolio_no_slidebar/Icon_arrow-left.png"
import Icon_Arrow_Right from "../../../../assets/portfolio/single_portfolio_no_slidebar/Icon_arrow-right.png"

function Single_Portfolio_No_Slidebar() {
    return (
        <div className="wrapper">
            <header className="Header_Single_Portfolio_No_Slidebar">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src={Logo} alt="Logo" className="Logo"/></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={5}/>
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text_Single_Portfolio_No_Slidebar">
                    <h1>Deep Sea Snow White <br /> Cod Fillet</h1>
                </div>
                <div className="Scroll_Single_Portfolio_No_Slidebar">
                    <h5>Scroll</h5>
                    <hr className="dashed-line" />
                </div>
            </header>
            <div className="Drinks_Food">
                <div className="Drinks_Single_Portfolio_No_Slidebar">
                    <img src={Drinks} alt="Drinks" />
                    <div className="Text_Drinks_Single_Portfolio_No_Slidebar">
                        <h1>Melt in Your Mouth</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient orci ac etiam congue mi. </p>
                    </div>
                </div>
                <div className="Food_First_Single_Portfolio_No_Slidebar">
                    <div className="Food_Forst_Single_Portfolio">
                        <img src={Food_First} alt="Food" />
                    </div>
                    <div className="Food_Text_Single_Portfolio_No_Slidebart">
                        <h1>The Best Taste</h1>
                        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                </div>
                <div className="Drinks_Food_Text">
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient orci ac etiam congue mi. </p>
                    <h1>Cooking Suggestions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                </div>
                <div className="Food_Second_Single_Portfolio_No_Slidebar">
                    <img src={Food_Second} alt="Food" />
                </div>
            </div>
            <div className="Portfolio_PreviosNext">
                <div className="Previos_Page">
                    <div className="Previos_Page_Items">
                        <a href="#"><img src={Icon_Arrow_Left} alt="Icon Arrow Left" /></a>
                        <p>PREVIOUS PAGE</p>
                    </div>
                    <h1>Strip Steak With Rosemary Butter</h1>
                </div>
                <a href="#"><img src={Icon_Back} alt="Icon Back" /></a>
                <div className="Next_Page">
                    <div className="Next_Page_Items">
                        <p>NEXT PAGE</p>
                        <a href="#"><img src={Icon_Arrow_Right} alt="Icon Arrow Right" /></a>
                    </div>
                    <h1>Option of natural wine available</h1>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Single_Portfolio_No_Slidebar