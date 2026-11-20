import "./style.css"
import { Link } from "react-router-dom"

import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu"
import Footer from "../../../ui/Footer/Footer"

import Logo from '../../../../assets/blogs/blogs_two_columns/Logo.png'
import Feature_First from '../../../../assets/blogs/blogs_two_columns/Feature_First.png'
import Feature_Second from '../../../../assets/blogs/blogs_two_columns/Feature_Second.png'
import Feature_Third from '../../../../assets/blogs/blogs_two_columns/Feature_Third.png'
import Feature_Fourth from '../../../../assets/blogs/blogs_two_columns/Feature_Fourth.png'
import Feature_Fifth from '../../../../assets/blogs/blogs_two_columns/Feature_Fifth.png'
import Feature_Sixth from '../../../../assets/blogs/blogs_two_columns/Feature_Sixth.png'
import Avatar_First from '../../../../assets/blogs/blogs_two_columns/Avatar_First.png'
import Avatar_Second from '../../../../assets/blogs/blogs_two_columns/Avatar_Second.png'
import Avatar_Third from '../../../../assets/blogs/blogs_two_columns/Avatar_Third.png'
import Avatar_Fourth from '../../../../assets/blogs/blogs_two_columns/Avatar_Fourth.png'
import Avatar_Fifth from '../../../../assets/blogs/blogs_two_columns/Avatar_Fifth.png'
import Avatar_Sixth from '../../../../assets/blogs/blogs_two_columns/Avatar_Sixth.png'
import Vector from '../../../../assets/blogs/blogs_two_columns/Vector.png'

function Blog_Two_Columns() {
    return (
        <div className="wrapper">
            <header className="Header_Blog_Two">
                <div className="Navigation">
                    <div className="First">
                        <Link to="/home"><img src={Logo} alt="Logo" className="Logo" /></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={6}/>
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text_Blog_Two">
                    <h1>Blogs - Two Columns</h1>
                    <p>It is easy way to create your beautiful blog for daily</p>
                </div>
            </header>
            <div className="Text_Blog_Two_Columns">
                <p>Home / Blog <span>/ Blog Two Columns</span></p>
            </div>
            <div className="Recent_Post_Blog_Two_Columns_First">
                <div className="Blog_Two_Columns">
                    <div className="Foto_Blog_Two_Columns">
                        <img src={Feature_First} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_Two_Columns">
                        <div className="User_Two_Columns">
                            <img src={Avatar_First} alt="Avatar" />
                            <a href="#">Julie Christie  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_Two_Columns">
                            <h1>Fruit and vegetables and <br /> protection against diseases</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_Two_Columns">
                    <div className="Foto_Blog_Two_Columns">
                        <img src={Feature_Second} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_Two_Columns">
                        <div className="User_Two_Columns">
                            <img src={Avatar_Second} alt="Avatar" />
                            <a href="#">Dianne Russell  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_Two_Columns">
                            <h1>Asparagus Spring Salad with <br /> Rocket, Goat's Cheese</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Recent_Post_Blog_Two_Columns">
                <div className="Blog_Two_Columns">
                    <div className="Foto_Blog_Two_Columns">
                        <img src={Feature_Third} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_Two_Columns">
                        <div className="User_Two_Columns">
                            <img src={Avatar_Third} alt="Avatar" />
                            <a href="#">Jennifer Lopez  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_Two_Columns">
                            <h1>The Best Style of Dough for <br /> Dumplings</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_Two_Columns">
                    <div className="Foto_Blog_Two_Columns">
                        <img src={Feature_Fourth} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_Two_Columns">
                        <div className="User_Two_Columns">
                            <img src={Avatar_Fourth} alt="Avatar" />
                            <a href="#">Theresa Webb  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_Two_Columns">
                            <h1>7 Reasons to Start Your Day <br /> With Lemon Water</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Recent_Post_Blog_Two_Columns_Last">
                <div className="Blog_Two_Columns">
                    <div className="Foto_Blog_Two_Columns">
                        <img src={Feature_Fifth} alt="Food"/>
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_Two_Columns">
                        <div className="User_Two_Columns">
                            <img src={Avatar_Fifth} alt="Avatar" />
                            <a href="#">Cody Fisher  •  October 17,2021  •  3:33  •  2 comments</a>  
                        </div>
                        <div className="Text_Review_Two_Columns">
                            <h1>Three Ideas for Cooking <br /> Goat Meat at Home</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_Two_Columns">
                    <div className="Foto_Blog_Two_Columns">
                        <img src={Feature_Sixth} alt="Food"/>
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_Two_Columns">
                        <div className="User_Two_Columns">
                            <img src={Avatar_Sixth} alt="Avatar" />
                            <a href="#">Leslie Alexander  •  October 17,2021  •  3:33  •  2 comments</a>  
                        </div>
                        <div className="Text_Review_Two_Columns">
                            <h1>12 Sparkling Wines We're <br /> Loving This Summer</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Pagination">
                <div className="Pagination_Items">
                    <button>Prev</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>Next</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog_Two_Columns
