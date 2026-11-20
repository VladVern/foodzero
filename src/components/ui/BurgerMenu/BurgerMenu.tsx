import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import './style.css'

import Social_Media from "../../../assets/home/Social_Media.png"

export default function BurgerMenu({ index }: { index: number }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        if (!menuOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollBarWidth}px`
        } else {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0px'
        }
    }

    useEffect(() => {
        document.querySelectorAll('.SideMenu_Home_ul a')[index].classList.add('SideMenu_Home_Selected')

        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0px'
        }
    }, [])

    return (
        <>
            <button className={`menu-open ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`SideMenu_Home ${menuOpen ? "open" : ""}`}>
                <ul className="SideMenu_Home_ul">
                    <Link to="/home">
                        <li>• Home</li>
                    </Link>
                    <Link to="/menu">
                        <li>• Menu</li>
                    </Link>
                    <Link to="/contact">
                        <li>• Contact</li>
                    </Link>
                    <Link to="/about">
                        <li>• About</li>
                    </Link>
                    <h1>• Portfolio</h1>
                    <Link to="/portfolio_grids">
                        <li>Portfolio - Grids</li>
                    </Link>
                    <Link to="/single_portfolio_no_slidebar">
                        <li>Single Portfolio - No Sidebar</li>
                    </Link>
                    <h1>• Blogs</h1>
                    <Link to="/blogs_two_columns">
                        <li>Blogs - Two Columns</li>
                    </Link>
                    <Link to="/blogs_one_columns">
                        <li>Blogs - One Columns</li>
                    </Link>
                    <h1>• Post</h1>
                    <Link to="/single_post_with_slidebar">
                        <li>Single Post - with Slidebar</li>
                    </Link>
                    <Link to="/single_post_no_slidebar">
                        <li>Single Post - No Slidebar</li>
                    </Link>
                </ul>
                <div className="Contact_Open_Menu">
                    <h6>Contact</h6>
                    <hr />
                    <div className="Contact_Open_Menu_First">
                        <p>+86 852 346 000</p>
                        <p>info@foodzero.com</p>
                    </div>
                    <div className="Contact_Open_Menu_Second">
                        <p>1959 Sepulveda Blvd.</p>
                        <p>Culver City, CA, 90230</p>
                    </div>
                    <img src={Social_Media} alt="Social Media" />
                </div>
            </nav>
        </>
    )
}