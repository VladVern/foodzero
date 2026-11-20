import "./style.css"

import { useState } from "react"
import { Link } from "react-router-dom"

import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"
import Footer from '../../../components/ui/Footer/Footer'
import MakeReservation from "../../ui/MakeReservation/MakeReservation"

import Avatar from "../../../assets/home/Avatar.png"
import Avatar_First from "../../../assets/home/Avatar_First.png"
import Avatar_Second from "../../../assets/home/Avatar_Second.png"
import Chef from "../../../assets/home/Chef.png"
import CircleIcon_First from "../../../assets/home/CircleIcon_First.png"
import CircleIcon_Second from "../../../assets/home/CircleIcon_Second.png"
import CircleIcon_Third from "../../../assets/home/CircleIcon_Third.png"
import Featur_First from "../../../assets/home/Feature_First.png"
import Featur_Second from "../../../assets/home/Feature_Second.png"
import food_first from "../../../assets/home/food_first.png"
import food_second from "../../../assets/home/food_second.png"
import Icon_arrow_left from "../../../assets/home/Icon_arrow-left.png"
import Icon_arrow_right from "../../../assets/home/Icon_arrow-right.png"
import Leaf_First from "../../../assets/home/Leaf_First.png"
import Leaf_Second from "../../../assets/home/Leaf_Second.png"
import leaves from "../../../assets/home/leaves.png"
import Logo from "../../../assets/home/Logo.png"
import Mains_Category from "../../../assets/home/Mains_Category.png"
import seasoning_first from "../../../assets/home/seasoning_first.png"
import seasoning_second from "../../../assets/home/seasoning_second.png"
import Soups_Category from "../../../assets/home/Soups_Category.png"
import Starters_Category from "../../../assets/home/Starters_Category.png"
import Vector from "../../../assets/home/Vector.png"

//Slider
const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet <br />ultricies purus Lorem ipsum dolor sit amet.",
        user: {
            name: "John Doe",
            role: "Bloger",
            avatar: Avatar
        }
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus Lorem ipsum dolor sit amet.",
        user: {
            name: "Jane Smith",
            role: "Influencer",
            avatar: Avatar
        }
    },
    {
        text: "Lorem ipsum dolor sit elit. Purus lorem id <br /> penatibus imperdiet. Turpis egestas <br /> ultricies purus Lorem ipsum dolor sit amet.",
        user: {
            name: "Alice Johnson",
            role: "Writer",
            avatar: Avatar
        }
    }
]

