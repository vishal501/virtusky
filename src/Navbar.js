import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            {/* <div className="circle"> */}
            <a href="\" class="logoind"><img src = "assets/images/logos.jpeg"/></a> 
            {/* </div> */}
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}>
                {/* <Link to ="/services" className="services">
                    <li>Services</li>
                </Link> */}
                <Link to ="/service" className="navservice">
                    <li>Services</li>
                </Link>
                <Link to ="/technology" className="navtechnology">
                    <li>Technology</li>
                </Link>
                <Link to ="/about" className="navabout">
                    <li>About</li>
                </Link>
                <Link to ="/blog" className="navblog">
                    <li>Blog</li>
                </Link>
                <Link to ="/projects" className="navprojects">
                    <li>Projects</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                //   <img src="assets/images/navbtn.png" className="navimg"/>
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
            </button>
        </nav>
    );
};

export default Navbar;