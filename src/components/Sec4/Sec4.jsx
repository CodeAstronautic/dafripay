import React from 'react';
import img3 from '../../images/img3.png';
import './Sec4.css';
import { AiOutlineAppstore } from "react-icons/ai";

export default function Sec4() {
    return (
        <div className="sec4-container">
            
            <div className="sec4-l">
                <img src={img3} alt="" />
            </div>
            <div className="sec4-r">

            <span><AiOutlineAppstore/></span><br />
            <span className='s5r-head'>Real-time Communication</span>
            <p className='s5r-grey'>Connect and interact with all your suppliers in one place</p>
            </div>
        </div>
    )
}
