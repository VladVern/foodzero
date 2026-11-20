import "./style.css"
import { Link } from "react-router-dom"

import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu"
import Footer from "../../../ui/Footer/Footer"

import Logo from '../../../../assets/blogs/blog_one_column/Logo.png'
import Feature_First from '../../../../assets/blogs/blog_one_column/Feature_First.png'
import Feature_Second from '../../../../assets/blogs/blog_one_column/Feature_Second.png'
import Feature_Third from '../../../../assets/blogs/blog_one_column/Feature_Third.png'
import Feature_Fourth from '../../../../assets/blogs/blog_one_column/Feature_Fourth.png'
import Feature_Sixth from '../../../../assets/blogs/blog_one_column/Feature_Sixth.png'
import Avatar_First from '../../../../assets/blogs/blog_one_column/Avatar_First.png'
import Avatar_Second from '../../../../assets/blogs/blog_one_column/Avatar_Second.png'
import Avatar_Third from '../../../../assets/blogs/blog_one_column/Avatar_Third.png'
import Avatar_Fourth from '../../../../assets/blogs/blog_one_column/Avatar_Fourth.png'
import Avatar_Sixth from '../../../../assets/blogs/blog_one_column/Avatar_Sixth.png'
import Vector from '../../../../assets/blogs/blog_one_column/Vector.png'

function Blog_One_Column() {
    return (
        <div className="wrapper">
            <header className="Header_Blog_One">
                <div className="Navigation">
                    <div className="First">
                        <Link to="/home"><img src={Logo} alt="Logo" className="Logo" /></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={7}/>
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text_Blog_One">
                    <h1>Blogs List - One Column</h1>
                    <p>It is easy way to create your beatiful blog for daily</p>
                </div>
            </header>
            <div className="Text_Blog_One_Columns">
                <p>Home / Blog <span>/ Blog List One Column</span></p>
            </div>
            <div className="Recent_Post_Blog_One_Columns_First">
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_First} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_First} alt="Avatar" />
                            <a href="#">Julie Christie  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>Fruit and vegetables and <br /> protection against diseases</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Second} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Second} alt="Avatar" />
                            <a href="#">Dianne Russell  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>Asparagus Spring Salad with <br /> Rocket, Goat's Cheese</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Third} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Third} alt="Avatar" />
                            <a href="#">Jenifier Lopez  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>The Best Style of Dough for <br /> Dumplings</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Fourth} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Fourth} alt="Avatar" />
                            <a href="#">Theresa Webb  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>7 Reasons to Start Your Day <br /> With Lemon Water</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Sixth} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Sixth} alt="Avatar" />
                            <a href="#">Leslie Alexander  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
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
                    <button>Loading...</button>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Blog_One_Column