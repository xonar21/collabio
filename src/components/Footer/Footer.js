import React from "react";
import './Footer.css';
import logo from '../../images/logo.svg';
import circle from '../../images/circle6.svg';
import mail from '../../images/msg.svg';
import phone from '../../images/phone.svg';
import global from '../../images/global.svg';
import fb from '../../images/fb.svg';
import tw from '../../images/tw.svg';
import inst from '../../images/inst.svg';
import planet from '../../images/planet.svg';

function Footer() {
    
    return (
        <section className="footer wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <div className="footer__groupLogo">
                <img className="footer__logo" src={logo}/>
                <img className="footer__circle" src={circle}/>
            </div>
            <div className="footer__groupLinks">
                <h3 className="footer__linksTitle">
                Quick Links
                </h3>
                <a href="#" className="footer__link">
                Features
                </a>
                <a href="#" className="footer__link">
                About
                </a>
                <a href="#" className="footer__link">
                Pricing
                </a>
                <a href="#" className="footer__link">
                Pricing eCommerce
                </a>
                <a href="#" className="footer__link">
                Blog
                </a>
                <a href="#" className="footer__link">
                Contact
                </a>
                <a href="#" className="footer__link">
                Careers
                </a>
            </div>
            <div className="footer__groupLinks">
                <h3 className="footer__linksTitle">
                Template
                </h3>
                <a href="#" className="footer__link">
                Style Guide
                </a>
                <a href="#" className="footer__link">
                Licences
                </a>
                <a href="#" className="footer__link">
                Changelog
                </a>
                <a href="#" className="footer__link">
                Instructions
                </a>
                <a href="#" className="footer__link">
                Sign In
                </a>
                <a href="#" className="footer__link">
                Sign Up
                </a>
                <a href="#" className="footer__link">
                Forgot Password
                </a>
                <a href="#" className="footer__link">
                Password Protected
                </a>
                <a href="#" className="footer__link">
                404 Page
                </a>
            </div>
            <div className="footer__groupLinks">
                <h3 className="footer__linksTitle">
                Get In Touch
                </h3>
                <a href="#" className="footer__link">
                    <img className="footer__linkImg" src={mail}/>
                    Support@collab.com
                </a>
                <a href="#" className="footer__link">
                    <img className="footer__linkImg" src={phone}/>
                    +1-202-555-0144
                </a>
                <a href="#" className="footer__link">
                    <img className="footer__linkImg" src={global}/>
                    Collab.webflow.io
                </a>
                <div className="footer__groupSocial">
                    <img className="footer__socialIcon" src={fb}/>
                    <img className="footer__socialIcon" src={tw}/>
                    <img className="footer__socialIcon" src={inst}/>
                    <img className="footer__socialIcon" src={planet}/>
                </div>
            </div>
        </section>
    );
}
export default Footer;