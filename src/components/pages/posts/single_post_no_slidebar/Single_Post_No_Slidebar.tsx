import "./style.css"

import { Link } from "react-router-dom"

import BurgerMenu from "../../../ui/BurgerMenu/BurgerMenu"
import Footer from "../../../ui/Footer/Footer"

import Avatar_Header from "../../../../assets/posts/single_post_no_slidebar/Avatar_Header.png"
import Avatar_Small from "../../../../assets/posts/single_post_no_slidebar/Avatar_Small.png"
import Avatar_Small_2 from "../../../../assets/posts/single_post_no_slidebar/Avatar_Small_2.png"
import Blog_AuthorBox from "../../../../assets/posts/single_post_no_slidebar/Blog_AuthorBox.png"
import Feature_Image from "../../../../assets/posts/single_post_no_slidebar/Feature_Image.png"
import Feature_Image_2 from "../../../../assets/posts/single_post_no_slidebar/Feature_Image_2.png"
import Gallery_1 from "../../../../assets/posts/single_post_no_slidebar/Gallery_1.png"
import Gallery_2 from "../../../../assets/posts/single_post_no_slidebar/Gallery_2.png"
import Quote from "../../../../assets/posts/single_post_no_slidebar/”.png"
import Logo from '../../../../assets/posts/single_post_no_slidebar/Logo.png'
import Vector from '../../../../assets/posts/single_post_no_slidebar/Vector.png'

function Single_Post_No_Slidebar() {
    return (
        <div className="wrapper">
            <header className="Header_Post_No_Slidebar">
                <div className="Navigation">
                    <div className="First">
                        <Link to="/home"><img src={Logo} alt="Logo" className="Logo" /></Link>
                        <div className="Navigation_btn">
                            <BurgerMenu index={9}/>
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                </div>
                <div className="Headline_Hero_Text_Post_No_Slidebar">
                    <button className="Fashion_Post_No_Slidebar">Fashion</button>
                    <h1>Three Ideas For Cooking<br /> Goat Meat at Home</h1>
                </div>
                <div className="User_Header_Post_No_Slidebar">
                    <img src={Avatar_Header} alt="Avatar" />
                    <p>Julie Christie  •  October 17,2021  •  3:33  •  2 comments</p>  
                </div>
            </header>
            <div className="Path_Post_No_Slidebar">
                <p>Home / Blog / <span>Vegan baked oatmeal with fresh berries</span></p>
            </div>
            <div className="Posts_No_Slide_Bar">
                <div className="Text_H3_Post">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in <br /> pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient <br /> orci ac etiam congue mi. Elementum pellentesque non hendrerit et <br /> pharetra tellus leo tempus tellus. </h3>
                </div>
                <div className="Gallery_No_Slide_Bar">
                    <img src={Gallery_1} alt="Food" />
                    <img src={Gallery_2} alt="Food" />
                </div>
                <div className="Text_H3_Post">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. <br /> Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non <br /> hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien <br /> morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar <br /> adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus <br /> purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque <br /> consectetur orci dui est sem nulla.Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in <br /> ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna <br /> diam tincidunt interdum faucibus mauris est. Nec, lacinia eleifend amet, quis turpis et massa <br /> duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc <br /> nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </h4>
                </div>
                <div className="Quote">
                    <h1>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br /> lorem id penatibus imperdiet. Turpis egestas ultricies purus <br /> auctor tincidunt lacus nunc. </h1>
                    <img src={Quote} alt="" />
                </div>
                <div className="Text_H3_Post">
                    <h4>Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur <br /> scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus <br /> faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec <br /> consequat amet. Id cursus purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. <br /> Mattis quis scelerisque consectetur orci dui est sem nulla. <br /> Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada <br /> eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus <br /> mauris est. Nec, lacinia eleifend amet, quis turpis et massa duis.</h4>
                </div>
                <div className="Tags_Post">
                    <h1>Tags:</h1>
                    <button>Design</button>
                    <button>Photography</button>
                    <button>Images</button>
                    <button>Video</button>
                    <button>Music</button>
                    <button>Travel</button>
                </div>
                <div className="User_Singele_Post">
                    <img src={Blog_AuthorBox} alt="User" />
                    <div className="User_Text_Singele_Post">
                        <h1>Julie Christie</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id <br /> penatibus imperdiet. </p>
                    </div>
                </div>
                <hr className="Posts_No_Slide_Bar_Hr"/>
                <div className="Recent_Post_No_Slidebar_Text">
                    <h1>Related Post</h1>
                </div>
                <div className="Recent_Post_No_Slidebar">
                    <div className="Blog_First_No_Slidebar">
                        <div className="Foto_Blog_No_Slidebar">
                            <img src={Feature_Image} alt="Food"/>
                            <button className="Fashion">Fashion</button>
                        </div>
                        <div className="Review_No_Slidebar">
                            <div className="User_No_Slidebar">
                                <img src={Avatar_Small} alt="Avatar" />
                                <a href="#">Julie Christie  •  October 17,2021  •  3:33  •  2 comments</a>  
                            </div>
                            <div className="Text_Review_No_Slidebar">
                                <h1>Fruit and vegetables and <br /> protection against diseases</h1>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="Blog_Second_No_Slidebar">
                        <div className="Foto_Blog_No_Slidebar">
                            <img src={Feature_Image_2} alt="Food"/>
                            <button className="Fashion">Fashion</button>
                        </div>
                        <div className="Review_No_Slidebar">
                            <div className="User_No_Slidebar">
                                <img src={Avatar_Small_2} alt="Avatar" />
                                <a href="#">Dianne Russell  •  October 17,2021  •  3:33  •  2 comments</a>   
                            </div>
                            <div className="Text_Review_No_Slidebar">
                                <h1>Aspargus Spring Salad with <br /> Rocket, Goat's Cheese</h1>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Single_Post_No_Slidebar