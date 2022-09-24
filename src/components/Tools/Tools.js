import React from "react";
import './Tools.css';
import circle from '../../images/circle3.svg';
import diskord from '../../images/discord.svg';
import slack from '../../images/slack.svg';
import disk from '../../images/disk.svg';
import gmail from '../../images/gmail.svg';
import google from '../../images/google.svg';
import dropbox from '../../images/dropbox.svg';
import figma from '../../images/figma.svg';
import youtube from '../../images/youtube.svg';



function Tools() {
    
    return (
        <section className="tools wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <h2 className="tools__title">
                Collab integrates with all your favourite tools.
            </h2>
            <img className="tools__circle" src={circle}/>
            <div className="tools__groupIcon">
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay=".5s" src={diskord}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay=".6s" src={slack}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay="0.7s" src={disk}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay="0.8s" src={gmail}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay="0.9s" src={google}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay="1s" src={dropbox}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay="1.1s" src={figma}/>
                <img className="tools__icon wow animate__animated animate__bounceInDown" data-wow-delay="1.2s" src={youtube}/>
            </div>
        </section>
    );
}
export default Tools;