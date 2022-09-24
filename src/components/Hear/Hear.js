import React from "react";
import './Hear.css';
import commas from '../../images/commas.svg';
import stars from '../../images/stars.svg';
import robert from '../../images/robert1.svg';
import arrow from '../../images/arrow.svg'

function Hear() {

    return (
        <section className="hear wow animate__animated animate__fadeIn" data-wow-duration="2s">
            <h2 className="hear__title">
                Hear what teams around the world saying about Collab.
            </h2>
            <div className="hear__reviewGroup">
                <img className="hear__commaUp" src={commas}/>
                <div className="hear__textGroup">
                    <img className="hear__stars"src={stars}/>
                    <p className="hear__text">
                        I want my team to spend 
                        time thinking about high level 
                        UX problems, rather than mindlessly 
                        repeating busy work. Collab helps 
                        them do that.
                        <br/>
                        <span className="hear__span">
                            Robert Mayar - Founder of Airbnb
                        </span>
                    </p>
                </div>
                <img className="hear__commaDown" src={commas}/>
            </div>
            <div className="hear__groupLogo">
                <img className="hear__logoRobert" src={robert}/>
                <img className="hear__arrowLeft" src={arrow}/>
                <img className="hear__arrowRight" src={arrow}/>
            </div>
        </section>
    );
}
export default Hear;