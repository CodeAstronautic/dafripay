import React from 'react';
import img1 from '../../images/img1.png';
import './Sec1.css';

export default function Sec1() {
    return (
        <div className="sec1-container">
            <div className="sec1-l">
            <p className='s1l-grey'>DRIVE PRODUCTIVITY AND PROFITABILITY</p>
            <span className='s1l-head'>DafriPay is a SafeBank  powered decentralized  marketplace for buying and  selling crypto-currencies</span>
            <div className='s1l-btn'>Get Started Now</div>
            </div>
            <div className="sec1-r">
                <img src={img1} alt="" />
            </div>
        </div>
    )
}
