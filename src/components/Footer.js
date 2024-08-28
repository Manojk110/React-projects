// Footer.js

import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Releases</a></li>
                        <li><a href="#">Cliq Science</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect with Us</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li><a href="#">Sell on Cliq</a></li>
                        <li><a href="#">Sell under Cliq Accelerator</a></li>
                        <li><a href="#">Protect and Build Your Brand</a></li>
                        <li><a href="#">Cliq Global Selling</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Fulfilment by Cliq</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Cliq Pay on Merchants</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li><a href="#">COVID-19 and Cliq</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Returns Centre</a></li>
                        <li><a href="#">Recalls and Product Safety Alerts</a></li>
                        <li><a href="#">100% Purchase Protection</a></li>
                        <li><a href="#">Cliq App Download</a></li>
                    </ul>
                </div>
            </div>
            <div className='copy'>
                <center>
            <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p> <br></br>
            <p className="copyright">&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
            </center>
            </div>
        </footer>
    );
}
