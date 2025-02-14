import { Link } from "react-router-dom"
import Head from "./heading/head"
import  "./heading/header.css"
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa";
function Header(){
    
    return(
        <div>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className="flexSB">
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/aboutMe"> About Me</Link></li>
                        <li><Link to="/skills"> Skills</Link></li>
                        <li><Link to="/employmentHistory"> Employment History</Link></li>
                        <li><Link to="/projects"> Projects</Link></li>
                        <li><Link to="/contact"> Contact</Link></li>
                    </ul>
                    <div className="start">
                    </div>

                </nav>
            </header>
        </div>
    )
}export default Header
