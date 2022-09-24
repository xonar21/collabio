import React from "react";
import './Build.css';
import build from '../../images/build.svg';
import robert from '../../images/robert.svg'
import circle1 from '../../images/circle1.svg'
function Build() {

    return (
        <section className="build wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <div className="build__groupText">
                <h2 className="build__title">
                    Build impactful creatives
                </h2>
                <p className="build__subtitle">
                    Track all changes made in a glance, 
                    add sticky notes and get the best 
                    minds on your team to work together.
                </p>
                <div className="build__groupRobert">
                    <img className="build__robertImg" src={robert}/>
                    <p className="build__text">
                        “Collab helps us to organize 
                        our work professionally and effectively”
                        <br/>
                        <span className="build__robert">Robert Mayar - Founder of Airbnb</span>
                    </p>
                </div>
                <button className="build__button">
                    Learn More
                </button>
                <img className="build__circle" src={circle1}/>
            </div>
            <img className="build__img" src={build}/>
        </section>
    );
}
export default Build;