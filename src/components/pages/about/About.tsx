import "./style.css"

import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import Footer from "../../ui/Footer/Footer";
import MakeReservation from "../../ui/MakeReservation/MakeReservation"

import { Link } from "react-router-dom";

import Logo from "../../../assets/about/Logo.png"
import Tomato from "../../../assets/about/Tomato.png"
import Bake from "../../../assets/about/Bake.png"
import Chef from "../../../assets/about/Chef.png"
import Manager from "../../../assets/about/Manager.png"
import Pickled from "../../../assets/about/Pickled.png"
import Play from "../../../assets/about/Play.png"
import Rosemary_First from "../../../assets/about/Rosemary_First.png"
import Rosemary_Second from "../../../assets/about/Rosemary_Second.png"
import Slice from "../../../assets/about/Slice.png"
import Our_Story from "../../../assets/about/Our_Story.png"

function About() {
    return (
        <div className="wrapper">
            <header className="Header_About">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src={Logo} alt="Logo" className="Logo"/></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={3} />
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text_About">
                    <h1>Who We Are</h1>
                    <p>The most important thing for us is to give you the <br /> comfortable dining experience</p>
                </div>
            </header>
            <div className="Our_Story">
                <img src={Tomato} alt="Tomato" className="Tomato"/>
                <div className="Our_Story_Items">
                    <div className="Our_Story_Text">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br /> lorem id penatibus imperdiet. Turpis egestas ultricies purus <br /> auctor tincidunt lacus nunc.</p>
                    </div>
                    <img src={Our_Story} alt="Our Story" />
                </div>
            </div>
            <div className="Staff">
                <div className="Manager_">
                    <div className="Staff_Manager">
                        <div className="Staff_Text">
                            <h1>Restaran Manager</h1>
                            <p>Carson Hugn</p>
                        </div>
                        <img src={Manager} alt="Manager" />
                        <p className="Manager_p">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient orci ac etiam congue mi.</p>
                    </div>
                </div>  
                <div className="Chef_">
                    <div className="Staff_Chef">
                        <p className="Chef_p">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. </p>
                        <div className="Staff_Text">
                            <h1>Executive Chef</h1>
                            <p>Jane Cooper</p>
                        </div>
                        <img src={Chef} alt="Chef" />
                    </div>
                </div> 
            </div>
            <div className="Our_Story_Video">
                <div className="Video_Text">
                    <h1>It looks delicious</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="Play_Icon"> 
                        <img src={Play} alt="Play"/>
                    </div> 
                </div>
            </div>
            <div className="Process">
                <img src={Rosemary_First} alt="Rosemary" className="Rosemary_First"/>
                <h1>Sophisticated Process</h1>
                <div className="Slice">
                    <img src={Slice} alt="Slice" />
                    <div className="Slice_Text">
                        <h2>01.Slice</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus auctor tincidunt lacus nunc. Convallis <br /> pellentesque quis fringilla sagittis. Egestas in risus sit <br /> nunc nunc, arcu donec nam etiam. </p>
                    </div>
                </div>
                <div className="Pickled_Bake">
                    <div className="Bake">
                        <h2>03.Bake</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. </p>
                        <img src={Bake} alt="Bake" />
                    </div>
                    <div className="Pickled">
                        <img src={Pickled} alt="Pickled"/>
                        <h2>02.Pickled</h2>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Purus lorem <br /> id penatibus imperdiet.</p>
                    </div>
                </div>
                <img src={Rosemary_Second} alt="Rosemary" className="Rosemary_Second"/>
            </div>
            <MakeReservation />
            
            <Footer />
        </div>
    )
}

export default About