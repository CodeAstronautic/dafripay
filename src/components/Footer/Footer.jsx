import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowRight, FaRegCopyright } from "react-icons/fa";
import Logod from '../../images/logodark.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className='f-container'>
            <div className="f-parent">
                <div className="fp-l">
                    <img src={Logod} alt="" />
                </div>
                <ul className="fp-lr">
                    <li><span style={{color:'var(--cyan)'}}>e / </span>hello@dafriPay.com</li>
                    <li><span style={{color:'var(--cyan)'}}>t / </span>011 568 5053</li>
                    <li><span style={{color:'var(--cyan)'}}>f / </span>086 560 9785</li>
                    <li style={{
                        marginTop:'20px',
                    }}>
                        <span style={{marginRight:'5px',fontSize:'18px'}}>
                            <FaFacebook/>
                        </span>
                        <span style={{marginRight:'5px',fontSize:'18px'}}>
                            <FaTwitter/>
                        </span>
                        <span style={{marginRight:'5px',fontSize:'18px'}}>
                            <FaInstagram/>
                        </span>
                        <span style={{marginRight:'5px',fontSize:'18px'}}>
                            <FaLinkedin/>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="f-parent">
                <h3 className="fp-label">Quick Links</h3>
                <ul className="fp-lr f-links">
                    <li><span><FaArrowRight/></span> Home</li>
                    <li><span><FaArrowRight/></span> About</li>
                    <li><span><FaArrowRight/></span> Career</li>
                    <li><span><FaArrowRight/></span> Blog</li>
                    <li><span><FaArrowRight/></span> Affiliate</li>
                </ul>
            </div>
            <div className="f-parent">
                <h3 className="fp-label">Resources</h3>
                <ul className="fp-lr f-links">
                    <li><span><FaArrowRight/></span> Investment</li>
                    <li><span><FaArrowRight/></span> DafriXcange</li>
                    <li><span><FaArrowRight/></span> Get a Digital Bank Account</li>
                    <li><span><FaArrowRight/></span> DBA Currency</li>
                    <li><span><FaArrowRight/></span> Disputes</li>
                </ul>
            </div>
            <div className="f-parent">
                <h3 className="fp-label">Legal</h3>
                <ul className="fp-lr f-links">
                    <li><span><FaArrowRight/></span> Privacy Policy</li>
                    <li><span><FaArrowRight/></span> Cookie Notice</li>
                    <li><span><FaArrowRight/></span> AML Policy</li>
                </ul>
            </div>
            {/* <p>
            <FaRegCopyright/> 2021 DafriPayLTD. ALL rights Reserved. A DafriGroup PLC Company
            </p> */}
        </div>
    )
}