function Home() {
    //Slider
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
                setIsAnimating(false)
            }, 500)
        }
    }

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
                setIsAnimating(false)
            }, 500)
        }
    }

    return (
        <div className="wrapper">
            <header className="Header_Home">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src={Logo} alt="Logo" className="Logo"/></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={0} />
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                    
                </div>
                <div className="Headline_Hero_Text_Home">
                    <div className="Text_Home">
                        <h1>Healthy Eating <br /> is important <br /> part of lifestyle </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing <br /> elit. Neque congue arcu</p>
                        <h5 className="Scroll_Home">Scroll</h5>
                        <hr />
                    </div>
                    <div className="Food_First">
                        <img src={food_first} alt="Food_First" />
                        <img src={seasoning_first} className="Seasoning_First" alt="Seasoning First" />
                    </div>
                </div>
                <div className="Text_Home_Food_Second">
                    <div className="Food_Second">
                        <img src={food_second} alt="Food Second" />
                        <h1>Start to plan <br /> your diet today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Neque congue arcu</p>
                    </div>
                    <div className="Seasoning_Second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Neque congue arcu</p>
                        <img src={seasoning_second} alt="Seasoning Second" />
                    </div>
                </div>
            </header>
            <div className="Our_Menu">
                <div className="Text_Menu_Home_Items">   
                    <div className="Text_Menu_Home">
                        <h1>Our Menu</h1>
                        <p>This a section of your menu. Give your section <br /> a brief brief description</p>
                    </div>
                </div> 
                <img src={leaves} className="Leaves" alt="Leaves" />
                <div className="Price_Home_Items">
                    <div className="Price_Home_First">
                        <div className="Home_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Deep Sea Snow White <br /> Cod Fillet</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Home_Item">
                            <span className="Price">$22</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Cucumber Salad</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                    </div>
                    <div className="Price_Home_Second">
                        <div className="Home_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Steak Whith Rosemary <br /> Butter</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                        <div className="Home_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Natural Wine Pairing</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                </div>
            </div>  
            <div className="Excellent_Cook">
                <div className="Excellent_Cook_Items">
                    <div className="Image_Excellent_Cook">
                        <img src={Leaf_First} className="Leaf_First" alt="" />
                        <img src={Chef} className="Chef" alt="Chef" />
                    </div>
                    <div className="Text_Image_Excellent_Cook">
                        <h1>Excellent <br /> cook</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas ultricies <br /> purus auctor tincidunt lacus nunc. </p>
                        <img src={Leaf_Second} alt="" />
                    </div>
                </div>
            </div>
            <div className="Features">
                <div className="Features_Items">
                    <div className="Premium_Quality">
                        <img src={CircleIcon_First} alt="CircleIcon First" />
                        <h2>Premium Quality</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
                    </div>
                    <div className="Seasonal_Vegetables">
                        <img src={CircleIcon_Second} alt="CircleIcon Second" />
                        <h2>Seasonal Vegetables</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
                    </div>
                    <div className="Fresh_Fruit">
                        <img src={CircleIcon_Third} alt="CircleIcon Third" />
                        <h2>Fresh Fruit</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
                    </div>
                </div>
            </div>
            <div className="Recent_Post">
                <div className="Blog_First">
                    <div className="Foto_Blog">
                        <img src={Featur_First} alt="Food"/>
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review">
                        <div className="User">
                            <img src={Avatar_First} alt="Avatar" />
                            <a href="#">Julie Christie  •  October 17,2021  •  3:33  •  2 comments</a>  
                        </div>
                        <div className="Text_Review">
                            <h1>Fruit and vegetables and <br /> protection against diseases</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_Second">
                    <div className="Foto_Blog">
                        <img src={Featur_Second} alt="Food"/>
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review">
                        <div className="User">
                            <img src={Avatar_Second} alt="Avatar" />
                            <a href="#">Dianne Russell  •  October 17,2021  •  3:33  •  2 comments</a>   
                        </div>
                        <div className="Text_Review">
                            <h1>Aspargus Spring Salad with <br /> Rocket, Goat's Cheese</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <MakeReservation />
            <div className="Category">
                <div className="Category_Text">
                    <h1>Calories Energy <br /> Balance</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="Menu_Category">
                    <div className="Starters_Category">
                        <div className="Category_Items">
                            <a href="#">Starters</a>
                            <a href="#"><img src={Vector} alt="Arrow" /></a>
                        </div>
                        <img src={Starters_Category} alt="Starters" className="Starters_Category_Img"/>
                    </div>
                    <div className="Mains_Category">
                        <div className="Category_Items">
                            <a href="#">Mains</a>
                            <a href="#"><img src={Vector} alt="Arrow" /></a>
                        </div>
                        <img src={Mains_Category} alt="Mains" className="Mains_Category_Img"/>
                    </div>
                    <div className="Soups_Category">
                        <div className="Category_Items">
                            <a href="#">Soups</a>
                            <a href="#"><img src={Vector} alt="Arrow" /></a>
                        </div>
                        <img src={Soups_Category} alt="Soups" className="Soups_Category_Img"/>
                    </div>
                </div>
            </div>
            <div className="Testimonials">
                <div className={`Slider_Text ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                <h1 dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].text }} />
                </div>
                <div className="Slide_Items">
                    <div className={`User_Bloger ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                        <img src={testimonials[currentIndex].user.avatar} alt="Avatar" />
                        <div className="User_Bloger_Text">
                            <p>{testimonials[currentIndex].user.name}</p>
                            <p>{testimonials[currentIndex].user.role}</p>
                        </div>
                    </div>
                    <div className="Slider_Btn">
                        <a href="#" onClick={handlePrev}>
                            <img src={Icon_arrow_left} alt="Previous" />
                        </a>
                        <p>{currentIndex + 1}/{testimonials.length}</p>
                        <a href="#" onClick={handleNext}>
                            <img src={Icon_arrow_right} alt="Next" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home