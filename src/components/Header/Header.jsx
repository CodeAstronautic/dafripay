import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
import Logo from '../../images/logo.png';
import './Header.css';

export default function Header() {
    return (
        <div className='h-container'>
            <div className="h-parent">
                <div className="hp-l">
                    {/* <img src={Logo} alt="" /> */}
                </div>
                <ul className="hp-lr">
                    <li>Home</li>
                    <li>About</li>
                    <li>Career</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="h-parent">
                <div className="hp-btn">
                    <span>How it Works</span>
                    <span><FaRegPlayCircle /></span>
                </div>
                <div className="hp-btn">
                    <span>Get Started</span>
                </div>
            </div>
            <div className="hp-parent-res">
                <div className="hp-l">
                    {/* <img src={Logo} alt="" /> */}
                </div>
                <div class="dropdown">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger">
                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </label>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Blog</a></li>
                            <li>
                                <div className="hp-btn">
                                    <span>How it Works</span>
                                    <span><FaRegPlayCircle /></span>
                                </div>
                            </li>
                            <li>
                                <div style={{background:'white'}} className="hp-btn">
                                    <span>Get Started</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}
